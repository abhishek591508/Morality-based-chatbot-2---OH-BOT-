import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      {/* Decorative background elements */}
      <div className="bg-glow top-left"></div>
      <div className="bg-glow bottom-right"></div>
      
      <div className="welcome-card">
        <div className="icon-wrapper">
          <img src="/book3.svg" alt="Logo" height={60}/>
        </div>
        
        <div className="header-section">
          <h1 className="welcome-title">Moral Story Chatbot</h1>
          <p className="welcome-subtitle">Journey through ancient wisdom & interactive tales</p>
        </div>
        
        <div className="story-preview-card">
          <div className="badge">Featured Tales</div>
          <h2 className="story-title">The Four Learned Scholars</h2>
          <p className="story-description">
            A lesson on knowledge vs wisdom.
          </p><br />
          <h2 className="story-title">The Fiddler's Lession</h2>
          <p className="story-description">
            A classic Panchatantra tale.
          </p>
        </div>
        
        <button className="primary-button" onClick={onStart}>
          <span className="button-content">
            <Play size={20} fill="currentColor" />
            Begin Your Journey
          </span>
          <div className="button-shimmer"></div>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
