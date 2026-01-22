import mongoose from 'mongoose';

const decisionSchema = new mongoose.Schema({
  scene: String,
  choice: String,
  impact: {
    type: Map,
    of: Number
  }
});

const moralScoresSchema = new mongoose.Schema({
  honesty: { type: Number, default: 50 },
  empathy: { type: Number, default: 50 },
  fairness: { type: Number, default: 50 },
  duty: { type: Number, default: 50 },
  wisdom: { type: Number, default: 50 },
  humility: { type: Number, default: 50 },
  responsibility: { type: Number, default: 50 },
  riskAwareness: { type: Number, default: 50 },
  arrogance: { type: Number, default: 50 }
});

const gameDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  storyId: {
    type: String,
    required: true,
    enum: ['story1', 'story2'],
    default: 'story1'
  },
  storyTitle: {
    type: String,
    required: false
  },
  moralScores: {
    type: moralScoresSchema,
    required: true
  },
  decisionHistory: [decisionSchema],
  endingType: {
    type: String,
    required: true
    // Removed enum constraint to allow all Story 2 endings
  },
  playedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
gameDataSchema.index({ username: 1, playedAt: -1 });
gameDataSchema.index({ storyId: 1, endingType: 1 });

const GameData = mongoose.model('GameData', gameDataSchema);

export default GameData;


