/* 
When working with a tuple, it looks very similar to an array.
The difference is that every element inside a tuple represents
a specific property about a record.

Whereas an array tells us a bunch of different records or
organises a collection of different records.

We usually also mix many different types of data inside a tuple.
*/

/*
If we were to use an object it'd be really easy to understand
what the coke object's keys and values are.
*/
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

/*
However if we place them in an array we lose context of what the
values are for. What is true? and what is 40?
We now have to memorise to order of the properties inside the array
to know what keys their value would belong to.

This exactly what a tuple is. We have what looks like an array.
We then put in our properties in a very specific order.
*/
const initialPepsi = ['brown', true, 40];

// We add an annotation to the array to turn it into a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
// This would give us an error as it's not a string
// pepsi[0] = 40;

/*
An alternate way of creating it, rather than writing the type 
directly in-line as an annotation. We can create something called
a Type Alias.

We write 'type' and then the type's name starting with an uppercased
letter. We then write out the tuple's structure inside of the square
brackets in the order we expect them to be in.
*/

// This is not creating an array. It is creating an 'idea' of a tuple.
type Drink = [string, boolean, number];

const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// const carSpecs: [number, number] = [400, 3354];

// const carSpecs = {
//     horsepower: 400,
//     weight: 3354
// };
