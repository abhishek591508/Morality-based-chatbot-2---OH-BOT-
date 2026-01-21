import React, { useState } from 'react';
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
  determineConditionalEnding 
} from './utils/moralCalculations';
import { saveGameData } from './utils/database';
import './App.css';

function App() {
  // Game state: welcome, username, storySelect, playing, results
  const [gameState, setGameState] = useState('welcome');
  const [username, setUsername] = useState('');
  const [selectedStory, setSelectedStory] = useState('story1'); // Default to story1 for backward compatibility
  const [currentScene, setCurrentScene] = useState('scene1');
  const [moralScores, setMoralScores] = useState(getInitialScores());
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [sceneNumber, setSceneNumber] = useState(1);

  // Handle start button from welcome screen
  const handleStart = () => {
    setGameState('username');
  };

  // Handle username submission - now goes to story selection
  const handleUsernameSubmit = (name) => {
    setUsername(name);
    // Check if we have multiple stories
    const storyCount = Object.keys(STORY_DATA).length;
    if (storyCount > 1) {
      // Multiple stories available - show selection screen
      setGameState('storySelect');
    } else {
      // Only one story - go directly to playing
      setSelectedStory('story1');
      setGameState('playing');
    }
  };

  // Handle story selection
  const handleStorySelect = (storyId) => {
    setSelectedStory(storyId);
    setCurrentScene('scene1');
    setGameState('playing');
  };

  // Handle choice selection during gameplay
  const handleChoiceSelect = (choice) => {
    //increase sceneNumber
    setSceneNumber(prev => prev + 1);

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
    
    // Handle conditional ending (currently only for story1)
    if (selectedStory === 'story1' && choice.nextScene === 'ending_conditional') {
      nextScene = determineConditionalEnding(newScores);
    }

    setCurrentScene(nextScene);

    // Check if ending
    const nextSceneData = STORY_DATA[selectedStory].scenes[nextScene];
    if (nextSceneData?.isEnding) {
      setTimeout(async () => {
        setGameState('results');
        // Save to database
        await saveGameData({
          username,
          storyId: selectedStory,
          storyTitle: STORY_DATA[selectedStory].title,
          moralScores: newScores,
          decisionHistory: newHistory,
          endingType: nextSceneData.endingType,
          timestamp: new Date().toISOString()
        });
      }, 100);
    }
  };

  // Handle play again - reset everything
  const handleReStart = () => {
    setGameState('username');
    setUsername('');
    setSelectedStory('story1'); // Reset to default
    setCurrentScene('scene1');
    setMoralScores(getInitialScores());
    setDecisionHistory([]);
    setSceneNumber(1);
  };
  const handlePlayAgain = () => {
    setGameState('playing');
    setCurrentScene('scene1');
    setMoralScores(getInitialScores());
    setDecisionHistory([]);
    setSceneNumber(1);
  };

  // Get current story and scene data
  const currentStoryData = STORY_DATA[selectedStory];
  const currentSceneData = currentStoryData ? currentStoryData.scenes[currentScene] : null;
  const feedback = generateFeedback(moralScores);

  return (
    <div className="app">
      {/* Welcome Screen */}
      {gameState === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {/* Username Input Screen */}
      {gameState === 'username' && (
        <UsernameInput onSubmit={handleUsernameSubmit} />
      )}

      {/* Story Selection Screen (NEW) */}
      {gameState === 'storySelect' && (
        <StorySelection onSelectStory={handleStorySelect} />
      )}
      
      {/* Game Playing Screen */}
      {gameState === 'playing' && currentSceneData && (
        <GameScreen
          username={username}
          scene={currentSceneData}
          storyTitle={currentStoryData.title}
          onChoiceSelect={handleChoiceSelect}
          sceneNumber={sceneNumber}
        />
      )}
      
      {/* Results Screen */}
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



// import React, { useState } from 'react';
// import WelcomeScreen from './components/WelcomeScreen';
// import UsernameInput from './components/UsernameInput';
// import GameScreen from './components/GameScreen';
// import ResultsScreen from './components/ResultsScreen';
// import { STORY_DATA } from './data/storyData';
// import { 
//   getInitialScores, 
//   updateMoralScores, 
//   generateFeedback,
//   determineConditionalEnding 
// } from './utils/moralCalculations';
// import { saveGameData } from './utils/database';
// import './App.css';

// function App() {
//   const [gameState, setGameState] = useState('welcome'); // welcome, username, playing, results
//   const [username, setUsername] = useState('');
//   const [currentScene, setCurrentScene] = useState('scene1');
//   const [moralScores, setMoralScores] = useState(getInitialScores());
//   const [decisionHistory, setDecisionHistory] = useState([]);

//   const handleStart = () => {
//     setGameState('username');
//   };

//   const handleUsernameSubmit = (name) => {
//     setUsername(name);
//     setGameState('playing');
//   };

//   const handleChoiceSelect = (choice) => {
//     // Update moral scores
//     const newScores = updateMoralScores(moralScores, choice.moralImpact);
//     setMoralScores(newScores);

//     // Record decision
//     const newHistory = [
//       ...decisionHistory,
//       {
//         scene: currentScene,
//         choice: choice.text,
//         impact: choice.moralImpact
//       }
//     ];
//     setDecisionHistory(newHistory);

//     // Determine next scene
//     let nextScene = choice.nextScene;
    
//     // Handle conditional ending
//     if (choice.nextScene === 'ending_conditional') {
//       nextScene = determineConditionalEnding(newScores);
//     }

//     setCurrentScene(nextScene);

//     // Check if ending
//     const nextSceneData = STORY_DATA.story1.scenes[nextScene];
//     if (nextSceneData?.isEnding) {
//       setTimeout(async () => {
//         setGameState('results');
//         // Save to database
//         await saveGameData({
//           username,
//           moralScores: newScores,
//           decisionHistory: newHistory,
//           endingType: nextSceneData.endingType,
//           timestamp: new Date().toISOString()
//         });
//       }, 100);
//     }
//   };

//   const handlePlayAgain = () => {
//     setGameState('welcome');
//     setUsername('');
//     setCurrentScene('scene1');
//     setMoralScores(getInitialScores());
//     setDecisionHistory([]);
//   };

//   const currentSceneData = STORY_DATA.story1.scenes[currentScene];
//   const feedback = generateFeedback(moralScores);

//   return (
//     <div className="app">
//       {gameState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      
//       {gameState === 'username' && (
//         <UsernameInput onSubmit={handleUsernameSubmit} />
//       )}
      
//       {gameState === 'playing' && (
//         <GameScreen
//           username={username}
//           scene={currentSceneData}
//           onChoiceSelect={handleChoiceSelect}
//         />
//       )}
      
//       {gameState === 'results' && (
//         <ResultsScreen
//           username={username}
//           moralScores={moralScores}
//           feedback={feedback}
//           endingType={currentSceneData.endingType}
//           onPlayAgain={handlePlayAgain}
//         />
//       )}
//     </div>
//   );
// }

// export default App;