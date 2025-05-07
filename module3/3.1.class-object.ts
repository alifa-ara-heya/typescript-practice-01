{
  // oop- class and object

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // initialize
      //   public makes the initialization
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    // method
    // anonymous function
    // 'this' does not work in arrow function, so normal function has to be used

    makeSound() {
      console.log(
        `The ${this.name} ${this.species} makes ${this.sound} sound.`
      );
    }
  }

  // instance
  const dog = new Animal("German Shepard", "dog", "gheu gheu");
  const cat = new Animal("Persian", "cat", "meu mew");
  cat.makeSound(); //The Persian cat makes meu mew sound.
}
