## Generics

- Are like function arguments but for types in class/function definitions

- Allow us to define the type of a property/argument/return value at a future point.

- Are used heavily when writing reusable code.

```js

// The <> is almost like an argument in a function.
class HoldItem<TypeOfData> {
    data: TypeOfData;
}

/*
Now we create a new instance of HoldItem that will
be used to hold a number.

So we pass it the type we want "number" as an 'argument'
*/
const holdNumber = new HoldItem<number>();
holdNumber.data = 123;

// The same for string
const holdString = new HoldItem<string>();
holdString.data = 'Hi';

```

```js
/*
By using generics we are able to say that the type we
are giving to HoldItem is a number with the arg name
of T
*/

// T's type is a number
class HoldItem<T> {
    // The data is a number
    data: T;

    // The add method takes and returns a number.
    add(a: T): T {
        return a;
    }
}

holdNumber.data =

```

## Generics with functions

```typescript
// Very repetitive functions
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNumbers(arr: numbers[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printString(['a', 'b', 'c']);
printNumbers([1, 2, 3]);

// The above could've used generics to be reusable...

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3]);
```

## Generic Constraints

We have 2 classes, Car and House

```typescript
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

// A constraint tells TS that there will be a print method available
interface Printable {
  print(): void;
}

/*
This generic function will take an array, loop over it and call the print method on each
By extending the Printable interface, this is us telling TS that whatever type T we put into
the func, it'll have all of the properties that Printable has.
*/
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// This would give us an error because the numbers cannot have the print method on them.
printHousesOrCars([1, 2, 3]);

// This would result in no error as both instances of the classes have print methods.
printHousesOrCars([new House(), new Car()]);
```
