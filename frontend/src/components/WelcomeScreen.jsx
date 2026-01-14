import React from 'react';
import { Play, BookOpen } from 'lucide-react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <BookOpen size={64} className="welcome-icon" />
        <h1 className="welcome-title">Moral Story Chatbot</h1>
        <p className="welcome-subtitle">Experience ancient wisdom through interactive storytelling</p>
        
        <div className="story-preview">
          <h2 className="story-title">The Four Learned Scholars</h2>
          <p className="story-description">
            A Panchatantra tale about four scholars who discover the remains of a lion. 
            Will wisdom prevail over arrogance?
          </p>
        </div>
        
        <button className="primary-button" onClick={onStart}>
          <Play size={20} />
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;