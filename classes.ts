class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(food: string): void {
    console.log(`${this.name} is eating ${food}.`);
  }

  sleep(): void {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

let myDog = new Dog("Max", 3, "Labrador");
myDog.eat("bone"); // Output: Max is eating bone.
myDog.sleep(); // Output: Max is sleeping.
myDog.bark(); // Output: Max is barking.
