import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import UsernameInput from './components/UsernameInput';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import { STORY_DATA } from './data/storyData';
import { 
  getInitialScores, 
  updateMoralScores, 
  generateFeedback,
  determineConditionalEnding 
} from './utils/moralCalculations';
import { saveGameData } from './utils/database';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('welcome'); // welcome, username, playing, results
  const [username, setUsername] = useState('');
  const [currentScene, setCurrentScene] = useState('scene1');
  const [moralScores, setMoralScores] = useState(getInitialScores());
  const [decisionHistory, setDecisionHistory] = useState([]);

  const handleStart = () => {
    setGameState('username');
  };

  const handleUsernameSubmit = (name) => {
    setUsername(name);
    setGameState('playing');
  };

  const handleChoiceSelect = (choice) => {
    // Update moral scores
    const newScores = updateMoralScores(moralScores, choice.moralImpact);
    setMoralScores(newScores);

    // Record decision
    const newHistory = [
      ...decisionHistory,
      {
        scene: currentScene,
        choice: choice.text,
        impact: choice.moralImpact
      }
    ];
    setDecisionHistory(newHistory);

    // Determine next scene
    let nextScene = choice.nextScene;
    
    // Handle conditional ending
    if (choice.nextScene === 'ending_conditional') {
      nextScene = determineConditionalEnding(newScores);
    }

    setCurrentScene(nextScene);

    // Check if ending
    const nextSceneData = STORY_DATA.story1.scenes[nextScene];
    if (nextSceneData?.isEnding) {
      setTimeout(async () => {
        setGameState('results');
        // Save to database
        await saveGameData({
          username,
          moralScores: newScores,
          decisionHistory: newHistory,
          endingType: nextSceneData.endingType,
          timestamp: new Date().toISOString()
        });
      }, 100);
    }
  };

  const handlePlayAgain = () => {
    setGameState('welcome');
    setUsername('');
    setCurrentScene('scene1');
    setMoralScores(getInitialScores());
    setDecisionHistory([]);
  };

  const currentSceneData = STORY_DATA.story1.scenes[currentScene];
  const feedback = generateFeedback(moralScores);

  return (
    <div className="app">
      {gameState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      
      {gameState === 'username' && (
        <UsernameInput onSubmit={handleUsernameSubmit} />
      )}
      
      {gameState === 'playing' && (
        <GameScreen
          username={username}
          scene={currentSceneData}
          onChoiceSelect={handleChoiceSelect}
        />
      )}
      
      {gameState === 'results' && (
        <ResultsScreen
          username={username}
          moralScores={moralScores}
          feedback={feedback}
          endingType={currentSceneData.endingType}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}

export default App;