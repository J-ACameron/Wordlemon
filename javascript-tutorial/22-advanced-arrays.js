/*
# Advanced Array Techniques

## Array Destructuring
*/

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

/*
## Flattening Arrays
*/

const nested = [1, [2, 3], [4, [5, 6]]];

// Flat one level
nested.flat(); // [1, 2, 3, 4, [5, 6]]

// Flat all levels
nested.flat(Infinity); // [1, 2, 3, 4, 5, 6]

/*
## Array.from()

Create arrays from array-like objects:
*/

// From string
Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// With mapping function
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Create range
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

/*
## Removing Duplicates
*/

const numbers = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4]

/*
## Sorting
*/

const numbers2 = [3, 1, 4, 1, 5, 9];

// Ascending
numbers2.sort((a, b) => a - b); // [1, 1, 3, 4, 5, 9]

// Descending
numbers2.sort((a, b) => b - a); // [9, 5, 4, 3, 1, 1]

// Sort objects
const users = [
  { name: 'Tom', age: 25 },
  { name: 'Sarah', age: 30 },
  { name: 'Bob', age: 20 }
];

users.sort((a, b) => a.age - b.age);

/*
## Finding Elements
*/

const numbers3 = [1, 5, 10, 15];

// Find first match
numbers3.find(n => n > 9); // 10

// Find index
numbers3.findIndex(n => n > 9); // 2

// Check if any match
numbers3.some(n => n > 10); // true

// Check if all match
numbers3.every(n => n > 0); // true

/*
## Grouping Data
*/

const users2 = [
  { name: 'Tom', role: 'admin' },
  { name: 'Sarah', role: 'user' },
  { name: 'Bob', role: 'admin' }
];

const grouped = users2.reduce((acc, user) => {
  const key = user.role;
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});

// { admin: [...], user: [...] }

/*
## Key Takeaways

- Use destructuring for cleaner code
- flat() simplifies nested arrays
- Set removes duplicates
- sort() needs compare function for numbers
- find/some/every for searching
- reduce() is powerful for transformations

---

Congratulations! You've completed the JavaScript tutorial. Keep practicing and building projects!
*/
