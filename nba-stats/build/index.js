"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const games = fs_1.default
    .readFileSync('basketball.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
console.log(games);
let heatWins = 0;
for (let game of games) {
    if (game[1] === 'Heat' && game[5] === 'H') {
        heatWins++;
    }
    else if (game[2] === 'Heat' && game[5] === 'A') {
        heatWins++;
    }
}
console.log(`Miami Heat won ${heatWins} games`);
