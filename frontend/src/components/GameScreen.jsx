import React from 'react';
import ChoiceButton from './ChoiceButton';
import './GameScreen.css';

const GameScreen = ({ username, scene, storyTitle, onChoiceSelect, sceneNumber }) => {
  
  return (
    <div className="game-container">
      <div className="game-card" key={scene.id}>
        <div className="game-header">
          <h3 className="player-name"> {username}: Scene {sceneNumber}</h3>
          {storyTitle && <p className="story-label"> {storyTitle}</p>}
        </div>

        <div className="narration-box">
          <p className="narration-text">{scene.narration}</p>
        </div>

        {!scene.isEnding && (
          <>
            <div className="question-section">
              <h3 className="question-text">{scene.question}</h3>
            </div>

            <div className="choices-container">
              {scene.choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  onSelect={onChoiceSelect}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GameScreen;

// import React from 'react';
// import ChoiceButton from './ChoiceButton';
// import './GameScreen.css';

// const GameScreen = ({ username, scene, onChoiceSelect, sceneNumber }) => {
  
//   return (
//     <div className="game-container">
//       <div className="game-card" key={scene.id}>
//         <div className="game-header">
//           <h3 className="player-name">⚔️ {username}: Scene {sceneNumber} </h3>
//         </div>

//         <div className="narration-box">
//           <p className="narration-text">{scene.narration}</p>
//         </div>

//         {!scene.isEnding && (
//           <>
//             <div className="question-section">
//               <h3 className="question-text">{scene.question}</h3>
//             </div>

//             <div className="choices-container">
//               {scene.choices.map((choice) => (
//                 <ChoiceButton
//                   key={choice.id}
//                   choice={choice}
//                   onSelect={onChoiceSelect}
//                 />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GameScreen;