"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const GameResult_1 = require("../GameResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(games) {
        let wins = 0;
        for (let game of games) {
            if (game[1] === 'Heat' && game[5] === GameResult_1.GameResult.HomeWin) {
                wins++;
            }
            else if (game[2] === 'Heat' && game[5] === GameResult_1.GameResult.AwayWin) {
                wins++;
            }
        }
        return `This ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
