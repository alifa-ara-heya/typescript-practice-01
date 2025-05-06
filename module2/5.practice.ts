/* Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh"
 */

const reverseString = (str: string): string => {
  const letters = str.split("");
  //   console.log(letters); // ['h', 'e', 'l', 'l','o']
  const reversedLetters = letters.reverse();
  //   console.log(reversedLetters); //['o'. 'l','l','e','h']

  const reversedString = reversedLetters.join("");
  console.log(reversedString); //olleh
  return reversedString;
};

reverseString("hello");

const reverseStrOneLine = (str: string): string =>
  str.split("").reverse().join("");
console.log(reverseStrOneLine("prince")); //ecnirp
