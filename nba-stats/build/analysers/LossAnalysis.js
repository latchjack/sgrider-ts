"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const GameResult_1 = require("../GameResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(games) {
        let losses = 0;
        //! UPDATE INDEXES FOR LOSSES - ATM ITS WINS
        for (let game of games) {
            if (game[1] === 'Heat' && game[5] === GameResult_1.GameResult.HomeWin) {
                losses++;
            }
            else if (game[2] === 'Heat' && game[5] === GameResult_1.GameResult.AwayWin) {
                losses++;
            }
        }
        return `This ${this.team} lost ${losses} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
