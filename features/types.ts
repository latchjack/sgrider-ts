/*
| A type is an easy to refer to the different properties and functions that 
| a value (string, number, bool, object, array etc) has.
| E.g. "red" - it is a value that has all the properties and methods that we
| assume that a string has i.e charAt(), includes(), match() etc.
|
|_________________________________________
| Type    |  Values that have this type 
|_________________________________________
| string  | "hi there" |   ""   | "Today is Monday"
| number  | .0025      |  -20   | 400000 (no float etc)
| boolean | true       |  false | 
| Date    | new Date() |        |
| Todo    | { id: 1, completed: true, title: "Trash" } // interface we just created.
|_________________________________________
|
| 2 categories of types...
|
| Primitive Types 
| number, string, boolean, symbol, void, null, undefined 
|
| Object Types
| (any types we create or other types built into the language)
| functions, classes, array, objects, or any types we create.
|
| Why do we say there are 2 categories?
| We say there is a separate category of types because we can write some code
| that can trick TS into believing one value is a different type for specific reasons.
|
| Why do we care about types?
| TS uses types to refer to our code to analyse for errors using the TS Compiler
| Types allow other engineers to understand what values are flowing around the 
| codebase.
*/

const today = new Date();
today.getMonth();

const person = {
  age: 20
};

class Color {}

const red = new Color();
