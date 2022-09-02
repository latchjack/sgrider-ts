# Type Annotations

This is our type annotation, we're telling the var it's a
number, and that we'll only ever assign the variable a
number.

```typescript
`let apples: number = 5;`;

// Other annotation examples.
const isTrue: boolean = true;
const myName: string = 'latch';
const nothingMuch: null = null;
const nothing: undefined = undefined;
let now: Date = new Date();

// Array type annotation
// We're telling TS this is an array containing purely strings
let colors: string[] = ['red', 'green', 'blue'];

// We're telling TS this is an array containing purely numbers
let myNumbers: number[] = [1, 2, 3, 4, 5, 6];

// We're telling TS this is an array containing purely booleans
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
// let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Functions
// We tell TS what args are going in and what we want it to return.
// We can use void to tell it we're expecting it to return nothing.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

| Variable Declaration | Variable Initialisation |
| -------------------- | ----------------------- |
| const color =        | "red"                   |

The rule of Type Inference is...
If variable and declaration are on the same line, TS will figure out the type
of 'color' for us

## When to use annotation

1. When we have a function that returns the 'any' type
   (TS can't analyse the type 'any' for errors. So we avoid 'any' as much as possible.)

```typescript
const json = '{"x": 10, "y": 20}';
// First declaration would return the type of any if you hover over coordinates var.
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // returns {x: 10, y: 20};
```

2. When we declare a variable on one line and initialise it later.

```typescript
let words = ['red', 'green', 'blue'];
// If we didn't tell TS this is a boolean it'll have a type of 'any'.
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
```

3. When we have a variable whose type cannot be inferred correctly.

`let numbers = [-10, -1, 12];`

Here we tell TS that numberAboveZero will either be a boolean or a number.

`let numberAboveZero: boolean | number = false;`

We're looping through the numbers array, if we find a number above 0, we want to assign it to numberAboveZero, otherwise we want to assign false to numberAboveZero.

```typescript
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  } else {
    numberAboveZero = false;
  }
}
```
