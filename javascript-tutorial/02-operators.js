/*
# Operators

## Arithmetic Operators

Basic math operations:
*/

5 + 5   // 10 - Addition
10 - 5  // 5  - Subtraction
5 * 10  // 50 - Multiplication
10 / 5  // 2  - Division
10 % 5  // 0  - Modulo (remainder)

/*
### Modulo Operator (%)

The modulo returns the remainder after division:
*/

10 % 3  // 1 (10 divided by 3 is 3 remainder 1)
15 % 4  // 3 (15 divided by 4 is 3 remainder 3)
20 % 5  // 0 (20 divided by 5 is 4 remainder 0)

/*
## Assignment Operators
*/

let number = 100;

// Long form
number = number + 10;

// Shorthand (same result)
number += 10;

console.log(number); // 120

/*
### All Assignment Shortcuts
*/

let x = 10;

x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2

/*
## Comparison Operators
*/

1 > 3      // false
3 > 1      // true
250 >= 250 // true (greater than or equal)
100 <= 99  // false (less than or equal)

/*
## Equality Operators

### `==` vs `===` (IMPORTANT!)
*/

// == checks value only (with type coercion)
0 == false        // true
1 == "1"          // true
'0' == false      // true

// === checks value AND type (strict equality)
0 === false       // false (number vs boolean)
1 === "1"         // false (number vs string)
'0' === false     // false

// More examples
null == undefined   // true
null === undefined  // false

/*
**Best Practice:** Always use `===` and `!==` for equality checks!

### Inequality
*/

1 !== 2    // true (not equal, strict)
1 != "1"   // false (not equal, loose)

/*
## Logical Operators

### OR Operator (`||`)

Returns true if at least one condition is true:
*/

true || false;        // true
10 > 5 || 10 > 20;    // true (first condition is true)
false || false;       // false
10 > 100 || 10 > 20;  // false (both conditions false)

/*
### AND Operator (`&&`)

Returns true only if all conditions are true:
*/

true && true;         // true
1 > 2 && 2 > 1;       // false (first condition is false)
true && false;        // false
4 === 4 && 3 > 1;     // true (both conditions true)

/*
### NOT Operator (`!`)

Inverts a boolean value:
*/

let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue); // false

!true   // false
!false  // true

/*
## Nullish Coalescing Operator (`??`)

Returns the right side when left side is `null` or `undefined`:
*/

null ?? 'I win';           // 'I win'
undefined ?? 'Me too';     // 'Me too'

// But NOT for other falsy values!
false ?? 'I lose'          // false
0 ?? 'I lose again'        // 0
'' ?? 'Damn it'            // ''

/*
**Use case:** Providing default values only for null/undefined, not for 0 or empty strings.

## Increment and Decrement
*/

let count = 0;

count++;  // count = count + 1
console.log(count); // 1

count--;  // count = count - 1
console.log(count); // 0

/*
## Practice Exercises

1. What's the difference between `==` and `===`?
2. Calculate: `17 % 5`
3. What does `null ?? 'default'` return?
4. What does `0 ?? 'default'` return?
5. Evaluate: `true && false || true`

## Key Takeaways

- Use `===` instead of `==` for comparisons
- `&&` requires all conditions to be true
- `||` requires at least one condition to be true
- `??` is useful for default values with null/undefined
- Assignment shortcuts (`+=`, `-=`, etc.) make code cleaner

---

**Next:** 03-strings-and-templates.js
*/
