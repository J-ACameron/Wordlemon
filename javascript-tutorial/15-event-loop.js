/*
# The Event Loop

Understanding the event loop is crucial for mastering asynchronous JavaScript.

## JavaScript is Single-Threaded

JavaScript runs on a single thread, meaning it can only do one thing at a time. But it can handle asynchronous operations efficiently!

## The Call Stack

The call stack tracks function execution:
*/

function first() {
  console.log('First');
}

function second() {
  first();
  console.log('Second');
}

function third() {
  second();
  console.log('Third');
}

third();

/*
Call stack progression:
1. third() added
2. second() added
3. first() added
4. first() completes, removed
5. second() completes, removed
6. third() completes, removed

## Synchronous vs Asynchronous

### Synchronous (Blocking)
*/

console.log('Start');

// This blocks for 3 seconds
for (let i = 0; i < 3000000000; i++) {
  // Busy waiting
}

console.log('End');

/*
Output:
Start
(3 second pause)
End

### Asynchronous (Non-blocking)
*/

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 2000);

console.log('End');

/*
Output:
Start
End
(2 second pause)
Timeout

## How the Event Loop Works

JavaScript has several components:

1. **Call Stack** - Executes functions
2. **Web APIs** - Browser features (setTimeout, fetch, DOM events)
3. **Callback Queue** - Waiting callbacks
4. **Event Loop** - Moves callbacks from queue to stack

### Example Flow
*/

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');

/*
Output: 1, 3, 2

Why?
1. `console.log('1')` executes immediately
2. `setTimeout` is sent to Web API, callback goes to queue
3. `console.log('3')` executes immediately
4. Call stack is empty, event loop moves callback to stack
5. `console.log('2')` executes

## setTimeout and setInterval

### setTimeout

Execute once after a delay:
*/

const loginAlert = () => {
  console.log('Login');
};

setTimeout(loginAlert, 6000); // After 6 seconds

// Or with arrow function
setTimeout(() => {
  console.log('Login');
}, 6000);

/*
### setInterval

Execute repeatedly:
*/

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId); // Stop the interval
  }
}, 1000); // Every 1 second

/*
### Clearing Timers
*/

// setTimeout
const timeoutId = setTimeout(() => {
  console.log('This might not run');
}, 5000);

clearTimeout(timeoutId); // Cancel it

// setInterval
const intervalId2 = setInterval(() => {
  console.log('Repeating');
}, 1000);

clearInterval(intervalId2); // Stop it

/*
## Callback Queue vs Microtask Queue

There are actually two queues:

1. **Callback Queue (Task Queue)** - setTimeout, setInterval, DOM events
2. **Microtask Queue** - Promises, async/await

**Microtasks have priority!**
*/

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

/*
Output: 1, 4, 3, 2

Why?
- Synchronous code runs first: 1, 4
- Microtask queue (Promise) runs next: 3
- Callback queue (setTimeout) runs last: 2

## Visualizing the Event Loop
*/

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
}).then(() => {
  console.log('Promise 2');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');

/*
Output:
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2

Execution order:
1. Synchronous: Start, End
2. Microtasks: Promise 1, Promise 2
3. Tasks: Timeout 1, Timeout 2

## Common Pitfalls

### setTimeout is Not Guaranteed
*/

setTimeout(() => {
  console.log('This runs after AT LEAST 1 second');
}, 1000);

// If call stack is busy, it might take longer!

/*
### Blocking the Event Loop
*/

// BAD - blocks everything
setTimeout(() => {
  console.log('This will be delayed');
}, 100);

// Heavy computation blocks the event loop
for (let i = 0; i < 5000000000; i++) {
  // Blocking operation
}

/*
### setInterval Drift
*/

// setInterval doesn't account for execution time
let count2 = 0;
setInterval(() => {
  count2++;
  // If this takes 100ms, interval drifts
  // heavyComputation();
  console.log(count2);
}, 1000);

// Better: use setTimeout recursively
function schedule() {
  setTimeout(() => {
    // heavyComputation();
    schedule(); // Schedule next execution
  }, 1000);
}

/*
## Practical Examples

### Debouncing

Wait for user to stop typing:
*/

let timeoutId2;

function handleInput(event) {
  clearTimeout(timeoutId2);
  
  timeoutId2 = setTimeout(() => {
    console.log('User stopped typing:', event.target.value);
    // Make API call here
  }, 500);
}

// input.addEventListener('input', handleInput);

/*
### Throttling

Limit function execution rate:
*/

let lastRun = 0;

function handleScroll() {
  const now = Date.now();
  
  if (now - lastRun >= 100) {
    console.log('Scroll handler executed');
    lastRun = now;
  }
}

// window.addEventListener('scroll', handleScroll);

/*
## Key Concepts

1. **JavaScript is single-threaded** - One thing at a time
2. **Event loop** - Manages async operations
3. **Call stack** - Tracks function execution
4. **Callback queue** - Holds callbacks from Web APIs
5. **Microtask queue** - Holds Promise callbacks (higher priority)
6. **Non-blocking** - Async operations don't block the main thread

## Practice Exercises

1. Predict the output order of mixed sync/async code
2. Create a countdown timer using setInterval
3. Implement a debounce function
4. Explain why setTimeout(fn, 0) doesn't execute immediately
5. Compare callback queue vs microtask queue behavior

## Key Takeaways

- JavaScript handles async operations via the event loop
- Synchronous code runs first, then microtasks, then tasks
- Promises (microtasks) have priority over setTimeout (tasks)
- setTimeout delay is minimum, not guaranteed
- Don't block the event loop with heavy computations
- Understanding the event loop is essential for async programming

---

**Next:** 16-callbacks.js
*/
