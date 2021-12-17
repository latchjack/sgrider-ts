import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort an array of numbers.
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 10000]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

// Sort a string.
const charactersCollection = new CharactersCollection('Xaayb');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
linkedList.print();
