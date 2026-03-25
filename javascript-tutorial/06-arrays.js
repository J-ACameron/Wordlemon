/*
# Arrays

Arrays are ordered lists that can store multiple values.

## Creating Arrays
*/

const fruit = ["apple", "orange", "banana"];

// Arrays can hold different data types
const mixed = [1, 'chicken', false, null];

// Empty array
const empty = [];

/*
## Accessing Array Elements

Arrays use zero-based indexing:
*/

const myArray = [100, 200, 300];

console.log(myArray[0]); // 100 (first element)
console.log(myArray[1]); // 200 (second element)
console.log(myArray[2]); // 300 (third element)

/*
## Array Length
*/

const numbers = [1, 2, 3, 4];
console.log(numbers.length); // 4

// Access last element
const lastElement = numbers[numbers.length - 1];
console.log(lastElement); // 4

/*
## Arrays Are Mutable

You can change array contents:
*/

const colors = ['red', 'blue', 'green'];
colors[0] = 'yellow';
console.log(colors); // ['yellow', 'blue', 'green']

/*
## Adding Elements

### `.push()` - Add to End
*/

const cart = ['apple', 'orange'];
cart.push('pear'); 
console.log(cart); // ['apple', 'orange', 'pear']

// Add multiple elements
const nums = [1, 2];
nums.push(3, 4, 5);
console.log(nums); // [1, 2, 3, 4, 5]

// Returns the new array length.

/*
### `.unshift()` - Add to Beginning
*/

let cats = ['Bob'];
cats.unshift('Willy');
console.log(cats); // ['Willy', 'Bob']

// Add multiple elements
cats.unshift('Puff', 'George');
console.log(cats); // ['Puff', 'George', 'Willy', 'Bob']

// Returns the new array length.

/*
## Removing Elements

### `.pop()` - Remove from End
*/

const fruit2 = ["apple", "orange", "banana"];
const removed = fruit2.pop();

console.log(removed); // 'banana'
console.log(fruit2);  // ['apple', 'orange']

// Returns the removed element.

/*
### `.shift()` - Remove from Beginning
*/

let cats2 = ['Bob', 'Willy', 'Mini'];
const removed2 = cats2.shift();

console.log(removed2); // 'Bob'
console.log(cats2);    // ['Willy', 'Mini']

// Returns the removed element.

/*
## Array Methods Summary
*/

const arr = [1, 2, 3];

arr.push(4);      // [1, 2, 3, 4] - add to end
arr.pop();        // [1, 2, 3] - remove from end
arr.unshift(0);   // [0, 1, 2, 3] - add to beginning
arr.shift();      // [1, 2, 3] - remove from beginning

/*
## `.concat()` - Combining Arrays

Creates a new array without modifying originals:
*/

const numbers2 = [3, 2, 1];
const newFirstNumber = 4;
    
// Add to beginning
const result1 = [newFirstNumber].concat(numbers2);
console.log(result1); // [4, 3, 2, 1]
    
// Add to end
const result2 = numbers2.concat(newFirstNumber);
console.log(result2); // [3, 2, 1, 4]

// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

/*
## Checking Array Contents
*/

const fruit3 = ['apple', 'banana', 'orange'];

// Check if element exists
fruit3.includes('banana'); // true
fruit3.includes('grape');  // false

// Find index of element
fruit3.indexOf('orange');  // 2
fruit3.indexOf('grape');   // -1 (not found)

/*
## Array Slicing

Extract a portion without modifying original:
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));     // ['camel', 'duck', 'elephant']
console.log(animals.slice(1, 4));  // ['bison', 'camel', 'duck']
console.log(animals.slice(-2));    // ['duck', 'elephant']

// Original unchanged
console.log(animals); // ['ant', 'bison', 'camel', 'duck', 'elephant']

/*
## Nested Arrays

Arrays can contain other arrays:
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0]);    // [1, 2, 3]
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

/*
## Practice Exercises

1. Create an array of your top 5 favorite foods
2. Add a new food to the end and one to the beginning
3. Remove the last food from the array
4. Access the third element in your array
5. Find the index of a specific food

## Key Takeaways

- Arrays store ordered collections of data
- Arrays use zero-based indexing (first element is index 0)
- `.push()` and `.pop()` work with the end of arrays
- `.unshift()` and `.shift()` work with the beginning of arrays
- `.concat()` combines arrays without mutation
- Arrays are mutable - you can change their contents
- Use `.length` to get the number of elements

---

**Next:** 07-objects.js
*/
