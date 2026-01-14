import React, { useState } from 'react';
import { User } from 'lucide-react';
import './UsernameInput.css';

const UsernameInput = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="username-container">
      <div className="username-card">
        <User size={48} className="username-icon" />
        <h2 className="username-title">Enter Your Name</h2>
        <p className="username-subtitle">Your choices will shape the story</p>
        
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name..."
          className="username-input"
          onKeyPress={handleKeyPress}
          autoFocus
        />
        
        <button 
          className={username.trim() ? "primary-button" : "disabled-button"}
          onClick={handleSubmit}
          disabled={!username.trim()}
        >
          Start Story
        </button>
      </div>
    </div>
  );
};

export default UsernameInput;