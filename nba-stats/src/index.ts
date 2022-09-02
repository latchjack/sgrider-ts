import fs from 'fs';

enum GameResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const games = fs
  .readFileSync('basketball.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(games);

let heatWins = 0;
for (let game of games) {
  if (game[1] === 'Heat' && game[5] === GameResult.HomeWin) {
    heatWins++;
  } else if (game[2] === 'Heat' && game[5] === GameResult.AwayWin) {
    heatWins++;
  }
}
console.log(`Miami Heat won ${heatWins} games`);
