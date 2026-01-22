import ExcelJS from 'exceljs';
import GameData from '../models/GameData.js';

export const generateExcelReport = async (req, res) => {
  try {
    // Fetch all game data
    const games = await GameData.find().sort({ playedAt: -1 });

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Moral Story Chatbot';
    workbook.created = new Date();

    // ============================================
    // SHEET 1: Game Results Summary
    // ============================================
    const summarySheet = workbook.addWorksheet('Game Results Summary');

    // Define columns - ADDED storyId and storyTitle
    summarySheet.columns = [
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Story ID', key: 'storyId', width: 12 },
      { header: 'Story Title', key: 'storyTitle', width: 30 },
      { header: 'Played At', key: 'playedAt', width: 20 },
      { header: 'Ending Type', key: 'endingType', width: 20 },
      { header: 'Wisdom', key: 'wisdom', width: 10 },
      { header: 'Empathy', key: 'empathy', width: 10 },
      { header: 'Responsibility', key: 'responsibility', width: 15 },
      { header: 'Humility', key: 'humility', width: 10 },
      { header: 'Risk Awareness', key: 'riskAwareness', width: 15 },
      { header: 'Arrogance', key: 'arrogance', width: 10 },
      { header: 'Honesty', key: 'honesty', width: 10 },
      { header: 'Fairness', key: 'fairness', width: 10 },
      { header: 'Duty', key: 'duty', width: 10 }
    ];

    // Style header row
    summarySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    summarySheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4A90E2' }
    };
    summarySheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    // Add data rows
    games.forEach(game => {
      summarySheet.addRow({
        username: game.username,
        storyId: game.storyId || 'story1',
        storyTitle: game.storyTitle || 'N/A',
        playedAt: game.playedAt.toLocaleString(),
        endingType: game.endingType,
        wisdom: game.moralScores.wisdom,
        empathy: game.moralScores.empathy,
        responsibility: game.moralScores.responsibility,
        humility: game.moralScores.humility,
        riskAwareness: game.moralScores.riskAwareness,
        arrogance: game.moralScores.arrogance,
        honesty: game.moralScores.honesty,
        fairness: game.moralScores.fairness,
        duty: game.moralScores.duty
      });
    });

    // Apply conditional formatting to score columns (columns 6-14 now, shifted by 2)
    for (let row = 2; row <= games.length + 1; row++) {
      for (let col = 6; col <= 14; col++) {
        const cell = summarySheet.getRow(row).getCell(col);
        const value = cell.value;
        
        // Color code based on score
        // if (value >= 70) {
        //   cell.fill = {
        //     type: 'pattern',
        //     pattern: 'solid',
        //     fgColor: { argb: 'FF4CAF50' } // Green
        //   };
       if (value >= 50) {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF4CAF50' } // Yellow
          };
        } else {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFFCDD2' } // Red
          };
        }
        
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }

    // ============================================
    // SHEET 2: Decision History (Detailed)
    // ============================================
    const detailSheet = workbook.addWorksheet('Decision Details');

    detailSheet.columns = [
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Story ID', key: 'storyId', width: 12 },
      { header: 'Played At', key: 'playedAt', width: 20 },
      { header: 'Scene', key: 'scene', width: 15 },
      { header: 'Choice Made', key: 'choice', width: 50 },
      { header: 'Impact', key: 'impact', width: 30 }
    ];

    // Style header
    detailSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    detailSheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF764BA2' }
    };
    detailSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    // Add detailed decision data
    games.forEach(game => {
      game.decisionHistory.forEach(decision => {
        const impactStr = Object.entries(decision.impact)
          .map(([key, value]) => `${key}: ${value > 0 ? '+' : ''}${value}`)
          .join(', ');

        detailSheet.addRow({
          username: game.username,
          storyId: game.storyId || 'story1',
          playedAt: game.playedAt.toLocaleString(),
          scene: decision.scene,
          choice: decision.choice,
          impact: impactStr
        });
      });
    });

    // ============================================
    // SHEET 3: Statistics Overview
    // ============================================
    const statsSheet = workbook.addWorksheet('Statistics Overview');

    // Calculate statistics
    const totalGames = games.length;
    const uniqueUsers = [...new Set(games.map(g => g.username))].length;
    
    // Overall ending counts
    const endingCounts = games.reduce((acc, game) => {
      acc[game.endingType] = (acc[game.endingType] || 0) + 1;
      return acc;
    }, {});

    // Overall average scores
    const avgScores = {
      wisdom: games.reduce((sum, g) => sum + g.moralScores.wisdom, 0) / totalGames,
      empathy: games.reduce((sum, g) => sum + g.moralScores.empathy, 0) / totalGames,
      responsibility: games.reduce((sum, g) => sum + g.moralScores.responsibility, 0) / totalGames,
      humility: games.reduce((sum, g) => sum + g.moralScores.humility, 0) / totalGames,
      riskAwareness: games.reduce((sum, g) => sum + g.moralScores.riskAwareness, 0) / totalGames,
      arrogance: games.reduce((sum, g) => sum + g.moralScores.arrogance, 0) / totalGames,
      honesty: games.reduce((sum, g) => sum + g.moralScores.honesty, 0) / totalGames,
      fairness: games.reduce((sum, g) => sum + g.moralScores.fairness, 0) / totalGames,
      duty: games.reduce((sum, g) => sum + g.moralScores.duty, 0) / totalGames
    };

    // Add statistics
    statsSheet.addRow(['Metric', 'Value']);
    statsSheet.getRow(1).font = { bold: true, size: 14 };
    
    statsSheet.addRow(['Total Games Played', totalGames]);
    statsSheet.addRow(['Unique Players', uniqueUsers]);
    statsSheet.addRow([]);
    
    statsSheet.addRow(['Ending Distribution (All Stories)', '']);
    statsSheet.getRow(5).font = { bold: true };
    let currentRow = 6;
    Object.entries(endingCounts).forEach(([ending, count]) => {
      statsSheet.addRow([ending, count]);
      currentRow++;
    });
    
    statsSheet.addRow([]);
    currentRow++;
    
    statsSheet.addRow(['Average Moral Scores (All Stories)', '']);
    statsSheet.getRow(currentRow).font = { bold: true };
    currentRow++;
    Object.entries(avgScores).forEach(([key, value]) => {
      statsSheet.addRow([key.charAt(0).toUpperCase() + key.slice(1), value.toFixed(2)]);
    });

    statsSheet.getColumn(1).width = 30;
    statsSheet.getColumn(2).width = 15;

    // ============================================
    // SHEET 4: Story Comparison (NEW!)
    // ============================================
    const comparisonSheet = workbook.addWorksheet('Story Comparison');

    // Separate games by story
    const story1Games = games.filter(g => g.storyId === 'story1');
    const story2Games = games.filter(g => g.storyId === 'story2');

    // Calculate stats per story
    const calculateStoryStats = (storyGames) => {
      if (storyGames.length === 0) return null;
      
      return {
        totalPlays: storyGames.length,
        uniquePlayers: [...new Set(storyGames.map(g => g.username))].length,
        avgWisdom: storyGames.reduce((sum, g) => sum + g.moralScores.wisdom, 0) / storyGames.length,
        avgEmpathy: storyGames.reduce((sum, g) => sum + g.moralScores.empathy, 0) / storyGames.length,
        avgResponsibility: storyGames.reduce((sum, g) => sum + g.moralScores.responsibility, 0) / storyGames.length,
        avgHumility: storyGames.reduce((sum, g) => sum + g.moralScores.humility, 0) / storyGames.length,
        avgRiskAwareness: storyGames.reduce((sum, g) => sum + g.moralScores.riskAwareness, 0) / storyGames.length,
        avgArrogance: storyGames.reduce((sum, g) => sum + g.moralScores.arrogance, 0) / storyGames.length,
        avgHonesty: storyGames.reduce((sum, g) => sum + g.moralScores.honesty, 0) / storyGames.length,
        avgFairness: storyGames.reduce((sum, g) => sum + g.moralScores.fairness, 0) / storyGames.length,
        avgDuty: storyGames.reduce((sum, g) => sum + g.moralScores.duty, 0) / storyGames.length
      };
    };

    const story1Stats = calculateStoryStats(story1Games);
    const story2Stats = calculateStoryStats(story2Games);

    // Create comparison table
    comparisonSheet.columns = [
      { header: 'Metric', key: 'metric', width: 25 },
      { header: 'Story 1: The Scholars', key: 'story1', width: 20 },
      { header: 'Story 2: The Fiddler', key: 'story2', width: 20 }
    ];

    // Style header
    comparisonSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    comparisonSheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF667EEA' }
    };
    comparisonSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    // Add comparison data
    if (story1Stats && story2Stats) {
      comparisonSheet.addRow({
        metric: 'Total Plays',
        story1: story1Stats.totalPlays,
        story2: story2Stats.totalPlays
      });
      comparisonSheet.addRow({
        metric: 'Unique Players',
        story1: story1Stats.uniquePlayers,
        story2: story2Stats.uniquePlayers
      });
      comparisonSheet.addRow({ metric: '', story1: '', story2: '' }); // Empty row
      
      // Average scores
      comparisonSheet.addRow({
        metric: 'Avg Wisdom',
        story1: story1Stats.avgWisdom.toFixed(2),
        story2: story2Stats.avgWisdom.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Empathy',
        story1: story1Stats.avgEmpathy.toFixed(2),
        story2: story2Stats.avgEmpathy.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Responsibility',
        story1: story1Stats.avgResponsibility.toFixed(2),
        story2: story2Stats.avgResponsibility.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Humility',
        story1: story1Stats.avgHumility.toFixed(2),
        story2: story2Stats.avgHumility.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Risk Awareness',
        story1: story1Stats.avgRiskAwareness.toFixed(2),
        story2: story2Stats.avgRiskAwareness.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Arrogance',
        story1: story1Stats.avgArrogance.toFixed(2),
        story2: story2Stats.avgArrogance.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Honesty',
        story1: story1Stats.avgHonesty.toFixed(2),
        story2: story2Stats.avgHonesty.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Fairness',
        story1: story1Stats.avgFairness.toFixed(2),
        story2: story2Stats.avgFairness.toFixed(2)
      });
      comparisonSheet.addRow({
        metric: 'Avg Duty',
        story1: story1Stats.avgDuty.toFixed(2),
        story2: story2Stats.avgDuty.toFixed(2)
      });
    }

    // ============================================
    // SHEET 5: Story 1 Endings
    // ============================================
    const story1EndingsSheet = workbook.addWorksheet('Story 1 Endings');
    
    story1EndingsSheet.columns = [
      { header: 'Ending Type', key: 'ending', width: 20 },
      { header: 'Count', key: 'count', width: 15 },
      { header: 'Percentage', key: 'percentage', width: 15 }
    ];

    // Style header
    story1EndingsSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    story1EndingsSheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4A90E2' }
    };

    const story1EndingCounts = story1Games.reduce((acc, game) => {
      acc[game.endingType] = (acc[game.endingType] || 0) + 1;
      return acc;
    }, {});

    Object.entries(story1EndingCounts).forEach(([ending, count]) => {
      story1EndingsSheet.addRow({
        ending: ending,
        count: count,
        percentage: ((count / story1Games.length) * 100).toFixed(1) + '%'
      });
    });

    // ============================================
    // SHEET 6: Story 2 Endings
    // ============================================
    const story2EndingsSheet = workbook.addWorksheet('Story 2 Endings');
    
    story2EndingsSheet.columns = [
      { header: 'Ending Type', key: 'ending', width: 25 },
      { header: 'Count', key: 'count', width: 15 },
      { header: 'Percentage', key: 'percentage', width: 15 }
    ];

    // Style header
    story2EndingsSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    story2EndingsSheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF764BA2' }
    };

    const story2EndingCounts = story2Games.reduce((acc, game) => {
      acc[game.endingType] = (acc[game.endingType] || 0) + 1;
      return acc;
    }, {});

    Object.entries(story2EndingCounts).forEach(([ending, count]) => {
      story2EndingsSheet.addRow({
        ending: ending,
        count: count,
        percentage: story2Games.length > 0 ? ((count / story2Games.length) * 100).toFixed(1) + '%' : '0%'
      });
    });

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    // Set response headers
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=moral-story-report-${Date.now()}.xlsx`
    );

    res.send(buffer);
  } catch (error) {
    console.error('Error generating Excel report:', error);
    res.status(500).json({
      success: false,
      message: 'Error generating Excel report',
      error: error.message
    });
  }
};


