{
  // type guard using instance of

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making this sound.");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I am mewing");
    }
  }

  const dog = new Dog("dog vai", "dog");
  const cat = new Cat("cat vai", "cat");

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal) => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };
}
