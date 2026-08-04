import React, { useState } from 'react';
import './ChoiceButton.css';

const ChoiceButton = ({ choice, onSelect, disabled = false, selected = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const showTooltip = isHovered && !disabled;

  return (
    <div className="choice-wrapper">
      <button
        className={`choice-button ${isHovered && !disabled ? 'choice-button-hovered' : ''} ${selected ? 'choice-button-selected' : ''} ${disabled && !selected ? 'choice-button-dimmed' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !disabled && onSelect(choice)}
        disabled={disabled}
      >
        <span className="choice-label">{choice.id}</span>
        <span className="choice-text">{choice.text}</span>
      </button>
      
      {showTooltip && (
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
