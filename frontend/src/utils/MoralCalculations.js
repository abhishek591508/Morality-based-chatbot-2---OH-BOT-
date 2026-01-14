export const getInitialScores = () => ({
  honesty: 50,
  empathy: 50,
  fairness: 50,
  duty: 50,
  wisdom: 50,
  humility: 50,
  responsibility: 50,
  riskAwareness: 50,
  arrogance: 50
});

export const updateMoralScores = (currentScores, impact) => {
  const newScores = { ...currentScores };
  Object.keys(impact).forEach(key => {
    if (newScores.hasOwnProperty(key)) {
      newScores[key] = Math.max(0, Math.min(100, newScores[key] + impact[key]));
    }
  });
  return newScores;
};

export const generateFeedback = (scores) => {
  const feedback = [];

  // Wisdom assessment
  if (scores.wisdom >= 70) {
    feedback.push("Exceptional Wisdom: You consistently made thoughtful, well-considered decisions.");
  } else if (scores.wisdom >= 50) {
    feedback.push("Moderate Wisdom: You showed moments of good judgment, but sometimes acted impulsively.");
  } else {
    feedback.push("Limited Wisdom: Your decisions often lacked foresight and careful consideration.");
  }

  // Risk Awareness
  if (scores.riskAwareness >= 70) {
    feedback.push("Excellent Risk Awareness: You accurately identified and responded to dangerous situations.");
  } else if (scores.riskAwareness < 40) {
    feedback.push("Poor Risk Assessment: You frequently underestimated or ignored clear dangers.");
  }

  // Arrogance vs Humility
  if (scores.arrogance >= 60) {
    feedback.push("High Arrogance: Pride often clouded your judgment, leading to reckless choices.");
  } else if (scores.humility >= 60) {
    feedback.push("Strong Humility: You remained open to caution and valued wisdom over ego.");
  }

  // Responsibility
  if (scores.responsibility >= 65) {
    feedback.push("Strong Responsibility: You took ownership of situations and tried to prevent harm.");
  } else if (scores.responsibility < 40) {
    feedback.push("Lack of Responsibility: You often avoided taking action when it mattered most.");
  }

  // Empathy
  if (scores.empathy >= 60) {
    feedback.push("High Empathy: You showed genuine care for others' safety and wellbeing.");
  }

  return feedback;
};

export const getScoreColor = (value) => {
  // if (value >= 70) return '#4caf50';
  // if (value >= 50) return '#ff9800';
  // return '#f44336';
  
  return '#6c6c6c';
};

export const determineConditionalEnding = (scores) => {
  const { wisdom, empathy, responsibility } = scores;
  
  // Success if high wisdom and at least one of empathy or responsibility is good
  if (wisdom >= 60 && (empathy >= 55 || responsibility >= 55)) {
    return 'ending_conditional'; // Prevented tragedy
  }
  return 'ending_death'; // Failed to convince them
};