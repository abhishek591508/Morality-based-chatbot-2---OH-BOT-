import React, { useRef, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import UsernameInput from './components/UsernameInput';
import StorySelection from './components/StorySelection';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import ChoiceProjection from './components/ChoiceProjection';
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
  // Game state: welcome, username, storySelect, playing, projecting, results
  const [gameState, setGameState] = useState('welcome');
  const [username, setUsername] = useState('');
  const [selectedStory, setSelectedStory] = useState('story1');
  const [currentScene, setCurrentScene] = useState('scene1');
  const [moralScores, setMoralScores] = useState(getInitialScores());
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [sceneNumber, setSceneNumber] = useState(1);

  // Post-choice projection state
  const [projection, setProjection] = useState(null);
  const [ragLoading, setRagLoading] = useState(false);
  const [ragFeedback, setRagFeedback] = useState(null);
  const ragRequestIdRef = useRef(0);

  const clearProjection = () => {
    ragRequestIdRef.current += 1; // invalidate in-flight RAG
    setProjection(null);
    setRagLoading(false);
    setRagFeedback(null);
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

  // Pause on projection before advancing the scene
  const handleChoiceSelect = async (choice) => {
    setSceneNumber((prev) => prev + 1);

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

    setProjection({
      choiceText: choice.text,
      choicePreview: choice.preview,
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
    setRagFeedback(null);
    setRagLoading(true);
    setGameState('projecting');

    const requestId = ++ragRequestIdRef.current;
    const feedback = await fetchChoiceFeedback({
      username,
      storyId: selectedStory,
      storyTitle: STORY_DATA[selectedStory].title,
      sceneId: currentScene,
      choiceText: choice.text,
      choicePreview: choice.preview,
      moralImpact: choice.moralImpact,
      updatedScores: newScores,
      endingLean
    });

    // Ignore stale responses if user already continued
    if (requestId !== ragRequestIdRef.current) return;

    if (feedback) {
      setRagFeedback(feedback);
    } else {
      setRagFeedback({
        choiceLine:
          choice.preview ||
          'This choice updates your moral scores based on the values it emphasizes.',
        endingForecast: endingLean
          ? `Based on your current scores, you appear ${endingLean.toLowerCase()}. Later choices can still change this.`
          : 'Your later choices will continue to shape how this story may end.',
        sources: [],
        usedFallback: true
      });
    }
    setRagLoading(false);
  };

  const handleProjectionContinue = async () => {
    if (!projection?.pending) return;

    const { nextScene, nextSceneData, newScores, newHistory } = projection.pending;
    setCurrentScene(nextScene);
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
    } else {
      setGameState('playing');
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
        />
      )}

      {gameState === 'projecting' && projection && (
        <ChoiceProjection
          choiceText={projection.choiceText}
          scoreDeltas={projection.scoreDeltas}
          moralScores={projection.moralScores}
          endingLean={projection.endingLean}
          ragLoading={ragLoading}
          ragFeedback={ragFeedback}
          onContinue={handleProjectionContinue}
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
