/*
# Loops

Loops let you repeat code multiple times.

## `for` Loop

The most common loop:
*/

for (let i = 0; i < 4; i++) {
  console.log(i);
}
// Prints: 0, 1, 2, 3

/*
### Anatomy of a `for` Loop

for (initialization; condition; increment) {
  // code to repeat
}

- **Initialization:** Runs once before the loop starts
- **Condition:** Checked before each iteration
- **Increment:** Runs after each iteration

## Looping Through Arrays
*/

const fruit = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
// apple
// banana
// orange

/*
## Reverse Loop
*/

const fruit2 = ["apple", "orange", "banana"];

for (let i = fruit2.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruit2[i]}`);
}
// 2. banana
// 1. orange
// 0. apple

/*
## `while` Loop

Repeats while condition is true:
*/

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// Prints: 0, 1, 2, 3, 4

/*
**Warning:** Make sure the condition eventually becomes false, or you'll have an infinite loop!

// BAD - infinite loop!
let i = 0;
while (i < 5) {
  console.log(i);
  // Forgot to increment i!
}

## `do...while` Loop

Runs at least once, then checks condition:
*/

let x = 0;
let j = 0;

do {
  x = x + j;
  console.log(x);
  j++;
} while (j < 5);
// Prints: 0, 1, 3, 6, 10

/*
Difference from `while`:
*/

// while - might not run at all
let k = 10;
while (k < 5) {
  console.log('This never runs');
}

// do...while - always runs at least once
let m = 10;
do {
  console.log('This runs once');
} while (m < 5);

/*
## `for...of` Loop

Iterate over array values:
*/

const fruit3 = ["apple", "orange", "banana"];

for (let fruit of fruit3) {
  console.log(fruit);
}
// apple
// orange
// banana

/*
Much cleaner than traditional `for` loop when you don't need the index!

## `for...in` Loop

Iterate over array indices (or object keys):
*/

const fruit4 = ["apple", "orange", "banana"];

for (let index in fruit4) {
  console.log(index);
}
// 0
// 1
// 2

/*
With objects:
*/

const person = {
  name: 'Tom',
  age: 22,
  city: 'Boston'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: Tom
// age: 22
// city: Boston

/*
## `break` Statement

Exit a loop early:
*/

for (let i = 0; i < 99; i++) {
  if (i > 5) {
    break; // Stop the loop
  }
  console.log(i);
}
// Prints: 0, 1, 2, 3, 4, 5

/*
## `continue` Statement

Skip to next iteration:
*/

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Skip this iteration
  }
  console.log(i);
}
// Prints: 0, 1, 2, 4, 5, 6, 7, 8, 9 (skips 3)

/*
## Nested Loops

Loops inside loops:
*/

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i}-${j}`);
  }
}
// 0-0
// 0-1
// 0-2
// 1-0
// 1-1
// 1-2

/*
Practical example - 2D array:
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
// Prints: 1, 2, 3, 4, 5, 6, 7, 8, 9

/*
## Which Loop to Use?
*/

const arr = [1, 2, 3, 4, 5];

// Need index? Use traditional for
for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i}: ${arr[i]}`);
}

// Just need values? Use for...of
for (let value of arr) {
  console.log(value);
}

// Need to transform array? Use .map()
const doubled = arr.map(x => x * 2);

// Need to filter array? Use .filter()
const evens = arr.filter(x => x % 2 === 0);

/*
## Practice Exercises

1. Write a `for` loop that prints numbers 1-10
2. Loop through an array backwards
3. Use `for...of` to sum all numbers in an array
4. Write a nested loop to create a multiplication table
5. Use `break` to find the first number divisible by 7 in an array

## Key Takeaways

- `for` loops are most versatile
- `for...of` is cleanest for iterating array values
- `for...in` is for object keys (avoid for arrays)
- `while` loops when you don't know iteration count
- `break` exits the loop completely
- `continue` skips to next iteration
- Often array methods (`.map()`, `.filter()`) are better than loops

---

**Next:** 10-scope-and-closures.js
*/
