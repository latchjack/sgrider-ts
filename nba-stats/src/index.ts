import { CsvFileReader } from './CsvFileReader';
import { GameResult } from './GameResult';

const reader = new CsvFileReader('basketball.csv');
reader.read();

let heatWins = 0;
for (let game of reader.data) {
  if (game[1] === 'Heat' && game[5] === GameResult.HomeWin) {
    heatWins++;
  } else if (game[2] === 'Heat' && game[5] === GameResult.AwayWin) {
    heatWins++;
  }
}
console.log(`Miami Heat won ${heatWins} games`);
