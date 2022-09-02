import { Analyser } from '../Summary';
import { GameData } from '../GameData';
import { GameResult } from '../GameResult';

export class WinsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(games: GameData[]): string {
    let wins = 0;

    for (let game of games) {
      if (game[1] === 'Heat' && game[5] === GameResult.HomeWin) {
        wins++;
      } else if (game[2] === 'Heat' && game[5] === GameResult.AwayWin) {
        wins++;
      }
    }

    return `This ${this.team} won ${wins} games`;
  }
}
