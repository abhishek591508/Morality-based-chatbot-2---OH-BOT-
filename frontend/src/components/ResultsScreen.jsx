import React from 'react';
import { getScoreColor } from '../utils/moralCalculations';
import './ResultsScreen.css';
import { downloadExcelReport } from '../utils/database';

const ResultsScreen = ({ username, moralScores, feedback, endingType, onPlayAgain }) => {
  const getEndingTitle = () => {
    switch (endingType) {
      case 'survival':
        return "Survivor's Wisdom";
      case 'death':
        return "A Tragic End";
      case 'prevention':
        return "Wisdom Prevails!";
      default:
        return "Story Complete";
    }
  };

  const formatScoreName = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h2 className="results-title">Your Moral Journey: Complete</h2>
        <p className="results-player">Player: {username}</p>

        <div className="scores-grid">
          {Object.entries(moralScores).map(([key, value]) => (
            <div key={key} className="score-item">
              <div className="score-header">
                <span className="score-name">{formatScoreName(key)}</span>
                <span className="score-value">{value}/100</span>
              </div>
              <div className="score-bar">
                <div 
                  className="score-bar-fill"
                  style={{ 
                    width: `${value}%`, 
                    backgroundColor: getScoreColor(value) 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="feedback-section">
          <h3 className="feedback-title">Your Moral Profile</h3>
          {feedback.map((item, idx) => (
            <p key={idx} className="feedback-item">{item}</p>
          ))}
        </div>

        <div className="ending-section">
          <h3 className="ending-title">{getEndingTitle()}</h3>
        </div>
        
        <div className='button-row'>
        <button className="primary-button" onClick={onPlayAgain}>
          Play Again
        </button>
        <button className="primary-button" onClick={downloadExcelReport}>
          DOWNLOAD EXCEL SHEET
        </button>
        </div>

      </div>
    </div>
  );
};

export default ResultsScreen;