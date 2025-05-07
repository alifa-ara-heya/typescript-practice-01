{
  // oop- inheritance
  // Parent class= person
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      // initialize

      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  /*  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      // initialize

      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  } */

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  //   instance

  const student1 = new Student("Mr. Student", 20, "comilla");

  /* class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // initialize

      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes.`);
    }
  } */

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // initialize
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes.`);
    }
  }

  const teacher1 = new Teacher("Mr. Teacher", 40, "comilla", "headmaster");
}
