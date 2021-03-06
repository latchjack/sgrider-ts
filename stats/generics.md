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
