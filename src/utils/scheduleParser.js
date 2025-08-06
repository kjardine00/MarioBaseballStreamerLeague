/**
 * Parses Mario Baseball league schedule data from tab-separated format
 * @param {string} scheduleData - The schedule data as a string
 * @returns {Object} Structured JSON data
 */
export function parseScheduleData(scheduleData) {
  const lines = scheduleData.trim().split('\n').filter(line => line.trim());
  const schedule = {
    series: [],
    metadata: {
      totalGames: 0,
      processedGames: 0,
      submittedGames: 0,
      notSubmittedGames: 0
    }
  };

  let currentSeries = null;
  let seriesIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const columns = line.split('\t');
    
    // Skip header rows and empty lines
    if (line.includes('Details') || line.includes('Series') || line.includes('Stat File Tracking') || 
        line.includes('Auctions/Spring Training/Logos') || line.includes('Trade Deadline')) {
      continue;
    }

    // Check if this is a new series (has a number in first column)
    if (columns[0] && columns[0].match(/^\d+/) && columns[1]) {
      currentSeries = {
        id: seriesIndex++,
        week: columns[0],
        dateRange: columns[1],
        matchups: []
      };
      schedule.series.push(currentSeries);
    }

    // Parse game data (lines with player names and scores)
    if (currentSeries && columns[2] && columns[2].includes(' vs ') && columns[3]) {
      const matchup = parseMatchup(columns, i);
      if (matchup) {
        currentSeries.matchups.push(matchup);
        schedule.metadata.totalGames += matchup.games.length;
        
        // Update metadata
        matchup.games.forEach(game => {
          if (game.status === 'Processed') schedule.metadata.processedGames++;
          else if (game.status === 'Submitted') schedule.metadata.submittedGames++;
          else if (game.status === 'Not Submitted') schedule.metadata.notSubmittedGames++;
        });
      }
    }
  }

  return schedule;
}

/**
 * Parses a single matchup from the schedule data
 * @param {Array} columns - Array of column values
 * @param {number} lineIndex - Current line index
 * @returns {Object} Parsed matchup data
 */
function parseMatchup(columns, lineIndex) {
  try {
    const players = columns[2].split(' vs ');
    if (players.length !== 2) return null;

    const awayPlayer = players[0].trim();
    const homePlayer = players[1].trim();
    
    const games = [];
    
    // Parse Game 1
    if (columns[4] && columns[5] && columns[6] && columns[7]) {
      games.push({
        gameNumber: 1,
        awayPlayer: columns[4],
        awayScore: parseInt(columns[5]) || 0,
        homePlayer: columns[6],
        homeScore: parseInt(columns[7]) || 0,
        stadium: columns[8] || '',
        status: getGameStatus(columns, 8)
      });
    }

    // Parse Game 2
    if (columns[9] && columns[10] && columns[11] && columns[12]) {
      games.push({
        gameNumber: 2,
        awayPlayer: columns[9],
        awayScore: parseInt(columns[10]) || 0,
        homePlayer: columns[11],
        homeScore: parseInt(columns[12]) || 0,
        stadium: columns[13] || '',
        status: getGameStatus(columns, 13)
      });
    }

    // Parse Game 3
    if (columns[14] && columns[15] && columns[16] && columns[17]) {
      games.push({
        gameNumber: 3,
        awayPlayer: columns[14],
        awayScore: parseInt(columns[15]) || 0,
        homePlayer: columns[16],
        homeScore: parseInt(columns[17]) || 0,
        stadium: columns[18] || '',
        status: getGameStatus(columns, 18)
      });
    }

    return {
      awayPlayer,
      homePlayer,
      playerStream: columns[3] || '',
      commentaryStream: columns[3] || '',
      gameTime: columns[3] || '',
      games,
      overallStatus: getOverallStatus(columns)
    };
  } catch (error) {
    console.error('Error parsing matchup:', error);
    return null;
  }
}

/**
 * Gets the status of a specific game
 * @param {Array} columns - Array of column values
 * @param {number} stadiumIndex - Index of stadium column
 * @returns {string} Game status
 */
function getGameStatus(columns, stadiumIndex) {
  // Look for status in nearby columns
  for (let i = stadiumIndex + 1; i < Math.min(stadiumIndex + 5, columns.length); i++) {
    if (columns[i] && ['Processed', 'Submitted', 'Not Submitted', 'Problem'].includes(columns[i])) {
      return columns[i];
    }
  }
  return 'Not Submitted';
}

/**
 * Gets the overall status of the matchup
 * @param {Array} columns - Array of column values
 * @returns {string} Overall status
 */
function getOverallStatus(columns) {
  for (let i = columns.length - 1; i >= 0; i--) {
    if (columns[i] && ['Processed', 'Submitted', 'Not Submitted', 'Problem'].includes(columns[i])) {
      return columns[i];
    }
  }
  return 'Not Submitted';
}

/**
 * Converts the parsed schedule back to tab-separated format
 * @param {Object} scheduleData - The parsed schedule data
 * @returns {string} Tab-separated string
 */
export function scheduleToTabSeparated(scheduleData) {
  const lines = [];
  
  // Add header
  lines.push('Details\tGame 1\t\t\t\tGame 2\t\t\t\tGame 3\t\t\t\t');
  lines.push('Series\tPlayer Stream\tCommentary Stream\tGame Time\tAway\t\tHome\tStadium\tAway\t\tHome\tStadium\tAway\t\tHome\tStadium\tStatus');
  
  scheduleData.series.forEach(series => {
    series.matchups.forEach(matchup => {
      const line = [
        series.week,
        series.dateRange,
        `${matchup.awayPlayer} vs ${matchup.homePlayer}`,
        matchup.playerStream,
        matchup.commentaryStream,
        matchup.gameTime
      ];
      
      // Add game data
      for (let i = 0; i < 3; i++) {
        const game = matchup.games[i];
        if (game) {
          line.push(game.awayPlayer, game.awayScore, game.homePlayer, game.homeScore, game.stadium);
        } else {
          line.push('', '', '', '', '');
        }
      }
      
      line.push(matchup.overallStatus);
      lines.push(line.join('\t'));
    });
  });
  
  return lines.join('\n');
} 