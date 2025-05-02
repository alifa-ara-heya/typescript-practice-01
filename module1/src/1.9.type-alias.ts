{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
  };

  const student1: Student = {
    name: "Miftah",
    age: 50,
    gender: "female",
    contact: "01833333",
    address: "uttara",
  };

  const student2: Student = {
    name: "Miftah",
    age: 50,
    gender: "female",
    address: "uttara",
  };

  //   string type alias
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Ayesha";
  const isAdmin: IsAdmin = true;

  //   function type alias

  const add2Numbers = (num1: number, num2: number): number => num1 + num2;

  type Add = (num1: number, num2: number) => number;

  const addNumbers: Add = (num1, num2) => num1 + num2;
}
