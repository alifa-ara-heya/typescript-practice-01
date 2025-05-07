{
  // interface
  //   Differences between type alias and interface
  /* 1. There is no equal sign when we declare interface, but there is when we declare type alias.
2. we can use type alias for primitive data types such as
 */
  type RollNumber = number;
  /* 
  But we cannot use interface for that. interface is only used to declare non-primitive data types, such as object, because of its curly braces.

  3. we can extend the properties of type alias with intersect
  */

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "Ayesha",
    age: 23,
  };

  const userWithRole: UserWithRole1 = {
    name: "Maruf",
    age: 23,
    role: "manager",
  };

  //   we can also extend the properties of interface

  interface userWithRole2 extends User2 {
    role: string;
  }

  const user2: userWithRole2 = {
    name: "Ayesha",
    age: 23,
    role: "customer",
  };

  //   array, function, object => object

  //   array

  //   array with type

  type Roll1 = number[];
  const rollNumber1: Roll1 = [1, 2, 3];

  //   array with interface

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [4, 5, 6];

  //    function

  //   function with type

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //   function with interface

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;
}
