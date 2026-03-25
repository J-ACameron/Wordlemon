/*
# Modules

Modules let you split code into separate files and import/export functionality.

## Why Modules?

- Organize code into logical pieces
- Reuse code across files
- Avoid global namespace pollution
- Better maintainability

## ES6 Modules (Modern)

### Exporting

// myMath.js

// Named exports
export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

// Export multiple at once
function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

export { multiply, divide };

### Default Export

Only one default export per file:

// calculator.js

export default function add(x, y) {
  return x + y;
}

// Or export separately
function add(x, y) {
  return x + y;
}

export default add;

### Mixing Default and Named Exports

// myMath.js

// Default export
export default function add(x, y) {
  return x + y;
}

// Named exports
export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

## Importing

### Named Imports

// main.js
import { add, subtract } from './myMath.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

### Default Import

// main.js
import add from './calculator.js';

console.log(add(5, 3)); // 8

### Mixing Default and Named Imports

// main.js
import add, { subtract, multiply } from './myMath.js';

console.log(add(6, 2));      // 8
console.log(subtract(6, 2)); // 4
console.log(multiply(6, 2)); // 12

### Import Everything

// main.js
import * as math from './myMath.js';

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2
console.log(math.multiply(5, 3)); // 15

### Renaming Imports

import { add as sum, subtract as minus } from './myMath.js';

console.log(sum(5, 3));   // 8
console.log(minus(5, 3)); // 2

## Using Modules in HTML

<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>

The `type="module"` attribute is required!

## CommonJS (Node.js)

Node.js traditionally uses CommonJS:

### Exporting

// myMath.js

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// Export multiple
module.exports = {
  add,
  subtract
};

// Or export individually
module.exports.multiply = function(x, y) {
  return x * y;
};

### Importing

// main.js
const myMath = require('./myMath.js');

console.log(myMath.add(6, 2));      // 8
console.log(myMath.subtract(6, 2)); // 4

### Destructuring Imports

const { add, subtract } = require('./myMath.js');

console.log(add(6, 2));      // 8
console.log(subtract(6, 2)); // 4

## Module Patterns

### Utility Module

// utils.js
export function formatDate(date) {
  return date.toLocaleDateString();
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

### Configuration Module

// config.js
export const API_URL = 'https://api.example.com';
export const TIMEOUT = 5000;
export const MAX_RETRIES = 3;

export default {
  API_URL,
  TIMEOUT,
  MAX_RETRIES
};

### Class Module

// User.js
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

// main.js
import User from './User.js';

const user = new User('Tom', 'tom@example.com');
console.log(user.greet());

## Re-exporting

Combine exports from multiple modules:

// shapes/index.js
export { Circle } from './Circle.js';
export { Rectangle } from './Rectangle.js';
export { Triangle } from './Triangle.js';

// main.js
import { Circle, Rectangle, Triangle } from './shapes/index.js';

## Dynamic Imports

Load modules conditionally or on-demand:

// Load module when needed
async function loadModule() {
  const module = await import('./myModule.js');
  module.doSomething();
}

// Conditional loading
if (condition) {
  import('./moduleA.js').then(module => {
    module.init();
  });
} else {
  import('./moduleB.js').then(module => {
    module.init();
  });
}

## Module Best Practices

1. **One module per file** - Keep modules focused
2. **Use named exports for utilities** - More explicit
3. **Use default export for main class/function** - Cleaner imports
4. **Keep modules small** - Easier to understand and test
5. **Avoid circular dependencies** - Can cause issues

## Example Project Structure

project/
├── index.html
├── main.js
├── utils/
│   ├── math.js
│   ├── string.js
│   └── date.js
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── Button.js
└── config/
    └── constants.js

## Practice Exercises

1. Create a math utilities module with several functions
2. Create a module that exports a class
3. Import and use functions from your math module
4. Create a config module with constants
5. Set up a simple project with multiple modules

## Key Takeaways

- Modules help organize code into separate files
- ES6 modules use `import` and `export`
- CommonJS (Node.js) uses `require` and `module.exports`
- Use named exports for multiple items
- Use default export for main functionality
- Always use `type="module"` in HTML script tags
- Modules have their own scope (not global)

---

**Next:** 15-event-loop.js
*/
