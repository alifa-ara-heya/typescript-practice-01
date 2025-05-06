/* Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine. */

interface Book {
  name: string;
  pages: number;
  publisher: string;
  author: string;
  isbn: string;
}

interface Magazine {
  name: string;
  pages: number;
  publisher: string;
  issueNumber: number;
  month: string;
}

type BookUnionMagazine = Book | Magazine; // A value of this type can be either a Book or a Magazine, but not necessarily both.

type BookIntersectionMagazine = Book & Magazine; // A value of this type must satisfy both interfaces — i.e., it must have all properties from Book and Magazine.

const item1: BookUnionMagazine = {
  name: "Time",
  pages: 40,
  // issueNumber: 123,
  author: "cd",
  publisher: "Time Inc.",
  // month: "May" //
  isbn: "12333", //these properties must match either of book or of magazine
};

const item2: BookIntersectionMagazine = {
  name: "National Geographic Special Edition",
  pages: 100,
  publisher: "NatGeo",
  author: "John Doe",
  isbn: "123-456-789",
  issueNumber: 50,
  month: "June",
  // This is both a Book and a Magazine
};
