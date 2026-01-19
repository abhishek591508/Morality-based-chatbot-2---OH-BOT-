import React from 'react';
import { BookOpen, Music } from 'lucide-react';
import './StorySelection.css';

const StorySelection = ({ onSelectStory }) => {
  return (
    <div className="story-selection-container">
      <div className="story-selection-card">
        <h2 className="selection-title">Choose Your Story</h2>
        <p className="selection-subtitle">Select a tale to begin your moral journey</p>
        
        <div className="stories-grid">
          {/* Story 1: The Four Learned Scholars */}
          <div className="story-option" onClick={() => onSelectStory('story1')}>
            <div className="story-icon">🧙‍♂️</div>
            <h3 className="story-option-title">The Four Learned Scholars</h3>
            <p className="story-option-subtitle">A Panchatantra Tale of Wisdom</p>
            <p className="story-option-description">
              Four scholars discover the remains of a lion in the forest. 
              Will wisdom prevail over arrogance? Your choices will determine 
              if knowledge leads to glory or destruction.
            </p>
            <div className="story-meta">
              <span className="meta-item">⏱️ 5-7 minutes</span>
              <span className="meta-item">🎯 4 scenes</span>
              <span className="meta-item">📖 3 endings</span>
            </div>
            <div className="moral-focus">
              <p className="moral-title">Moral Focus:</p>
              <div className="moral-tags">
                <span className="moral-tag">Wisdom</span>
                <span className="moral-tag">Risk Awareness</span>
                <span className="moral-tag">Humility</span>
              </div>
            </div>
            <button className="story-select-btn">
              <BookOpen size={18} />
              Begin This Story
            </button>
          </div>

          {/* Story 2: The Fiddler's Lesson */}
          <div className="story-option" onClick={() => onSelectStory('story2')}>
            <div className="story-icon">🎻</div>
            <h3 className="story-option-title">The Fiddler's Lesson</h3>
            <p className="story-option-subtitle">A Tale of Deception and Consequences</p>
            <p className="story-option-description">
              A wandering fiddler's cleverness leads to unexpected consequences. 
              Will you choose kindness or trickery? Every decision shapes your 
              reputation and your fate.
            </p>
            <div className="story-meta">
              <span className="meta-item">⏱️ 6-9 minutes</span>
              <span className="meta-item">🎯 Multiple paths</span>
              <span className="meta-item">📖 8 endings</span>
            </div>
            <div className="moral-focus">
              <p className="moral-title">Moral Focus:</p>
              <div className="moral-tags">
                <span className="moral-tag">Honesty</span>
                <span className="moral-tag">Empathy</span>
                <span className="moral-tag">Fairness</span>
              </div>
            </div>
            <button className="story-select-btn">
              <Music size={18} />
              Begin This Story
            </button>
          </div>
        </div>

        <div className="selection-footer">
          <p className="footer-text">
            💡 Tip: Each story explores different moral values. Try both to experience the full journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySelection;