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

    // Define columns
    summarySheet.columns = [
      { header: 'Username', key: 'username', width: 20 },
      { header: 'Played At', key: 'playedAt', width: 20 },
      { header: 'Ending Type', key: 'endingType', width: 15 },
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
/*
    // Apply conditional formatting to score columns 
    for (let row = 2; row <= games.length + 1; row++) {
      for (let col = 4; col <= 12; col++) {
        const cell = summarySheet.getRow(row).getCell(col);
        const value = cell.value;
        
        // Color code based on score
        if (value >= 70) {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            // fgColor: { argb: 'FF4CAF50' } // Green
            fgColor: { argb: 'ffffffff' } // Green
          };
        } else if (value >= 50) {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            // fgColor: { argb: 'FFFFF9C4' } // Yellow
            fgColor: { argb: 'ffffffff' } // Yellow
          };
        } else {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            // fgColor: { argb: 'FFFFCDD2' } // Red
            fgColor: { argb: 'ffffffff' } // Red
          };
        }
        
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }
*/
    // ============================================
    // SHEET 2: Decision History (Detailed)
    // ============================================
    const detailSheet = workbook.addWorksheet('Decision Details');

    detailSheet.columns = [
      { header: 'Username', key: 'username', width: 20 },
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
    const statsSheet = workbook.addWorksheet('Statistics');

    // Calculate statistics
    const totalGames = games.length;
    const uniqueUsers = [...new Set(games.map(g => g.username))].length;
    
    const endingCounts = games.reduce((acc, game) => {
      acc[game.endingType] = (acc[game.endingType] || 0) + 1;
      return acc;
    }, {});

    const avgScores = {
      wisdom: games.reduce((sum, g) => sum + g.moralScores.wisdom, 0) / totalGames,
      empathy: games.reduce((sum, g) => sum + g.moralScores.empathy, 0) / totalGames,
      responsibility: games.reduce((sum, g) => sum + g.moralScores.responsibility, 0) / totalGames,
      humility: games.reduce((sum, g) => sum + g.moralScores.humility, 0) / totalGames,
      riskAwareness: games.reduce((sum, g) => sum + g.moralScores.riskAwareness, 0) / totalGames,
      arrogance: games.reduce((sum, g) => sum + g.moralScores.arrogance, 0) / totalGames
    };

    // Add statistics
    statsSheet.addRow(['Metric', 'Value']);
    statsSheet.getRow(1).font = { bold: true, size: 14 };
    
    statsSheet.addRow(['Total Games Played', totalGames]);
    statsSheet.addRow(['Unique Players', uniqueUsers]);
    statsSheet.addRow([]);
    
    statsSheet.addRow(['Ending Distribution', '']);
    statsSheet.getRow(5).font = { bold: true };
    statsSheet.addRow(['Survival Endings', endingCounts.survival || 0]);
    statsSheet.addRow(['Death Endings', endingCounts.death || 0]);
    statsSheet.addRow(['Prevention Endings', endingCounts.prevention || 0]);
    statsSheet.addRow([]);
    
    statsSheet.addRow(['Average Moral Scores', '']);
    statsSheet.getRow(10).font = { bold: true };
    Object.entries(avgScores).forEach(([key, value]) => {
      statsSheet.addRow([key.charAt(0).toUpperCase() + key.slice(1), value.toFixed(2)]);
    });

    statsSheet.getColumn(1).width = 25;
    statsSheet.getColumn(2).width = 15;

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