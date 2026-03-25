/*
# Variables and Data Types

## What are Variables?

Variables are containers that store data values. Think of them as labeled boxes where you can put information and retrieve it later.

## Variable Declaration Keywords

### `let` - Block-scoped, Reassignable

`let` declares a variable that:
- Is scoped to the nearest enclosing block (if statement, loop, function, etc.)
- CAN be reassigned to a new value
- Cannot be redeclared in the same scope
- Is NOT hoisted (accessing before declaration causes ReferenceError)
- Is the modern standard for variables that change
*/

let count;
console.log(count); // undefined
count = 10;
console.log(count); // 10

// Can be reassigned
count = 20;
console.log(count); // 20

// Cannot redeclare in same scope
// let count = 5; // SyntaxError: Identifier 'count' has already been declared

/*
### `const` - Block-scoped, NOT Reassignable

`const` declares a variable that:
- Is scoped to the nearest enclosing block (if statement, loop, function, etc.)
- CANNOT be reassigned to a new value (throws TypeError)
- Cannot be redeclared in the same scope
- MUST be initialized when declared
- Is NOT hoisted (accessing before declaration causes ReferenceError)
- Is the modern standard for variables that should not change
- Objects/arrays declared with const can still have their contents modified
*/

const numberOfColumns = 4;
console.log(numberOfColumns); // 4

// This will throw an error!
// numberOfColumns = 8; // TypeError: Assignment to constant variable

// Must be initialized
// const x; // SyntaxError: Missing initializer in const declaration

// But object contents CAN be modified
const person = { name: 'Tom' };
person.name = 'Sarah'; // This works!
console.log(person); // { name: 'Sarah' }

/*
### `var` - Function-scoped (Avoid in Modern JavaScript)

`var` declares a variable that:
- Is scoped to the nearest enclosing FUNCTION (not block!)
- CAN be reassigned to a new value
- CAN be redeclared in the same scope
- IS hoisted (moved to top of scope, initialized as undefined)
- Has confusing scoping rules that lead to bugs
- Should be AVOIDED in modern JavaScript
- Only use if you need to support very old browsers
*/

var a;
console.log(a); // undefined

// Can be redeclared
var a = 5;
var a = 10; // This works (but is bad practice!)
console.log(a); // 10

// Function-scoped, not block-scoped
if (true) {
  var x = 'inside if';
}
console.log(x); // 'inside if' - accessible outside the block!

// With let, this would be different:
if (true) {
  let y = 'inside if';
}
// console.log(y); // ReferenceError: y is not defined

/*
**Best Practice:** Use `const` by default. Only use `let` when you know the value will change. NEVER use `var` in modern JavaScript.

## Important Concepts Explained

### Scope
Scope determines WHERE in your code a variable can be accessed. Think of it like a box - variables inside a box can only be used inside that box.

- **Block Scope:** Variables declared with `let` and `const` are only accessible within their block (inside {})
- **Function Scope:** Variables declared with `var` are only accessible within their function
- **Global Scope:** Variables declared outside any function/block are accessible everywhere

Example:
*/

function scopeExample() {
  const x = 10; // x is scoped to this function
  if (true) {
    const y = 20; // y is scoped to this if block
    console.log(x); // 10 - can access x from outer scope
    console.log(y); // 20 - can access y
  }
  // console.log(y); // Error! y is not accessible here
}

/*
### Hoisting
Hoisting is JavaScript's behavior of moving declarations to the top of their scope BEFORE code runs.

- **`var` is hoisted:** The declaration moves to the top, initialized as `undefined`
- **`let` and `const` are hoisted:** The declaration moves to the top, but NOT initialized (causes ReferenceError if accessed before declaration)
- **Functions are fully hoisted:** The entire function moves to the top

Example:
*/

// This works because var is hoisted
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = 5;

// This FAILS because let is hoisted but not initialized
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 5;

// Functions are fully hoisted - you can call them before they're declared
sayHello(); // Works! Prints "Hello"
function sayHello() {
  console.log('Hello');
}

