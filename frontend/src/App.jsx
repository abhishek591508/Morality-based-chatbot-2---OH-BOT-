import React, { useRef, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import UsernameInput from './components/UsernameInput';
import StorySelection from './components/StorySelection';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import { STORY_DATA } from './data/storyData';
import { 
  getInitialScores, 
  updateMoralScores, 
  generateFeedback,
  determineConditionalEnding,
  getScoreDeltas,
  projectEndingLean
} from './utils/moralCalculations';
import { saveGameData } from './utils/database';
import { fetchChoiceFeedback } from './utils/rag';
import './App.css';

function App() {
  // Game state: welcome, username, storySelect, playing, results
  const [gameState, setGameState] = useState('welcome');
  const [username, setUsername] = useState('');
  const [selectedStory, setSelectedStory] = useState('story1');
  const [currentScene, setCurrentScene] = useState('scene1');
  const [moralScores, setMoralScores] = useState(getInitialScores());
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [sceneNumber, setSceneNumber] = useState(1);

  // Post-choice projection (shown beside the same game screen)
  const [projection, setProjection] = useState(null);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [ragEnabled, setRagEnabled] = useState(false);
  const [ragLoading, setRagLoading] = useState(false);
  const [ragFeedback, setRagFeedback] = useState(null);
  const ragRequestIdRef = useRef(0);

  const buildLocalFeedback = (choicePreview, endingLean) => ({
    choiceLine:
      choicePreview ||
      'This choice updates your moral scores based on the values it emphasizes.',
    endingForecast: endingLean
      ? `Based on your current scores, you appear ${endingLean.toLowerCase()}. Later choices can still change this.`
      : 'Your later choices will continue to shape how this story may end.',
    sources: [],
    usedFallback: true
  });

  const clearProjection = () => {
    ragRequestIdRef.current += 1;
    setProjection(null);
    setSelectedChoiceId(null);
    setRagLoading(false);
    setRagFeedback(null);
  };

  const requestRagFeedback = async ({
    choiceText,
    choicePreview,
    moralImpact,
    updatedScores,
    endingLean,
    sceneId
  }) => {
    setRagLoading(true);
    const requestId = ++ragRequestIdRef.current;

    const feedback = await fetchChoiceFeedback({
      username,
      storyId: selectedStory,
      storyTitle: STORY_DATA[selectedStory].title,
      sceneId,
      choiceText,
      choicePreview,
      moralImpact,
      updatedScores,
      endingLean
    });

    if (requestId !== ragRequestIdRef.current) return;

    setRagFeedback(feedback || buildLocalFeedback(choicePreview, endingLean));
    setRagLoading(false);
  };

  const handleStart = () => {
    setGameState('username');
  };

  const handleUsernameSubmit = (name) => {
    setUsername(name);
    const storyCount = Object.keys(STORY_DATA).length;
    if (storyCount > 1) {
      setGameState('storySelect');
    } else {
      setSelectedStory('story1');
      setGameState('playing');
    }
  };

  const handleStorySelect = (storyId) => {
    setSelectedStory(storyId);
    setCurrentScene('scene1');
    setGameState('playing');
  };

  // Keep the same scene visible; show projection on the right
  const handleChoiceSelect = async (choice) => {
    if (projection) return;

    const newScores = updateMoralScores(moralScores, choice.moralImpact);
    setMoralScores(newScores);

    const newHistory = [
      ...decisionHistory,
      {
        scene: currentScene,
        choice: choice.text,
        impact: choice.moralImpact
      }
    ];
    setDecisionHistory(newHistory);

    let nextScene = choice.nextScene;
    if (selectedStory === 'story1' && choice.nextScene === 'ending_conditional') {
      nextScene = determineConditionalEnding(newScores);
    }

    const nextSceneData = STORY_DATA[selectedStory].scenes[nextScene];
    const scoreDeltas = getScoreDeltas(choice.moralImpact);
    const endingLean = projectEndingLean(selectedStory, newScores);

    setSelectedChoiceId(choice.id);
    setProjection({
      choiceText: choice.text,
      choicePreview: choice.preview,
      moralImpact: choice.moralImpact,
      sceneId: currentScene,
      scoreDeltas,
      moralScores: newScores,
      endingLean,
      pending: {
        nextScene,
        nextSceneData,
        newScores,
        newHistory
      }
    });

    // Always show local preview first; fetch RAG only when enabled
    setRagFeedback(buildLocalFeedback(choice.preview, endingLean));
    setRagLoading(false);

    if (ragEnabled) {
      await requestRagFeedback({
        choiceText: choice.text,
        choicePreview: choice.preview,
        moralImpact: choice.moralImpact,
        updatedScores: newScores,
        endingLean,
        sceneId: currentScene
      });
    }
  };

  const handleRagToggle = async (enabled) => {
    setRagEnabled(enabled);
    if (!projection) return;

    if (!enabled) {
      ragRequestIdRef.current += 1;
      setRagLoading(false);
      setRagFeedback(
        buildLocalFeedback(projection.choicePreview, projection.endingLean)
      );
      return;
    }

    await requestRagFeedback({
      choiceText: projection.choiceText,
      choicePreview: projection.choicePreview,
      moralImpact: projection.moralImpact,
      updatedScores: projection.moralScores,
      endingLean: projection.endingLean,
      sceneId: projection.sceneId
    });
  };

  const handleProjectionContinue = async () => {
    if (!projection?.pending) return;

    const { nextScene, nextSceneData, newScores, newHistory } = projection.pending;
    setCurrentScene(nextScene);
    setSceneNumber((prev) => prev + 1);
    clearProjection();

    if (nextSceneData?.isEnding) {
      setGameState('results');
      await saveGameData({
        username,
        storyId: selectedStory,
        storyTitle: STORY_DATA[selectedStory].title,
        moralScores: newScores,
        decisionHistory: newHistory,
        endingType: nextSceneData.endingType,
        timestamp: new Date().toISOString()
      });
    }
  };

  const handleReStart = () => {
    setGameState('username');
    setUsername('');
    setSelectedStory('story1');
    setCurrentScene('scene1');
    setMoralScores(getInitialScores());
    setDecisionHistory([]);
    setSceneNumber(1);
    clearProjection();
  };

  const handlePlayAgain = () => {
    setGameState('playing');
    setCurrentScene('scene1');
    setMoralScores(getInitialScores());
    setDecisionHistory([]);
    setSceneNumber(1);
    clearProjection();
  };

  const currentStoryData = STORY_DATA[selectedStory];
  const currentSceneData = currentStoryData ? currentStoryData.scenes[currentScene] : null;
  const feedback = generateFeedback(moralScores);

  return (
    <div className="app">
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {gameState === 'username' && (
        <UsernameInput onSubmit={handleUsernameSubmit} />
      )}

      {gameState === 'storySelect' && (
        <StorySelection onSelectStory={handleStorySelect} />
      )}
      
      {gameState === 'playing' && currentSceneData && (
        <GameScreen
          username={username}
          scene={currentSceneData}
          storyTitle={currentStoryData.title}
          onChoiceSelect={handleChoiceSelect}
          sceneNumber={sceneNumber}
          projection={projection}
          selectedChoiceId={selectedChoiceId}
          ragEnabled={ragEnabled}
          ragLoading={ragLoading}
          ragFeedback={ragFeedback}
          onRagToggle={handleRagToggle}
          onProjectionContinue={handleProjectionContinue}
        />
      )}
      
      {gameState === 'results' && currentSceneData && (
        <ResultsScreen
          username={username}
          storyTitle={currentStoryData.title}
          moralScores={moralScores}
          feedback={feedback}
          endingType={currentSceneData.endingType}
          onPlayAgain={handlePlayAgain}
          onReStart={handleReStart}
        />
      )}
    </div>
  );
}

export default App;
