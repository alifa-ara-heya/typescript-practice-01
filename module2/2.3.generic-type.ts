{
  // generic type

  //   type GenericArray<param> = Array<param>;
  // industry standard practice to write 'T' meaning typescript instead of 'param'
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  //   const rollNumbers: Array<number> = [3, 6, 8]; //same
  const rollNumbers: GenericArray<number> = [3, 6, 8]; //same

  //   const mentors: string[] = ["sakib", "ayesha", "faruk"];
  //   const mentors: Array<string> = ["sakib", "ayesha", "faruk"];
  const mentors: GenericArray<string> = ["sakib", "ayesha", "faruk"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const users: GenericArray<{ name: string; age: number }> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Mahbub",
      age: 100,
    },
  ];

  const add = (x: number, y: number) => x + y;

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const men: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "persian@mezba.com" },
  ];
}
