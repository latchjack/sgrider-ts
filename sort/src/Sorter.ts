/*
ABSTRACT CLASSES

1. Can't be used to create an object directly.
This can no longer be done...
const sorter = new Sorter(numbersCollection);

2. Can only be used as a parent class.

3. Can contain real implementation for some methods.

4. The implemented methods can refer to other methods that
don't actually exist yet (we still have to provide names and 
types for the un-implemented methods).

5. Can make child classes promise to implement some other
method.

To be eligible to be used by the Sorter class, the data must
satisfy our interface.
It must have a length, compare and swap method.
*/
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

/*
OLD SORTER - BEFORE CONVERTING TO ABSTRACT CLASS

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

*/
