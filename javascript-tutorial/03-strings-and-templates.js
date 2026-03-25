/*
# Strings and Template Literals

## Creating Strings
*/

let single = 'Single quotes work';
let double = "Double quotes work too";
let backticks = `Backticks are special`;

// All three create strings, but backticks have special powers!

/*
## String Properties
*/

let message = 'Hello World';
console.log(message.length); // 11

/*
## String Concatenation (Old Way)
*/

let age = 7;
let msg = 'Tommy is ' + age + ' years old.';
console.log(msg); // Tommy is 7 years old.

// This works but gets messy with multiple variables.

/*
## Template Literals (Modern Way)

Template literals use backticks and allow embedded expressions:
*/

age = 7;
message = `Tommy is ${age} years old.`;
console.log(message); // Tommy is 7 years old.

/*
### Why Template Literals Are Better
*/

const name = 'Sarah';
const score = 95;
const grade = 'A';

// Old way - hard to read
const oldWay = 'Student ' + name + ' scored ' + score + ' and got grade ' + grade;

// New way - much cleaner!
const newWay = `Student ${name} scored ${score} and got grade ${grade}`;

/*
### Expressions in Template Literals

You can put any JavaScript expression inside `${}`:
*/

const price = 10;
const quantity = 3;

console.log(`Total: $${price * quantity}`); // Total: $30

const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`); // 5 + 10 = 15

/*
### Multi-line Strings

Template literals preserve line breaks:
*/

// Old way (awkward)
const oldPoem = 'Roses are red\n' +
                'Violets are blue\n' +
                'JavaScript is awesome\n' +
                'And so are you';

// New way (natural)
const newPoem = `Roses are red
Violets are blue
JavaScript is awesome
And so are you`;

/*
## Common String Methods
*/

const text = 'Hello World';

// Convert to uppercase
text.toUpperCase(); // 'HELLO WORLD'

// Convert to lowercase
text.toLowerCase(); // 'hello world'

// Check if string includes substring
text.includes('World'); // true
text.includes('world'); // false (case-sensitive!)

// Get character at position
text[0];        // 'H'
text.charAt(0); // 'H'

// Find position of substring
text.indexOf('World'); // 6
text.indexOf('xyz');   // -1 (not found)

// Extract part of string
text.slice(0, 5);  // 'Hello'
text.slice(6);     // 'World'

// Replace text
text.replace('World', 'JavaScript'); // 'Hello JavaScript'

// Split into array
text.split(' '); // ['Hello', 'World']

// Remove whitespace from ends
'  hello  '.trim(); // 'hello'

/*
## Escape Characters
*/

// Use backslash to escape special characters
const quote = 'He said, "It\'s a beautiful day"';
const path = 'C:\\Users\\Documents';
const newline = 'Line 1\nLine 2';
const tab = 'Column1\tColumn2';

/*
## Practice Exercises

1. Create a template literal that displays your name, age, and favorite color
2. Calculate and display: "The sum of 15 and 27 is [result]"
3. Create a multi-line string with your address
4. Take a string and convert it to uppercase, then check if it includes a word

## Key Takeaways

- Use template literals (backticks) for string interpolation
- Template literals make code more readable than concatenation
- You can embed any expression inside `${}`
- Strings have many useful methods for manipulation
- Strings are immutable (methods return new strings, don't modify original)

---

**Next:** 04-conditionals.js
*/
