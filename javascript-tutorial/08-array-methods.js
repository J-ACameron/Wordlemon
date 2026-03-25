/*
# Array Methods (map, filter, reduce)

These powerful methods let you transform and work with arrays functionally.

## `.forEach()` - Execute for Each Element

Runs a function for each array element:
*/

const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
  console.log(number);
});
// Prints each number on a new line

/*
With index:
*/

const fruit = ['apple', 'banana', 'orange'];

fruit.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: orange

/*
**Note:** `.forEach()` doesn't return anything - it's just for side effects.

## `.map()` - Transform Each Element

Creates a new array by transforming each element:
*/

const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Original unchanged
console.log(nums); // [1, 2, 3, 4]

/*
More examples:
*/

const members = ["Taylor", "Donald", "Don"];

const announcements = members.map(member => {
  return `${member} joined the contest.`;
});

console.log(announcements);
// ['Taylor joined the contest.', 'Donald joined the contest.', 'Don joined the contest.']

const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
console.log(withTax); // [11, 22, 33]

/*
## `.filter()` - Keep Elements That Pass a Test

Creates a new array with elements that pass a condition:
*/

const randomNumbers = [4, 11, 42, 14, 39];

const filteredArray = randomNumbers.filter(n => n > 5);
console.log(filteredArray); // [11, 42, 14, 39]

/*
More examples:
*/

const words = ['spray', 'limit', 'elite', 'exuberant'];

const longWords = words.filter(word => word.length > 6);
console.log(longWords); // ['exuberant']

const ages = [12, 18, 25, 16, 30, 14];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

/*
## `.reduce()` - Reduce Array to Single Value

Combines all elements into a single value:
*/

const numbers2 = [1, 2, 3, 4];

const sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10

/*
### How `.reduce()` Works

Step by step:
- accumulator starts at 1 (first element)
- currentValue is 2: 1 + 2 = 3
- currentValue is 3: 3 + 3 = 6
- currentValue is 4: 6 + 4 = 10

### With Initial Value
*/

const numbers3 = [1, 2, 3, 4];

const sum2 = numbers3.reduce((acc, curr) => acc + curr, 0);
//                                                    ↑ initial value

console.log(sum2); // 10

/*
More examples:
*/

// Find maximum
const numbers4 = [5, 2, 9, 1, 7];
const max = numbers4.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});
console.log(max); // 9

// Count occurrences
const fruit2 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruit2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

/*
## Chaining Methods

Combine multiple methods:
*/

const numbers5 = [1, 2, 3, 4, 5, 6];

const result = numbers5
  .filter(n => n % 2 === 0)  // Keep even numbers: [2, 4, 6]
  .map(n => n * 2)           // Double them: [4, 8, 12]
  .reduce((acc, n) => acc + n, 0); // Sum: 24

console.log(result); // 24

/*
Another example:
*/

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const names = users
  .filter(user => user.age >= 25)
  .map(user => user.name);

console.log(names); // ['John', 'Jane']

/*
## Callback Functions

These methods use callback functions:
*/

const isEven2 = (n) => {
  return n % 2 === 0;
};

const numbers6 = [1, 2, 3, 4, 5, 6];
const evens = numbers6.filter(isEven2);
console.log(evens); // [2, 4, 6]

/*
## When to Use Each Method

- **`.forEach()`** - When you need to do something with each element (side effects)
- **`.map()`** - When you need to transform each element
- **`.filter()`** - When you need to keep some elements and remove others
- **`.reduce()`** - When you need to combine all elements into one value

## Practice Exercises

1. Use `.map()` to convert an array of Celsius temperatures to Fahrenheit
2. Use `.filter()` to get all numbers greater than 10 from an array
3. Use `.reduce()` to find the product of all numbers in an array
4. Chain methods: filter even numbers, double them, then sum them
5. Given an array of objects with `name` and `score`, filter scores > 80 and map to just names

## Key Takeaways

- These methods don't modify the original array (except `.forEach()`)
- `.map()` always returns an array of the same length
- `.filter()` returns an array of the same or shorter length
- `.reduce()` returns a single value
- You can chain these methods together
- Arrow functions make these methods very concise
- These are fundamental to functional programming in JavaScript

---

**Next:** 09-loops.js
*/
