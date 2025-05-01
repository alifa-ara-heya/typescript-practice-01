// normal function

function add(num1: number, num2: number = 10): number {
  //return type
  return num1 + num2;
}

add(2, 6);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// if a function is in an object, this is called method
const poorUser = {
  name: "Sayma",
  balance: 1000,
  // if we want  to access a property in an object, we need to use "this"
  // anonymous normal function, because "this" works in normal function in JS, not in arrow function
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3];
const newSquaredArray: number[] = arr.map(
  (elem: number): number => elem * elem
);
