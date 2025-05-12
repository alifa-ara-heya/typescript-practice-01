{
  /*  Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed. */

  const genericFunction = <T>(arr: T[]) => {
    return [...new Set(arr)];
  };

  console.log(genericFunction([1, 2, 2, 3])); //[1, 2, 3]

  console.log(genericFunction(["a", "b", "a"])); // ["a", "b"]

  console.log(genericFunction([true, false, true])); // [true, false]
}
