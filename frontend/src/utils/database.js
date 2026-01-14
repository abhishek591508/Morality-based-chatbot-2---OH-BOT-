const API_URL = 'http://localhost:5000/api/games';

export const saveGameData = async (gameData) => {
  try {
    const response = await fetch(`${API_URL}/save-game`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Game data saved successfully:', result.data);
      return result;
    } else {
      console.error('❌ Failed to save game data:', result.message);
      return result;
    }
  } catch (error) {
    console.error('❌ Error saving game data:', error);
    return { success: false, error: error.message };
  }
};

export const getGameHistory = async (username) => {
  try {
    const response = await fetch(`${API_URL}/history/${username}`);
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching game history:', error);
    return null;
  }
};

export const getAllGames = async (page = 1, limit = 100) => {
  try {
    const response = await fetch(`${API_URL}/all-games?page=${page}&limit=${limit}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching all games:', error);
    return null;
  }
};

export const getStatistics = async () => {
  try {
    const response = await fetch(`${API_URL}/statistics`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return null;
  }
};

// Download Excel report
export const downloadExcelReport = () => {
  window.open(`${API_URL}/export/excel`, '_blank');
};






// // This file handles MongoDB operations
// // For now, it's a placeholder - you'll need to set up a backend API

// export const saveGameData = async (gameData) => {
//   try {
//     // In a real implementation, you would send this to your backend API
//     console.log('Saving game data:', gameData);
    
//     // Example API call (you'll need to create this endpoint):
//     // const response = await fetch('http://localhost:5000/api/save-game', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(gameData)
//     // });
//     // return await response.json();
    
//     // For now, just log to console
//     localStorage.setItem('lastGame', JSON.stringify(gameData));
//     return { success: true };
//   } catch (error) {
//     console.error('Error saving game data:', error);
//     return { success: false, error };
//   }
// };

// export const getGameHistory = async (username) => {
//   try {
//     // In real implementation, fetch from your backend
//     const lastGame = localStorage.getItem('lastGame');
//     return lastGame ? JSON.parse(lastGame) : null;
//   } catch (error) {
//     console.error('Error fetching game history:', error);
//     return null;
//   }
// };