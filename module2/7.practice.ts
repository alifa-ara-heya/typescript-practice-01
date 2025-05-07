/* Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number. */

const analyzeInput = (input: string | number) => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input * input;
  }
};

console.log(analyzeInput(12)); //144
