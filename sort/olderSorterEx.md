Old iterations of the Sorter class. As it changes for different data types throughout the lesson.

<strong>Note: These are both examples of what you do not want to do. This is because the union args in the constructor function will just keep growing if you need to pass it different types of data. The better way of implementing this is in the index.ts file</strong>

## Bad Examples

For an....

Array of numbers

Notes:

'collection' will be an array of numbers.
We're going to use the constructor function to pass in an array
of numbers when we create an instance of the Sorter. The
collection will be passed in as an arg to the constructor.

this.collection[j] = left hand int
this.collection[j + 1] = right hand int

```typescript
class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log('sorted collection:', sorter.collection);
```

# Type Guards

The syntax we used in the type guards was different.

We use...

typeof = Narrow type of a value to a primitive type

- number
- string
- boolean
- symbol

instanceof = narrow down every other type of value
Every other value that is created with a constructor function

```Typescript

class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        /*
        If collection is an array of numbers.
        This outer if statement is a type guard
        */
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        /*
        If collection is a string
        */
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

```
