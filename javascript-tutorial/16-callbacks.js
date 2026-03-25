/*
# Callbacks

Callbacks are functions passed as arguments to other functions.

## What is a Callback?

A callback is a function that gets executed after another function completes:
*/

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Sarah', sayGoodbye);
// Hello, Sarah!
// Goodbye!

/*
## Why Use Callbacks?

Callbacks handle asynchronous operations:
*/

console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');

/*
Output:
Start
End
(2 second pause)
This runs after 2 seconds

## Callback Functions

### Named Callback
*/

function processData(data, callback) {
  const result = data * 2;
  callback(result);
}

function handleResult(result) {
  console.log(`Result: ${result}`);
}

processData(5, handleResult); // Result: 10

/*
### Anonymous Callback
*/

processData(5, function(result) {
  console.log(`Result: ${result}`);
});

/*
### Arrow Function Callback
*/

processData(5, (result) => {
  console.log(`Result: ${result}`);
});

/*
## Callbacks with Parameters
*/

const isEven = (n) => {
  return n % 2 === 0;
};

function printMsg(evenFunc, num) {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}`);
}

printMsg(isEven, 4);
// 4 is an even number: true

/*
## Array Methods Use Callbacks
*/

const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num) => {
  console.log(num * 2);
});

// map
const doubled = numbers.map((num) => {
  return num * 2;
});

// filter
const evens = numbers.filter((num) => {
  return num % 2 === 0;
});

/*
## Asynchronous Callbacks

### setTimeout
*/

console.log('Before timeout');

setTimeout(() => {
  console.log('Inside timeout');
}, 1000);

console.log('After timeout');

/*
Output:
Before timeout
After timeout
(1 second pause)
Inside timeout

### Simulating Async Operations
*/

function fetchUser(userId, callback) {
  console.log('Fetching user...');
  
  setTimeout(() => {
    const user = { id: userId, name: 'Sarah' };
    callback(user);
  }, 1000);
}

fetchUser(1, (user) => {
  console.log('User:', user);
});

/*
Output:
Fetching user...
(1 second pause)
User: { id: 1, name: 'Sarah' }

## Error-First Callbacks

Node.js convention - first parameter is error:
*/

function readFile(filename, callback) {
  setTimeout(() => {
    const error = null; // or new Error('File not found')
    const data = 'File contents';
    
    callback(error, data);
  }, 1000);
}

readFile('data.txt', (error, data) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Data:', data);
});

/*
## Callback Hell (Pyramid of Doom)

Multiple nested callbacks become hard to read:
*/

// BAD - Callback hell
/*
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      getAuthor(comments[0].authorId, (author) => {
        console.log(author);
        // This is getting messy!
      });
    });
  });
});
*/

/*
### Problems with Callback Hell

1. Hard to read and understand
2. Difficult to handle errors
3. Hard to maintain
4. Difficult to debug

## Avoiding Callback Hell

### 1. Named Functions
*/

/*
function handleUser(user) {
  getPosts(user.id, handlePosts);
}

function handlePosts(posts) {
  getComments(posts[0].id, handleComments);
}

function handleComments(comments) {
  console.log(comments);
}

getUser(1, handleUser);
*/

/*
### 2. Promises (Better Solution)
*/

/*
getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));
*/

/*
### 3. Async/Await (Best Solution)
*/

/*
async function getData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}
*/

/*
## Practical Examples

### Event Listeners
*/

// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

/*
### Array Processing
*/

const users = [
  { name: 'Tom', age: 25 },
  { name: 'Sarah', age: 30 },
  { name: 'Bob', age: 20 }
];

// Filter with callback
const adults = users.filter((user) => {
  return user.age >= 25;
});

// Map with callback
const names = users.map((user) => {
  return user.name;
});

/*
### Custom Callback Function
*/

function calculate(a, b, operation) {
  return operation(a, b);
}

const sum = calculate(5, 3, (x, y) => x + y);
const product = calculate(5, 3, (x, y) => x * y);

console.log(sum);     // 8
console.log(product); // 15

/*
## Callback Best Practices

1. **Keep callbacks simple** - Extract complex logic
2. **Handle errors** - Always check for errors
3. **Avoid deep nesting** - Use Promises or async/await
4. **Use arrow functions** - More concise
5. **Name your callbacks** - Improves readability

## Practice Exercises

1. Create a function that takes a callback and executes it after a delay
2. Write a function that filters an array using a callback
3. Implement error-first callback pattern
4. Refactor nested callbacks into named functions
5. Create a custom forEach function that accepts a callback

## Key Takeaways

- Callbacks are functions passed to other functions
- Used extensively for async operations
- Array methods (map, filter, forEach) use callbacks
- Callback hell makes code hard to read
- Error-first callbacks are Node.js convention
- Promises and async/await solve callback hell
- Callbacks are fundamental to JavaScript

---

**Next:** 17-promises.js
*/
