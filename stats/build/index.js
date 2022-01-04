"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader';
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// const reader = new CsvFileReader('football.csv');
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
// console.log(reader.data);
console.log('dateOfFirstMatch:', dateOfFirstMatch);
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} times`);
