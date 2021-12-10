import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// Sort an array of numbers.
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 10000]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

// Sort a string.
const charactersCollection = new CharactersCollection('Xaayb');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
