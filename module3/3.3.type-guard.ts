{
  // type guard or type narrowing

  type Alphaneumeric = string | number;

  const add = (
    // param1: string | number,
    param1: Alphaneumeric,
    param2: Alphaneumeric
  ): Alphaneumeric => {
    // return param1 + param2 //error
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 4);
  const result2 = add(2, "4");
  const result3 = add("4", "1");
  console.log(result1); //6
  console.log(result2); //24
  console.log(result3); //41

  //   in guard

  type NormalUser = {
    name: string;
  };

  type Admin = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | Admin) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "normal vai",
  };
  const adminUser: Admin = {
    name: "admin vai",
    role: "admin",
  };

  getUser(normalUser); //My name is normal vai.
}
