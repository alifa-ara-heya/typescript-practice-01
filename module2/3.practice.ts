/*  Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends. */

type Friend = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  address: string;
  hairColor: "black" | "brown" | "blonde";
  eyeColor: "green" | "hazel" | "grey";
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: number;
  job: string;
  skills: string[]; //array
  isMarried: boolean;
  friends: Friend[];
};
