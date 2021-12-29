"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
/*
We're going to read through the .csv file, so we use the fs library.
We then tell fs to use the utf-8 encoding. This is because readFileSync
can read any type of file, from images, exe, json file etc. By adding
on the encoding we're telling readFileSync about what type of content
we expect to find inside the file. So we're telling it that expect to
find text content encoding with utf-8 . If we didn't add this in we
would get what is called a 'Buffer' returned, with the raw data of the
file.

In this case the buffer would look like...
<Buffer 31 30 2f 30 38 2f 32 30 31 38 2c 4d 61 6e 20 55 6e 69 74 65 64
 2c 4c 65 69 63 65 73 74 65 72 2c 32 2c 31 2c 48 2c 41 20 4d 61 72 72
 69 6e 65 72 0a 31 ... 14637 more bytes>

This will return all of the csv data in one long string.
So we will need to parse the data it into a more useable data structure.

The end product will be an array of arrays, with each inner array
representing a match.
*/
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
