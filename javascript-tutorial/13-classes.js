/*
# Classes

Classes provide a cleaner syntax for creating objects and handling inheritance.

## Basic Clas
*/

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }x
  
  play() {
    console.log('Playing!');
  }
  
  stop() {
    console.log('Stopping!');
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);  // Bohemian Rhapsody
mySong.play();              // Playing!

/*
## Constructor

The constructor runs when creating a new instance:
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log('Person created!');
  }
}

const person = new Person('Tom', 25);
// Logs: Person created!

/*
## Class Methods
*/

class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));      // 8
console.log(calc.multiply(4, 2)); // 8

/*
## Static Methods

Static methods belong to the class, not instances:
*/

class Dog {
  constructor(name) {
    this._name = name;
  }
  
  introduce() {
    console.log(`This is ${this._name}!`);
  }
  
  // Static method
  static bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog('Buster');
myDog.introduce();  // This is Buster!

// Call static method on class
Dog.bark();         // Woof!

// Can't call on instance
// myDog.bark();       // Error!

/*
Common use for static methods:
*/

class MathHelper {
  static square(x) {
    return x * x;
  }
  
  static cube(x) {
    return x * x * x;
  }
}

console.log(MathHelper.square(5)); // 25
console.log(MathHelper.cube(3));   // 27

/*
## Getters and Setters
*/

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  get radius() {
    return this._radius;
  }
  
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log('Radius must be positive');
    }
  }
  
  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // 5 (getter)
console.log(circle.area);   // 78.54 (getter)

circle.radius = 10;         // setter
console.log(circle.area);   // 314.16

/*
## Inheritance with `extends`
*/

// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
  
  getInfo() {
    return `${this.name} (${this.publishDate})`;
  }
}

// Child class
class Song2 extends Media {
  constructor(songData) {
    super(songData);  // Call parent constructor
    this.artist = songData.artist;
  }
  
  play() {
    console.log(`Playing ${this.name} by ${this.artist}`);
  }
}

const mySong2 = new Song2({
  artist: 'Queen',
  name: 'Bohemian Rhapsody',
  publishDate: 1975
});

console.log(mySong2.getInfo()); // Bohemian Rhapsody (1975)
mySong2.play();                 // Playing Bohemian Rhapsody by Queen

/*
## The `super` Keyword

`super` refers to the parent class:
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog2 extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    super.speak();  // Call parent method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog2('Buddy', 'Golden Retriever');
dog.speak();
// Buddy makes a sound
// Buddy barks

/*
## Method Overriding

Child classes can override parent methods:
*/

class Shape {
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

class Circle2 extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rect = new Rectangle(5, 10);
const circle2 = new Circle2(5);

console.log(rect.getArea());   // 50
console.log(circle2.getArea()); // 78.54

/*
## Private Fields (Modern JavaScript)

Use `#` for private fields:
*/

class BankAccount {
  #balance = 0;  // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150

// Can't access private field
// console.log(account.#balance);     // Error!

/*
## Classes vs Factory Functions
*/

// Class approach
class Dog3 {
  constructor(name) {
    this.name = name;
  }
  
  bark() {
    console.log('Woof!');
  }
}

// Factory function approach
function createDog(name) {
  return {
    name,
    bark() {
      console.log('Woof!');
    }
  };
}

// Both work similarly
const dog1 = new Dog3('Buddy');
const dog2 = createDog('Max');

/*
## Practice Exercises

1. Create a `Car` class with properties and methods
2. Create a `Vehicle` parent class and `Car` child class
3. Add a static method to calculate something
4. Use getters and setters for a property with validation
5. Override a parent method in a child class

## Key Takeaways

- Classes are syntactic sugar over JavaScript's prototypal inheritance
- Use `constructor` to initialize instances
- Use `extends` for inheritance
- Use `super` to call parent class methods
- Static methods belong to the class, not instances
- Getters and setters provide controlled access to properties
- Private fields use `#` prefix
- Classes make object-oriented programming cleaner

---

**Next:** 14-modules.js
*/
