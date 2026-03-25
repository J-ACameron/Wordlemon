/*
# Scope and Closures

## What is Scope?

Scope determines where variables are accessible in your code.

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
## Global Scope

Variables declared outside functions are global:
*/

const color = 'blue'; // Global variable

function printColor() {
  console.log(color); // Can access global variable
}

printColor(); // blue
console.log(color); // blue

/*
## Block Scope

`let` and `const` are block-scoped (limited to `{}`):
*/

const isLoggedIn = true;

if (isLoggedIn) {
  const statusMessage = 'Logged in.';
  console.log(statusMessage); // Works here
}

// console.log(statusMessage); // Error! Not accessible outside block

/*
## `let` vs `var` Scoping

### `let` is Block-Scoped
*/

for (let i = 0; i < 3; i++) {
  // i is only accessible here
  console.log(i);
}
// console.log(i); // Error! i is not defined

/*
### `var` is Function-Scoped
*/

for (var j = 0; j < 3; j++) {
  // j accessible here
  console.log(j);
}
console.log(j); // 3 - still accessible!

/*
**This is why we use `let` instead of `var`!**

## Scope Chain

JavaScript looks for variables from inner to outer scope:
*/

const global = 'global';

function outer() {
  const outerVar = 'outer';
  
  function inner() {
    const innerVar = 'inner';
    
    console.log(innerVar);  // inner
    console.log(outerVar);  // outer
    console.log(global);    // global
  }
  
  inner();
}

outer();

/*
## Closures

A closure is when a function remembers variables from its outer scope:
*/

function makeCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/*
The inner function "closes over" the `count` variable!

### Why Closures Matter
*/

function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('Sarah')); // Hello, Sarah!
console.log(sayHi('Tom'));      // Hi, Tom!

/*
Each function remembers its own `greeting` value.

## Closures in Loops

### The Problem with `var`
*/

// Prints 3 three times (not what we want!)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}
// Output: 3, 3, 3

/*
Why? All callbacks share the same `i` variable.

### The Solution with `let`
*/

// Prints 0, 1, 2 (as expected)
for (let k = 0; k < 3; k++) {
  setTimeout(() => console.log(k), 10);
}
// Output: 0, 1, 2

/*
`let` creates a new `k` for each iteration!

## Private Variables with Closures
*/

function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(30);
console.log(account.getBalance()); // 120

// Can't access balance directly
console.log(account.balance); // undefined

/*
## Lexical Scope

JavaScript uses lexical (static) scoping - scope is determined by where code is written:
*/

const name = 'Global';

function outer2() {
  const name = 'Outer';
  
  function inner() {
    console.log(name); // Which name?
  }
  
  inner();
}

outer2(); // Outer

/*
`inner()` looks for `name` where it's defined, not where it's called.

## Common Pitfalls

### Accidental Globals
*/

function oops() {
  // Forgot const/let - creates global!
  accidentalGlobal = 'Oops';
}

oops();
console.log(accidentalGlobal); // Oops

/*
**Always use `const` or `let`!**

### Shadowing
*/

const x = 10;

function test() {
  const x = 20; // Different variable, same name
  console.log(x); // 20
}

test();
console.log(x); // 10

/*
## Practice Exercises

1. Create a function that returns a counter (using closures)
2. Explain why `let` is better than `var` in loops
3. Create a function with a private variable that can only be accessed through methods
4. What will this print? Why?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

## Key Takeaways

- Scope determines where variables are accessible
- `let` and `const` are block-scoped
- `var` is function-scoped (avoid it!)
- Closures let functions remember their outer scope
- Closures are useful for private variables and data encapsulation
- Always declare variables with `const` or `let`
- JavaScript uses lexical scoping

---

**Next:** 11-es6-features.js
*/