/*
### Block
A block is any code enclosed in curly braces {}. Examples:
- if statements: if (condition) { ... }
- loops: for (...) { ... }
- functions: function() { ... }
- just braces: { ... }

Variables declared with `let` and `const` are only accessible within their block.

### Reassignable
A variable is reassignable if you can change its value after it's created.

- `let` is reassignable: let x = 5; x = 10; // Works!
- `const` is NOT reassignable: const x = 5; x = 10; // Error!
- `var` is reassignable: var x = 5; x = 10; // Works!

### Redeclare
Redeclaring means creating a new variable with the same name in the same scope.

- `let` cannot be redeclared: let x = 5; let x = 10; // Error!
- `const` cannot be redeclared: const x = 5; const x = 10; // Error!
- `var` CAN be redeclared: var x = 5; var x = 10; // Works! (but bad practice)

### Initialized
A variable is initialized when it's given a starting value.

- `let` can be declared without initialization: let x; // x is undefined
- `const` MUST be initialized: const x; // Error! Must have a value
- `var` can be declared without initialization: var x; // x is undefined

### ReferenceError
An error that occurs when you try to use a variable that doesn't exist or isn't accessible in the current scope.

Example:
*/

// console.log(unknownVariable); // ReferenceError: unknownVariable is not defined

/*
### TypeError
An error that occurs when you try to do something invalid with a value.

Example:
*/

// const x = 5;
// x = 10; // TypeError: Assignment to constant variable

/*
### Immutable vs Mutable
- **Immutable:** Cannot be changed. Primitives like numbers and strings are immutable.
- **Mutable:** Can be changed. Objects and arrays are mutable.

Example:
*/

// Immutable - strings cannot be changed
const str = 'hello';
// str[0] = 'H'; // Doesn't work - strings are immutable
const newStr = 'H' + str.slice(1); // Create a new string instead

// Mutable - objects can be changed
const obj = { name: 'Tom' };
obj.name = 'Sarah'; // This works! Objects are mutable

/*
### Primitive vs Reference Types
- **Primitive:** Simple values like numbers, strings, booleans. Stored directly in memory.
- **Reference:** Complex values like objects and arrays. Stored as a reference (pointer) to memory.

Example:
*/

// Primitives are copied by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 - a is unchanged
console.log(b); // 10

// Objects are copied by reference
const obj1 = { name: 'Tom' };
const obj2 = obj1;
obj2.name = 'Sarah';
console.log(obj1.name); // 'Sarah' - obj1 changed too!
console.log(obj2.name); // 'Sarah'

/*
## Data Types

### Numbers
*/

let amount = 6;
let price = 4.99;
let negative = -42;
let decimal = 3.14159;

/*
### Strings
*/

let single = 'Hello world';
let double = "Hello world";
let backticks = `Hello world`;

// Get string length
console.log(single.length); // 11

/*
### Booleans
*/

const found = true;
const isComplete = false;

/*
### Null
*/

let x = null; // Intentionally empty value

/*
### Undefined
*/

let y;
console.log(y); // undefined - variable declared but not assigned

/*
## Console Output
*/

// Basic logging
console.log('Hello world!');

// Multiple values
const name = "Tammy";
const found2 = false;
const x2 = null;
console.log(name, found2, x2); // Tammy false null

// Formatted output
console.log('Hello %s', 'QuickRef.ME');

// Warnings and errors
console.warn('This is a warning');
console.error(new Error('Oops!'));

/*
## Practice Exercises

Try these on your own:

1. Create a variable using `const` for your age
2. Create a variable using `let` for a counter that starts at 0
3. Try to reassign the `const` variable - what happens?
4. Log all your variables to the console

## Key Takeaways

- Use `const` for values that won't change
- Use `let` for values that will change
- Avoid `var` in modern JavaScript
- JavaScript has several primitive data types: number, string, boolean, null, undefined
- `console.log()` is your best friend for debugging
- Understand scope, hoisting, and the difference between primitives and references

---

**Next:** 02-operators.js
*/

const age = 18;
let counter = 0;

// age = 20; //error
console.log(age, counter);
