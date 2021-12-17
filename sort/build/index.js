"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sort an array of numbers.
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 10000]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);
// Sort a string.
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
linkedList.print();
