import React, { useState } from 'react';
import './ChoiceButton.css';

const ChoiceButton = ({ choice, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="choice-wrapper">
      <button
        className={`choice-button ${isHovered ? 'choice-button-hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(choice)}
      >
        <span className="choice-label">{choice.id}</span>
        <span className="choice-text">{choice.text}</span>
      </button>
      
      {isHovered && (
        <div className="tooltip">
          <div className="tooltip-arrow" />
          <p className="tooltip-text">
            <strong>Preview:</strong> {choice.preview}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChoiceButton;