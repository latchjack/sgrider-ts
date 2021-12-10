"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
// Sort an array of numbers.
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 10000]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
// Sort a string.
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
