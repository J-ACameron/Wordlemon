/*
# Destructuring and Spread

## Array Destructuring

Extract values from arrays into variables:
*/

const colors = ['red', 'green', 'blue'];

// Old way
const first = colors[0];
const second = colors[1];

// Destructuring
const [first2, second2, third] = colors;
console.log(first2);  // red
console.log(second2); // green
console.log(third);   // blue

/*
### Skip Elements
*/

const numbers = [1, 2, 3, 4, 5];

const [first3, , third2] = numbers;
console.log(first3);  // 1
console.log(third2);  // 3

/*
### Rest in Destructuring
*/

const numbers2 = [1, 2, 3, 4, 5];

const [first4, second3, ...rest] = numbers2;
console.log(first4);  // 1
console.log(second3); // 2
console.log(rest);    // [3, 4, 5]

/*
### Default Values
*/

const colors2 = ['red'];

const [first5, second4 = 'blue'] = colors2;
console.log(first5);  // red
console.log(second4); // blue (default)

/*
### Swapping Variables
*/

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

/*
## Object Destructuring

Extract properties from objects:
*/

const person = {
  name: 'Tom',
  age: 22,
  city: 'Boston'
};

// Old way
const name = person.name;
const age = person.age;

// Destructuring
const { name: n, age: a, city } = person;
console.log(n); // Tom
console.log(a);  // 22
console.log(city); // Boston

/*
### Rename Variables
*/

const person2 = {
  name: 'Tom',
  age: 22
};

const { name: personName, age: personAge } = person2;
console.log(personName); // Tom
console.log(personAge);  // 22

/*
### Default Values
*/

const person3 = {
  name: 'Tom'
};

const { name: n2, age: a2 = 25, city: c = 'Unknown' } = person3;
console.log(n2); // Tom
console.log(a2);  // 25 (default)
console.log(c); // Unknown (default)

/*
### Nested Destructuring
*/

const user = {
  name: 'Sarah',
  address: {
    city: 'Seattle',
    zip: '98101'
  }
};

const { name: n3, address: { city: c2, zip } } = user;
console.log(n3); // Sarah
console.log(c2); // Seattle
console.log(zip);  // 98101

/*
### Rest in Object Destructuring
*/

const person4 = {
  name: 'Tom',
  age: 22,
  city: 'Boston',
  job: 'Developer'
};

const { name: n4, ...rest2 } = person4;
console.log(n4); // Tom
console.log(rest2); // { age: 22, city: 'Boston', job: 'Developer' }

/*
## Destructuring Function Parameters
*/

// Array destructuring
function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([10, 20]); // X: 10, Y: 20

// Object destructuring
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet({ name: 'Sarah', age: 25 });
// Hello Sarah, you are 25 years old

/*
With defaults:
*/

function createUser({ name, age = 18, role = 'user' }) {
  return { name, age, role };
}

console.log(createUser({ name: 'Tom' }));
// { name: 'Tom', age: 18, role: 'user' }

/*
## Spread Operator with Arrays

### Copying Arrays
*/

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]

/*
### Combining Arrays
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Add elements while combining
const result = [0, ...arr1, 3.5, ...arr2, 7];
console.log(result); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

/*
### Passing Array as Arguments
*/

const numbers3 = [1, 2, 3];

// Old way
Math.max.apply(null, numbers3);

// With spread
Math.max(...numbers3); // 3

/*
## Spread Operator with Objects

### Copying Objects
*/

const original2 = { name: 'Tom', age: 25 };
const copy2 = { ...original2 };

copy2.age = 26;
console.log(original2.age); // 25
console.log(copy2.age);     // 26

/*
### Merging Objects
*/

const defaults = {
  theme: 'light',
  lang: 'en',
  notifications: true
};

const userPrefs = {
  theme: 'dark',
  lang: 'es'
};

const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: 'dark', lang: 'es', notifications: true }

/*
Later properties override earlier ones!

### Adding Properties
*/

const person5 = { name: 'Tom', age: 25 };
const employee = {
  ...person5,
  job: 'Developer',
  salary: 75000
};

console.log(employee);
// { name: 'Tom', age: 25, job: 'Developer', salary: 75000 }

/*
### Updating Properties
*/

const user2 = {
  id: 1,
  name: 'Tom',
  email: 'tom@example.com'
};

const updatedUser = {
  ...user2,
  email: 'newemail@example.com'
};

console.log(updatedUser);
// { id: 1, name: 'Tom', email: 'newemail@example.com' }

/*
## Rest vs Spread

They look the same but do opposite things:
*/

// REST - collects items into array
function sum(...numbers) {  // Rest
  return numbers.reduce((a, b) => a + b);
}

// SPREAD - expands array into items
const nums = [1, 2, 3];
console.log(...nums);  // Spread: 1 2 3

/*
## Practical Examples

### Function with Options Object
*/

function createUser2(name, { age = 18, role = 'user', active = true } = {}) {
  return { name, age, role, active };
}

console.log(createUser2('Tom'));
// { name: 'Tom', age: 18, role: 'user', active: true }

console.log(createUser2('Sarah', { age: 25, role: 'admin' }));
// { name: 'Sarah', age: 25, role: 'admin', active: true }

/*
### Immutable Updates
*/

const todos = [
  { id: 1, text: 'Learn JS', done: false },
  { id: 2, text: 'Build app', done: false }
];

// Mark todo as done (immutably)
const updatedTodos = todos.map(todo =>
  todo.id === 1 ? { ...todo, done: true } : todo
);

/*
## Practice Exercises

1. Destructure an array to get first and last elements
2. Destructure an object and rename a property
3. Use spread to merge two objects
4. Write a function that uses object destructuring in parameters
5. Swap two variables using array destructuring

## Key Takeaways

- Destructuring extracts values from arrays/objects
- Spread operator expands arrays/objects
- Rest operator collects multiple items
- Use destructuring for cleaner function parameters
- Spread is great for immutable updates
- These features make code more readable and concise

---

**Next:** 13-classes.js
*/
