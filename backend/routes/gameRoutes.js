import express from 'express';
import {
  saveGame,
  getGameHistory,
  getAllGames,
  getStatistics,
  getStoryStatistics
} from '../controllers/gameController.js';
import { generateExcelReport } from '../utils/excelGenerator.js';

const router = express.Router();

// Save game data
router.post('/save-game', saveGame);

// Get game history for specific user
router.get('/history/:username', getGameHistory);

// Get all games (paginated, can filter by storyId)
router.get('/all-games', getAllGames);

// Get overall statistics
router.get('/statistics', getStatistics);

// Get statistics for a specific story
router.get('/statistics/:storyId', getStoryStatistics);

// Download Excel report
router.get('/export/excel', generateExcelReport);

export default router;

