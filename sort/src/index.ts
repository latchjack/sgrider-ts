// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/*
We no longer need to create instances of the Sorter, as it
is an abstract class.
This means we no longer need to do the following...

const x = new NumbersCollection([1, 3, 4, 2, 5]);
const sorter = new Sorter(example);
sorter.sort();

Now we can just write...
const x = new NumbersCollection([1, 3, 4, 2, 5]);
x.sort();
*/

// Sort an array of numbers.
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 10000]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

// Sort a string.
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
linkedList.print();
