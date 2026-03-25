/*
# Functions

Functions are reusable blocks of code that perform specific tasks.

## Function Declaration
*/

function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
const result = sum(3, 6);
console.log(result); // 9

/*
## Function Components
*/

function greet(name) {
  //     ↑ parameter
  return `Hello, ${name}!`;
  //     ↑ return value
}

const message = greet('Sarah');
//                    ↑ argument
console.log(message); // Hello, Sarah!

/*
- **Parameters:** Variables listed in the function definition
- **Arguments:** Actual values passed when calling the function
- **Return:** Value sent back to the caller

## The `return` Keyword
*/

// With return - gives back a value
function sum2(num1, num2) {
  return num1 + num2;
}
const total = sum2(2, 4);
console.log(total); // 6

// Without return - returns undefined
function sum3(num1, num2) {
  num1 + num2; // This does nothing!
}
const total2 = sum3(2, 4);
console.log(total2); // undefined

/*
**Important:** Code after `return` doesn't execute!
*/

function example() {
  return 'Done';
  console.log('This never runs');
}

/*
## Function Expressions

Assigning a function to a variable:
*/

const dog = function() {
  return 'Woof!';
};

console.log(dog()); // Woof!

/*
## Arrow Functions (ES6)

Modern, concise syntax for functions:

### Basic Syntax
*/

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => {
  return a + b;
};

/*
### With Two or More Parameters
*/

const sum4 = (param1, param2) => { 
  return param1 + param2; 
}; 
console.log(sum4(2, 5)); // 7

/*
### With No Parameters
*/

const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // hello

/*
### With a Single Parameter
*/

// Parentheses optional with one parameter
const checkWeight = weight => { 
  console.log(`Weight: ${weight}`); 
}; 
checkWeight(25); // Weight: 25

/*
### Concise Arrow Functions

For simple returns, you can omit braces and `return`:
*/

// With explicit return
const multiply = (a, b) => {
  return a * b;
};

// Concise version (implicit return)
const multiply2 = (a, b) => a * b;

console.log(multiply2(2, 30)); // 60

// More examples:

const square = x => x * x;
const greet2 = name => `Hello, ${name}!`;
const isEven = num => num % 2 === 0;

console.log(square(5));        // 25
console.log(greet2('Alex'));    // Hello, Alex!
console.log(isEven(4));        // true

/*
## Default Parameters
*/

function greet3(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet3('Sarah')); // Hello, Sarah!
console.log(greet3());        // Hello, Guest!

/*
## Functions as Values

Functions are first-class citizens - they can be assigned to variables:
*/

const plusFive = (number) => {
  return number + 5;  
};

// Assign function to another variable
let f = plusFive;

plusFive(3); // 8
f(9);        // 14

/*
## Multiple Return Statements
*/

function checkAge(age) {
  if (age >= 18) {
    return 'Adult';
  }
  return 'Minor';
}

console.log(checkAge(25)); // Adult
console.log(checkAge(15)); // Minor

/*
## Function Scope

Variables declared inside a function are local to that function:
*/

function myFunction() {
  const pizzaName = "Margarita";
  console.log(pizzaName); // Works here
}

myFunction();
// console.log(pizzaName); // Error! pizzaName is not defined

/*
## Practice Exercises

1. Write a function that takes a temperature in Celsius and returns Fahrenheit
2. Create an arrow function that checks if a number is positive
3. Write a function with a default parameter for a greeting
4. Convert this to an arrow function: `function double(x) { return x * 2; }`

## Key Takeaways

- Functions make code reusable and organized
- Always use `return` to send values back
- Arrow functions are more concise than traditional functions
- Use arrow functions for simple operations
- Functions can have default parameters
- Variables inside functions are scoped to that function

---

**Next:** 06-arrays.js
*/
