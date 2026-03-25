/*
# Conditionals

Conditionals allow your code to make decisions and execute different code based on conditions.

## if Statement
*/

const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}

/*
## if...else Statement
*/

const age = 18;

if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You cannot vote yet');
}

/*
## if...else if...else Chain
*/

const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Prints: Small

/*
**Important:** Only the first matching condition executes!

## Ternary Operator

A shorthand for simple if-else statements:
*/

// Syntax: condition ? valueIfTrue : valueIfFalse

const x = 1;
const result = (x === 1) ? true : false;
console.log(result); // true

// More practical example
const age2 = 20;
const canVote = age2 >= 18 ? 'Yes' : 'No';
console.log(canVote); // Yes

/*
### When to Use Ternary
*/

// Good use - simple assignment
const isLoggedIn = true;
const status = isLoggedIn ? 'Welcome' : 'Please log in';

// Bad use - too complex
// const message = score > 90 ? 'A' : score > 80 ? 'B' : score > 70 ? 'C' : 'F';
// Use if-else instead for this!

/*
## switch Statement

Good for checking one value against many possibilities:
*/

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  case 'salad':
    console.log('Healthy choice');
    break;
  default:
    console.log('Enjoy your meal');
}
// Prints: Healthy choice
 //Keeps going unless you stop it
/*
### The Importance of `break`
*/

const day = 2;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    // Missing break! Falls through to next case
  case 3:
    console.log('Wednesday');
    break;
}
// Prints: Tuesday
//         Wednesday

// Without `break`, execution continues to the next case!

/*
### Multiple Cases, Same Action
*/

const day2 = 'Saturday';

switch (day2) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Weekday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Invalid day');
}
// Prints: Weekend!
// If none of the cases runs defualt

/*
## Truthy and Falsy Values

JavaScript converts values to boolean in conditionals:

### Falsy Values (evaluate to false)
*/

// if (false) { }      // false
// if (0) { }          // 0
// if ('') { }         // empty string
// if (null) { }       // null
// if (undefined) { } // undefined
// if (NaN) { }        // NaN (Not a Number)

/*
### Truthy Values (everything else!)
*/

// if (true) { }       // true
// if (1) { }          // any non-zero number
// if ('hello') { }    // any non-empty string
// if ([]) { }         // arrays (even empty!)
// if ({}) { }         // objects (even empty!)

/*
### Practical Example
*/

const username = '';

if (username) {
  console.log(`Welcome, ${username}`);
} else {
  console.log('Please enter a username');
}
// Prints: Please enter a username

/*
## Combining Conditions
*/

const age3 = 25;
const hasLicense = true;

if (age3 >= 18 && hasLicense) {
  console.log('You can drive');
}

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('No work today!');
}

/*
## Practice Exercises

1. Write an if-else that checks if a number is positive, negative, or zero
2. Convert this to a ternary: `if (score >= 60) { result = 'Pass' } else { result = 'Fail' }`
3. Create a switch statement for days of the week
4. What's the output? `if ('0') { console.log('yes') } else { console.log('no') }`

## Key Takeaways

- Use `if-else` for most conditional logic
- Use ternary operator for simple true/false assignments
- Use `switch` when checking one value against many options
- Always include `break` in switch cases (unless you want fall-through)
- Remember truthy/falsy values - empty strings and 0 are falsy!
- Use `===` for comparisons, not `==`

---

**Next:** 05-functions.js
*/
