import React, { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';
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
      {/* Matching background glows */}
      <div className="bg-glow top-right"></div>
      <div className="bg-glow bottom-left"></div>

      <div className="username-card">
        <div className="user-icon-wrapper">
          <User size={40} strokeWidth={2.5} />
        </div>
        
        <h2 className="username-title">Identify Yourself</h2>
        <p className="username-subtitle">Your choices will shape the destiny of the characters</p>
        
        <div className="input-wrapper">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your name..."
            className="username-input"
            onKeyDown={handleKeyPress}
            autoFocus
          />
          <div className="input-highlight"></div>
        </div>
        
        <button 
          className={`action-button ${username.trim() ? "active" : "disabled"}`}
          onClick={handleSubmit}
          disabled={!username.trim()}
        >
          <span className="button-text">Start Story</span>
          <ArrowRight size={18} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default UsernameInput;



// import React, { useState } from 'react';
// import { User } from 'lucide-react';
// import './UsernameInput.css';

// const UsernameInput = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = () => {
//     if (username.trim()) {
//       onSubmit(username.trim());
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="username-container">
//       <div className="username-card">
//         <User size={48} className="username-icon" />
//         <h2 className="username-title">Enter Your Name</h2>
//         <p className="username-subtitle">Your choices will shape the story</p>
        
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Your name..."
//           className="username-input"
//           onKeyPress={handleKeyPress}
//           autoFocus
//         />
        
//         <button 
//           className={username.trim() ? "primary-button" : "disabled-button"}
//           onClick={handleSubmit}
//           disabled={!username.trim()}
//         >
//           Start Story
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UsernameInput;