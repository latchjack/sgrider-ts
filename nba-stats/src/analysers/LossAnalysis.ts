import { Analyser } from '../Summary';
import { GameData } from '../GameData';
import { GameResult } from '../GameResult';

export class WinsAnalysis implements Analyser {
  constructor(public team: string) {}

  run(games: GameData[]): string {
    let losses = 0;
    //! UPDATE INDEXES FOR LOSSES - ATM ITS WINS
    for (let game of games) {
      if (game[1] === 'Heat' && game[5] === GameResult.HomeWin) {
        losses++;
      } else if (game[2] === 'Heat' && game[5] === GameResult.AwayWin) {
        losses++;
      }
    }

    return `This ${this.team} lost ${losses} games`;
  }
}
