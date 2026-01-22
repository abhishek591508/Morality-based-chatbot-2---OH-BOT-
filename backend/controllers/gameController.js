import GameData from '../models/GameData.js';

// Save game data
export const saveGame = async (req, res) => {
  try {
    const gameData = new GameData(req.body);
    await gameData.save();

    res.status(201).json({
      success: true,
      message: 'Game data saved successfully',
      data: {
        id: gameData._id,
        username: gameData.username,
        storyId: gameData.storyId,
        storyTitle: gameData.storyTitle,
        endingType: gameData.endingType
      }
    });
  } catch (error) {
    console.error('Error saving game:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving game data',
      error: error.message
    });
  }
};

// Get game history for a user
export const getGameHistory = async (req, res) => {
  try {
    const { username } = req.params;
    
    const games = await GameData.find({ username })
      .sort({ playedAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: games.length,
      data: games
    });
  } catch (error) {
    console.error('Error fetching game history:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching game history',
      error: error.message
    });
  }
};

// Get all games (for admin/analytics)
export const getAllGames = async (req, res) => {
  try {
    const { limit = 100, page = 1, storyId } = req.query;
    
    // Build query filter
    const filter = {};
    if (storyId) {
      filter.storyId = storyId;
    }
    
    const games = await GameData.find(filter)
      .sort({ playedAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .select('-__v');

    const total = await GameData.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: games.length,
      total: total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: games
    });
  } catch (error) {
    console.error('Error fetching all games:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching games',
      error: error.message
    });
  }
};

// Get statistics
export const getStatistics = async (req, res) => {
  try {
    const totalGames = await GameData.countDocuments();
    const uniquePlayers = await GameData.distinct('username');
    
    // Overall ending stats
    const endingStats = await GameData.aggregate([
      {
        $group: {
          _id: '$endingType',
          count: { $sum: 1 }
        }
      }
    ]);

    // Stats per story
    const storyStats = await GameData.aggregate([
      {
        $group: {
          _id: '$storyId',
          count: { $sum: 1 },
          uniquePlayers: { $addToSet: '$username' }
        }
      },
      {
        $project: {
          storyId: '$_id',
          totalPlays: '$count',
          uniquePlayers: { $size: '$uniquePlayers' }
        }
      }
    ]);

    // Average scores overall
    const avgScores = await GameData.aggregate([
      {
        $group: {
          _id: null,
          avgWisdom: { $avg: '$moralScores.wisdom' },
          avgEmpathy: { $avg: '$moralScores.empathy' },
          avgResponsibility: { $avg: '$moralScores.responsibility' },
          avgHumility: { $avg: '$moralScores.humility' },
          avgRiskAwareness: { $avg: '$moralScores.riskAwareness' },
          avgArrogance: { $avg: '$moralScores.arrogance' },
          avgHonesty: { $avg: '$moralScores.honesty' },
          avgFairness: { $avg: '$moralScores.fairness' },
          avgDuty: { $avg: '$moralScores.duty' }
        }
      }
    ]);

    // Average scores per story
    const avgScoresPerStory = await GameData.aggregate([
      {
        $group: {
          _id: '$storyId',
          avgWisdom: { $avg: '$moralScores.wisdom' },
          avgEmpathy: { $avg: '$moralScores.empathy' },
          avgResponsibility: { $avg: '$moralScores.responsibility' },
          avgHumility: { $avg: '$moralScores.humility' },
          avgRiskAwareness: { $avg: '$moralScores.riskAwareness' },
          avgArrogance: { $avg: '$moralScores.arrogance' },
          avgHonesty: { $avg: '$moralScores.honesty' },
          avgFairness: { $avg: '$moralScores.fairness' },
          avgDuty: { $avg: '$moralScores.duty' }
        }
      }
    ]);

    // Ending distribution per story
    const endingsPerStory = await GameData.aggregate([
      {
        $group: {
          _id: {
            storyId: '$storyId',
            endingType: '$endingType'
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: '$_id.storyId',
          endings: {
            $push: {
              type: '$_id.endingType',
              count: '$count'
            }
          }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalGames,
        uniquePlayers: uniquePlayers.length,
        endingDistribution: endingStats,
        storyStatistics: storyStats,
        averageScores: avgScores[0] || {},
        averageScoresPerStory: avgScoresPerStory,
        endingsPerStory: endingsPerStory
      }
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
};

// Get statistics for a specific story
export const getStoryStatistics = async (req, res) => {
  try {
    const { storyId } = req.params;

    const totalGames = await GameData.countDocuments({ storyId });
    const uniquePlayers = await GameData.distinct('username', { storyId });
    
    const endingStats = await GameData.aggregate([
      { $match: { storyId } },
      {
        $group: {
          _id: '$endingType',
          count: { $sum: 1 }
        }
      }
    ]);

    const avgScores = await GameData.aggregate([
      { $match: { storyId } },
      {
        $group: {
          _id: null,
          avgWisdom: { $avg: '$moralScores.wisdom' },
          avgEmpathy: { $avg: '$moralScores.empathy' },
          avgResponsibility: { $avg: '$moralScores.responsibility' },
          avgHumility: { $avg: '$moralScores.humility' },
          avgRiskAwareness: { $avg: '$moralScores.riskAwareness' },
          avgArrogance: { $avg: '$moralScores.arrogance' },
          avgHonesty: { $avg: '$moralScores.honesty' },
          avgFairness: { $avg: '$moralScores.fairness' },
          avgDuty: { $avg: '$moralScores.duty' }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      storyId,
      data: {
        totalGames,
        uniquePlayers: uniquePlayers.length,
        endingDistribution: endingStats,
        averageScores: avgScores[0] || {}
      }
    });
  } catch (error) {
    console.error('Error fetching story statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching story statistics',
      error: error.message
    });
  }
};


