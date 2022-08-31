/* 
| Here we tell TS that this function is taking 2 args that will both be numbers.
| We then add in the annotation to tell TS what type of value the function will
| return.
| If we tried to return as string i.e return 'test', TS would give us an error
| to let us know the type is not correct.
|
| The ': number' before the arrow is the return annotation.
|
| TS can also use type inference on the function if we had left out the return
| annotation, as it will look at the type of the args going into the function.
*/

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Named function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void

// The return type is void as we're console logging the inputted string.
const logger = (message: string): void => {
  console.log(message);
};

// A function that returns void can also be use for when we return null and undefined.

/*
| As we're throwing an Error, the function will not actually return anything.
| So we can use the 'never' annotation type. This is rarely used.
*/
const throwError = (message: string): never => {
  throw new Error(message);
};

/* 
| We could change it the return annotation to a string, so that TS knows it will return
| a string unless there is no message passed as args to the function.
*/
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  // Destructure the forecast object to refrain from typing forecast in the console logs
  console.log(forecast.date);
  console.log(forecast.weather);
};

// We can destructure forecast in the annotation to make the code DRYer.
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
logWeather2(todaysWeather);
