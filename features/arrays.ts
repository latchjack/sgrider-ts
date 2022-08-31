/* 
| When we work with arrays in TS, we have access to all of our
| usual arrays methods i.e. push, pop, filter and map.
| However, the one big difference of arrays in TS is that we
| only ever keep one type of data in an array (i.e. array of 
| only strings).
| We can technically add in different types of values within
| an array but if we wanted to do that, we would have to be
| very explicit when doing it and in a special type annotation.
*/

/* 
| TS uses type inference to tell us 'const carBrands: string[]'.
|
| If we wanted to specify the array's content type we would have
| to annotate it when creating the array.
| const carBrands: string[] = ['ford', 'toyota', 'vauxhall'];
|
| You may want to sometimes initially add the type to the array
| when creating it. For instance when you create the array as an
| empty array.
| const carBrands: string[] = [];
| This would be inferred as 'any' meaning we could put any data
| type in there, which is not what we want.
*/
const carBrands = ['ford', 'toyota', 'vauxhall'];

// Hover over the name dates, TS tells us 'const dates: Date[]'
const dates = [new Date(), new Date()];

/*
| This two-dimensional array (2da) is displayed by TS as
| 'const carsByBrand: string[][]'
|
| We could also annotate it being a 2da by adding ': string[][]'
| after creating it.
*/
const carsByBrand = [['focus', 'yaris', 'astra']];

/*
| Why do types matter in arrays?
|
| 1. TS can do type inference when extracting values from an array.
|
| 2. TS can prevent us from adding incompatible values to the array.
|
| 3. We can get help with map, forEach and reduce functions.
|
| 4. FLexible - arrays can still contain multiple different types.
*/

// 1. Help with inference when extracting values
const car = carBrands[0];
const myCar = carBrands.pop();

// 2. Prevent incompatible values
// Give us an error because the array is for strings.
// carBrands.push(3);

// 3. Help with array methods
carBrands.map((car: string): string => {
  return car.toUpperCase();
});

/*
| 4. Flexible types
| TS infers 'const importantDates: (string | Date)[]'
| const importantDates = [new Date(), '2030-10-10'];
|
| To annotate the flexibility in we would create the array by writing..
*/
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2021-10-10');
importantDates.push(new Date());
// Gives us an error because it's the wrong type.
// importantDates.push(100);
