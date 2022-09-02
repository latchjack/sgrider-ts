"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class GameReader {
    constructor(reader) {
        this.reader = reader;
        this.games = [];
    }
    static fromCsv(filename) {
        return new GameReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.reader.read();
        this.games = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5]
            ];
        });
    }
}
exports.GameReader = GameReader;
