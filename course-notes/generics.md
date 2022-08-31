When we make use of generics, we're essentially working with something very similar to function arguments.
When we work with functions we pass in arguments to customise how the function body behaves.

With generics we're going to define classes and functions and we're going to customise the different types inside of those class/function definitions by passing in a type, as though it were a like an argument.

Generics will allow us to define the type of a property inside of a class, the arg to a function and the return type of a function.

```typescript
// This is not DRY and would be pretty bad to write.
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'test';
```

```typescript
// This would be a better way to write it.
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>(); // The TypeOfData generic is a number here
holdNumber.data = 123;

const holdString = new HoldAnything<string>(); // The TypeOfData generic is a string here
holdString.data = 'test';
```
