/*
# Objects

Objects store collections of key-value pairs (properties).

## Creating Objects
*/

const person = {
  name: 'Tom',
  age: 22,
  city: 'New York'
};

/*
## Accessing Properties

### Dot Notation
*/

const apple = { 
  color: 'Green',
  price: 1.99
};

console.log(apple.color); // Green
console.log(apple.price); // 1.99

/*
### Bracket Notation
*/

console.log(apple['color']); // Green
console.log(apple['price']); // 1.99

/*
Use bracket notation when:
- Property name has spaces or special characters
- Property name is in a variable
*/

const property = 'color';
console.log(apple[property]); // Green

/*
## Nested Objects
*/

const apple2 = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};

console.log(apple2.price.bulk);      // $3/kg
console.log(apple2.price.smallQty);  // $4/kg

/*
## Non-existent Properties
*/

const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined

/*
## Objects Are Mutable
*/

const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
};

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

// student = {} // TypeError: Assignment to constant variable.

/*
## Delete Operator
*/

const person2 = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript"
};

delete person2.hobby;

console.log(person2);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/

/*
## Objects as Arguments
*/

const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);

/*
## Property Shorthand

When variable name matches property name:
*/

const name = 'Tom';
const age = 22;

// Long way
const person3 = {
  name: name,
  age: age
};

// Shorthand
const person4 = { name, age };

console.log(person4); // { name: 'Tom', age: 22 }

/*
## Destructuring Assignment

Extract properties into variables:
*/

const person5 = {
  name: 'Tom',
  age: 22,
  city: 'Boston'
};

// Extract properties
const { name: n, age: a } = person5;

console.log(n); // Tom
console.log(a);  // 22

/*
## Methods

Functions inside objects:
*/

const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

/*
## The `this` Keyword

Refers to the object the method belongs to:
*/

const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name;
  }
};

console.log(cat.whatName()); // Pipey

/*
## Getters and Setters
*/

const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  }
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = 'Yankee';
console.log(myCat.name);

/*
## Factory Functions

Functions that create and return objects:
*/

const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');
    }
  };
};

const myDog = dogFactory('Buster', 3, 'Golden Retriever');
console.log(myDog.name); // Buster
myDog.bark();            // Woof!

/*
## Objects vs Arrays
*/

// Use arrays for ordered lists
const colors2 = ['red', 'blue', 'green'];

// Use objects for labeled data
const person6 = {
  name: 'Sarah',
  age: 25,
  city: 'Seattle'
};

/*
## Looping Through Objects
*/

const person7 = {
  name: 'Tom',
  age: 22,
  city: 'Boston'
};

// Get all keys
Object.keys(person7);   // ['name', 'age', 'city']

// Get all values
Object.values(person7); // ['Tom', 22, 'Boston']

// Get key-value pairs
Object.entries(person7);
// [['name', 'Tom'], ['age', 22], ['city', 'Boston']]

/*
## Practice Exercises

1. Create an object representing a book with title, author, and pages
2. Add a new property for the year published
3. Create a method that returns a description of the book
4. Use destructuring to extract the title and author
5. Create a factory function that creates book objects

## Key Takeaways

- Objects store key-value pairs
- Access properties with dot or bracket notation
- Objects are mutable - you can add, modify, and delete properties
- Methods are functions stored as object properties
- `this` refers to the object the method belongs to
- Use destructuring to extract multiple properties at once
- Factory functions create objects with similar structure

---

**Next:** 08-array-methods.js
*/
