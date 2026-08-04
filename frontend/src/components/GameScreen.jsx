import React from 'react';
import ChoiceButton from './ChoiceButton';
import ChoiceProjection from './ChoiceProjection';
import './GameScreen.css';

const GameScreen = ({
  username,
  scene,
  storyTitle,
  onChoiceSelect,
  sceneNumber,
  projection = null,
  selectedChoiceId = null,
  ragLoading = false,
  ragFeedback = null,
  onProjectionContinue
}) => {
  const showProjection = Boolean(projection);

  return (
    <div className={`game-container ${showProjection ? 'game-container-split' : ''}`}>
      <div className={`game-card ${showProjection ? 'game-card-left' : ''}`} key={scene.id}>
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

            <div className={`choices-container ${showProjection ? 'choices-locked' : ''}`}>
              {scene.choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  onSelect={onChoiceSelect}
                  disabled={showProjection}
                  selected={selectedChoiceId === choice.id}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {showProjection && (
        <ChoiceProjection
          embedded
          choiceText={projection.choiceText}
          scoreDeltas={projection.scoreDeltas}
          moralScores={projection.moralScores}
          endingLean={projection.endingLean}
          ragLoading={ragLoading}
          ragFeedback={ragFeedback}
          onContinue={onProjectionContinue}
        />
      )}
    </div>
  );
};

export default GameScreen;
