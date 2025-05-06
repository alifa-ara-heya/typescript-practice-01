{
  // utility types
  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  type ContactInfo = Omit<Person, "name" | "age">;

  // required

  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  const person1: PersonReadonly = {
    name: "Mr.X",
    age: 23,
    contactNo: "0876",
  };

  // read only
  type PersonReadonly = Readonly<Person>;
  //   person1.name = 'Mr/.Y' //will show error

  //  record

  // type MyObj = {
  //     a: string;
  //     b: string
  // }

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    1: "dd",
    // e: 123,
  };

  const emptyObj: Record<string, unknown> = {};
}
