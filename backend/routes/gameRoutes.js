import express from 'express';
import {
  saveGame,
  getGameHistory,
  getAllGames,
  getStatistics
} from '../controllers/gameController.js';
import { generateExcelReport } from '../utils/excelGenerator.js';

const router = express.Router();

// Save game data
router.post('/save-game', saveGame);

// Get game history for specific user
router.get('/history/:username', getGameHistory);

// Get all games (paginated)
router.get('/all-games', getAllGames);

// Get statistics
router.get('/statistics', getStatistics);

// Download Excel report
router.get('/export/excel', generateExcelReport);

export default router;