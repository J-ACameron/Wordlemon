/*
# The 'this' Keyword

Understanding `this` is crucial for working with objects and classes in JavaScript.

## What is `this`?

`this` refers to the object that is executing the current function. Its value depends on HOW a function is called.

## `this` in Methods

When a function is called as a method, `this` refers to the object:
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
## `this` in Regular Functions

In regular functions, `this` depends on how it's called:
*/

function showThis() {
  console.log(this);
}

showThis(); // Window (in browser) or global (in Node.js)

/*
In strict mode:
*/

'use strict';

function showThis2() {
  console.log(this);
}

showThis2(); // undefined

/*
## `this` in Arrow Functions

Arrow functions DON'T have their own `this` - they inherit from parent scope:
*/

const obj = {
  name: 'Object',
  regular: function() {
    console.log(this.name); // 'Object'
  },
  arrow: () => {
    console.log(this.name); // undefined (inherits from global)
  }
};

obj.regular(); // Object
obj.arrow();   // undefined

/*
## Common `this` Pitfalls

### Losing `this` Context
*/

const person = {
  name: 'Tom',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Hello, I'm Tom

const greetFunc = person.greet;
greetFunc(); // Hello, I'm undefined (lost context!)

/*
### In Callbacks
*/

const person2 = {
  name: 'Tom',
  hobbies: ['reading', 'coding'],
  showHobbies() {
    this.hobbies.forEach(function(hobby) {
      console.log(`${this.name} likes ${hobby}`);
      // 'this' is undefined here!
    });
  }
};

/*
## Solutions to `this` Problems

### 1. Arrow Functions
*/

const person3 = {
  name: 'Tom',
  hobbies: ['reading', 'coding'],
  showHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} likes ${hobby}`);
      // Arrow function inherits 'this'
    });
  }
};

person3.showHobbies();
// Tom likes reading
// Tom likes coding

/*
### 2. Store `this` in Variable
*/

const person4 = {
  name: 'Tom',
  hobbies: ['reading', 'coding'],
  showHobbies() {
    const self = this; // Store reference
    this.hobbies.forEach(function(hobby) {
      console.log(`${self.name} likes ${hobby}`);
    });
  }
};

/*
### 3. bind() Method
*/

const person5 = {
  name: 'Tom',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const greetFunc2 = person5.greet.bind(person5);
greetFunc2(); // Hello, I'm Tom

/*
## call() and apply()

Call a function with specific `this` value:
*/

function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person6 = { name: 'Tom' };

// call - arguments individually
greet.call(person6, 'Hello', '!');
// Hello, I'm Tom!

// apply - arguments as array
greet.apply(person6, ['Hi', '.']);
// Hi, I'm Tom.

/*
## `this` in Classes
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person7 = new Person('Tom');
person7.greet(); // Hello, I'm Tom

/*
## Practice Exercises

1. Create an object with methods that use `this`
2. Fix a callback that loses `this` context
3. Use bind() to preserve `this`
4. Explain difference between arrow and regular functions with `this`

## Key Takeaways

- `this` refers to the object executing the function
- Arrow functions inherit `this` from parent scope
- Regular functions get `this` based on how they're called
- Use arrow functions in callbacks to preserve `this`
- bind(), call(), and apply() control `this` value
- Losing `this` context is a common bug

---

**Next:** 21-error-handling.js
*/
