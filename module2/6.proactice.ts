/* Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments. */

const addAll = (...numbers: number[]) => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
};

console.log(addAll(1, 2, 3, 4)); //10

// using reduce
/* The reduce() method takes a callback and an optional initial value.

The callback has two parameters: the accumulator and the current value.

You start the accumulator at 0 and add each number to it. */

const addAllReduce = (...numbers: number[]) =>
  numbers.reduce((sum, current) => sum + current, 0);

console.log(addAllReduce(5, 10, 15)); //30
