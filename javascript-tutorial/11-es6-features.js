/*
# ES6+ Modern JavaScript Features

ES6 (ECMAScript 2015) introduced many features that make JavaScript more powerful and cleaner.

## Arrow Functions (Covered Earlier)

Quick recap:
*/

// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => a + b;

/*
## Template Literals (Covered Earlier)
*/

const name = 'Sarah';
const age = 25;
const message = `${name} is ${age} years old`;

/*
## Default Parameters
*/

function greet(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet('Sarah'));       // Hello, Sarah!
console.log(greet('Tom', 'Hi'));   // Hi, Tom!

/*
## Rest Parameters

Collect remaining arguments into an array:
*/

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

/*
With other parameters:
*/

function introduce(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}

console.log(introduce('Hello', 'Alice', 'Bob', 'Charlie'));
// Hello Alice, Bob, Charlie!

/*
## Spread Operator

Expand an array or object:
*/

// With arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// With objects
const person = { name: 'Tom', age: 25 };
const employee = { ...person, job: 'Developer' };
console.log(employee);
// { name: 'Tom', age: 25, job: 'Developer' }

/*
## Enhanced Object Literals

### Property Shorthand
*/

const name2 = 'Sarah';
const age2 = 25;

// Old way
const person2 = { name: name2, age: age2 };

// New way
const person3 = { name: name2, age: age2 };

/*
### Method Shorthand
*/

// Old way
const obj = {
  sayHello: function() {
    return 'Hello';
  }
};

// New way
const obj2 = {
  sayHello() {
    return 'Hello';
  }
};

/*
### Computed Property Names
*/

const propName = 'score';

const student = {
  name: 'Tom',
  [propName]: 95  // Property name from variable
};

console.log(student.score); // 95

/*
## Let and Const (Covered Earlier)
*/

let mutable = 'can change';
const immutable = 'cannot change';

/*
## For...of Loop (Covered Earlier)
*/

const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}

/*
## String Methods
*/

const text = 'Hello World';

// Check if starts with
text.startsWith('Hello'); // true

// Check if ends with
text.endsWith('World');   // true

// Check if includes
text.includes('lo');      // true

// Repeat string
'ha'.repeat(3);           // 'hahaha'

// Pad string
'5'.padStart(3, '0');     // '005'
'5'.padEnd(3, '0');       // '500'

/*
## Array Methods
*/

// Find first element that matches
const numbers = [1, 5, 10, 15];
const found = numbers.find(n => n > 9);
console.log(found); // 10

// Find index of first match
const index = numbers.findIndex(n => n > 9);
console.log(index); // 2

// Check if some elements match
const hasLarge = numbers.some(n => n > 10);
console.log(hasLarge); // true

// Check if all elements match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

/*
## Object Methods
*/

const person4 = {
  name: 'Tom',
  age: 25,
  city: 'Boston'
};

// Get all keys
Object.keys(person4);
// ['name', 'age', 'city']

// Get all values
Object.values(person4);
// ['Tom', 25, 'Boston']

// Get key-value pairs
Object.entries(person4);
// [['name', 'Tom'], ['age', 25], ['city', 'Boston']]

// Assign/merge objects
const defaults = { theme: 'light', lang: 'en' };
const userPrefs = { theme: 'dark' };
const settings = Object.assign({}, defaults, userPrefs);
// { theme: 'dark', lang: 'en' }

/*
## Exponentiation Operator
*/

// Old way
Math.pow(2, 3); // 8

// New way
2 ** 3;         // 8

// With assignment
let x = 2;
x **= 3;        // x = x ** 3
console.log(x); // 8

/*
## Practice Exercises

1. Create a function with default parameters and rest parameters
2. Use spread operator to merge three arrays
3. Create an object using property shorthand
4. Use `.find()` to get the first even number from an array
5. Use Object.entries() to loop through an object

## Key Takeaways

- ES6+ features make code more concise and readable
- Arrow functions, template literals, and destructuring are essential
- Spread operator is useful for copying and merging
- Rest parameters collect multiple arguments
- Modern array and object methods reduce need for loops
- These features are now standard in all modern browsers

---

**Next:** 12-destructuring-spread.js
*/
