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
          <Sparkles size={40} className="welcome-icon" />
        </div>
        
        <div className="header-section">
          <h1 className="welcome-title">Moral Story Chatbot</h1>
          <p className="welcome-subtitle">Journey through ancient wisdom & interactive tales</p>
        </div>
        
        <div className="story-preview-card">
          <div className="badge">Featured Tale</div>
          <h2 className="story-title">The Four Learned Scholars</h2>
          <p className="story-description">
            A classic Panchatantra tale where four scholars encounter a fallen lion. 
            A lesson on common sense versus intellectual pride.
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


// import React from 'react';
// import { Play, BookOpen } from 'lucide-react';
// import './WelcomeScreen.css';

// const WelcomeScreen = ({ onStart }) => {
//   return (
//     <div className="welcome-container">
//       <div className="welcome-card">
//         <BookOpen size={64} className="welcome-icon" />
//         <h1 className="welcome-title">Moral Story Chatbot</h1>
//         <p className="welcome-subtitle">Experience ancient wisdom through interactive storytelling</p>
        
//         <div className="story-preview">
//           <h2 className="story-title">The Four Learned Scholars</h2>
//           <p className="story-description">
//             A Panchatantra tale about four scholars who discover the remains of a lion. 
//             Will wisdom prevail over arrogance?
//           </p>
//         </div>
        
//         <button className="primary-button" onClick={onStart}>
//           <Play size={20} />
//           Begin Your Journey
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WelcomeScreen;