"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameReader_1 = require("./GameReader");
const GameResult_1 = require("./GameResult");
const reader = new GameReader_1.GameReader('basketball.csv');
reader.read();
let heatWins = 0;
for (let game of reader.data) {
    if (game[1] === 'Heat' && game[5] === GameResult_1.GameResult.HomeWin) {
        heatWins++;
    }
    else if (game[2] === 'Heat' && game[5] === GameResult_1.GameResult.AwayWin) {
        heatWins++;
    }
}
console.log(`Miami Heat won ${heatWins} games`);
