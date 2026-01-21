import React from 'react';
import { getScoreColor } from '../utils/moralCalculations';
import './ResultsScreen.css';
import { downloadExcelReport } from '../utils/database';

const ResultsScreen = ({ username, moralScores, feedback, endingType, onPlayAgain, onReStart }) => {
  const getEndingTitle = () => {
    switch (endingType) {
      case 'survival':
        return "Survivor's Wisdom";
      case 'death':
        return "A Tragic End";
      case 'prevention':
        return "Wisdom Prevails!";

        // Story 2 endings
      case 'unchanged':
        return "Unchanged";
      case 'redemption':
        return "Redemption Earned";
      case 'consequence':
        return "Deserved Consequence";
      case 'coward':
        return "Coward's Flee";
      case 'forgiveness':
        return  "Forgiveness Granted";
      case 'weak_redemption':
        return "Weak Apology";
      case 'fled':
        return "Fled in Shame";
      case 'validated':
        return "Validated Change";
      case 'kindness':
        return "Kindness Prevails";
      case 'balanced':
        return "Balanced Kindness";
      case 'honest':
        return "Honest Path";
      case 'pure':
        return "Pure Kindness";
      case 'softened':
        return "Softened Heart";
      case 'self_betrayal':
        return "Self Betrayal";
      case 'solitude':
        return "Chosen Solitude";
      case 'growth':
        return "Reflective Growth";
      case 'false':
        return "False Redemption";
      case 'exile':
        return "Self Exile";
      case 'protected':
        return "Protected Others";
      case 'victory':
        return "Self-Control Victory";
      case 'guided':
        return "Guided Redemption";
      case 'desperate':
        return "Desperate Honesty";
      case 'irredeemable':
        return "Irredeemable";
      case 'mercy':
        return  "Mercy Received";


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
        <button className="primary-button" onClick={onReStart}>
          Restart Game
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