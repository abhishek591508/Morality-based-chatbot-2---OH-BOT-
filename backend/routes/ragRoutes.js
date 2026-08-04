import express from 'express';
import { getChoiceFeedback } from '../controllers/ragController.js';

const router = express.Router();

router.post('/choice-feedback', getChoiceFeedback);

export default router;
