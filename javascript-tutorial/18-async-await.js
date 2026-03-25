/*
# Async/Await

Async/await makes asynchronous code look and behave like synchronous code.

## What is Async/Await?

Async/await is syntactic sugar built on top of Promises, making async code easier to read and write.

## The `async` Keyword

Declares an asynchronous function that returns a Promise:
*/

async function myFunction() {
  return 'Hello';
}

// Equivalent to:
function myFunction2() {
  return Promise.resolve('Hello');
}

// Usage
myFunction().then((result) => {
  console.log(result); // Hello
});

/*
## The `await` Keyword

Pauses execution until a Promise resolves:
*/

function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function msg() {
  const message = await helloWorld();
  console.log('Message:', message);
}

msg();
// (2 second pause)
// Message: Hello World!

/*
**Important:** `await` can only be used inside `async` functions!

## Async Function Expressions
*/

// Async function expression
const msg2 = async function() {
  const message = await helloWorld();
  console.log('Message:', message);
};

// Async arrow function
const msg3 = async () => {
  const message = await helloWorld();
  console.log('Message:', message);
};

/*
## Error Handling with Try/Catch
*/

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
### Without Try/Catch
*/

async function fetchData2() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

// Handle error when calling
fetchData2()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/*
## Sequential vs Parallel Execution

### Sequential (One After Another)
*/

async function sequential() {
  const user = await helloWorld();      // Wait
  const posts = await helloWorld(); // Then wait
  const comments = await helloWorld(); // Then wait
  
  return comments;
}

// Total time: sum of all operations

/*
### Parallel (All at Once)
*/

async function parallel() {
  // Start all operations at once
  const userPromise = helloWorld();
  const postsPromise = helloWorld();
  const commentsPromise = helloWorld();
  
  // Wait for all to complete
  const user = await userPromise;
  const posts = await postsPromise;
  const comments = await commentsPromise;
  
  return { user, posts, comments };
}

// Total time: longest operation

/*
### Using Promise.all()
*/

async function parallelWithAll() {
  const [user, posts, comments] = await Promise.all([
    helloWorld(),
    helloWorld(),
    helloWorld()
  ]);
  
  return { user, posts, comments };
}

/*
## Practical Examples

### Fetching Data
*/

async function getUser(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Usage
async function main() {
  const user = await getUser(1);
  console.log(user);
}

/*
### Chaining Operations
*/

async function getUserPosts(userId) {
  try {
    const user = await helloWorld();
    const posts = await helloWorld();
    const postsWithComments = await Promise.all(
      [1, 2, 3].map(post => helloWorld())
    );
    
    return postsWithComments;
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
### Multiple Async Operations
*/

async function getData() {
  try {
    // Sequential - when order matters
    const user = await helloWorld();
    const posts = await helloWorld();
    
    // Parallel - when independent
    const [likes, comments] = await Promise.all([
      helloWorld(),
      helloWorld()
    ]);
    
    return { user, posts, likes, comments };
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
## Async/Await with Loops

### Sequential Loop
*/

async function processUsers(userIds) {
  for (const id of userIds) {
    const user = await helloWorld();
    console.log(user);
    // Waits for each user before continuing
  }
}

/*
### Parallel Loop
*/

async function processUsersParallel(userIds) {
  const promises = userIds.map(id => helloWorld());
  const users = await Promise.all(promises);
  
  users.forEach(user => console.log(user));
}

/*
## Error Handling Patterns

### Try/Catch for Each Operation
*/

async function getData2() {
  let user, posts;
  
  try {
    user = await helloWorld();
  } catch (error) {
    console.error('User fetch failed:', error);
    return;
  }
  
  try {
    posts = await helloWorld();
  } catch (error) {
    console.error('Posts fetch failed:', error);
    posts = []; // Use default
  }
  
  return { user, posts };
}

/*
### Finally Block
*/

async function fetchData3() {
  let loading = true;
  
  try {
    const data = await fetch('https://api.example.com/data');
    return data.json();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loading = false;
    console.log('Fetch complete');
  }
}

/*
## Async/Await vs Promises

### Promise Chain
*/

/*
fetchUser(1)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));
*/

/*
### Async/Await
*/

/*
async function getData() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error(error);
  }
}
*/

/*
Async/await is generally more readable!

## Common Mistakes

### Forgetting await
*/

// BAD - returns Promise, not value
async function getData4() {
  const data = helloWorld(); // Missing await!
  console.log(data); // Promise { <pending> }
}

// GOOD
async function getData5() {
  const data = await helloWorld();
  console.log(data); // Actual data
}

/*
### Using await in non-async function
*/

// BAD - syntax error
// function getData() {
//   const data = await helloWorld(); // Error!
// }

// GOOD
async function getData6() {
  const data = await helloWorld();
}

/*
### Sequential when parallel is better
*/

// BAD - takes 6 seconds
async function slow() {
  const user1 = await helloWorld();    // 2 seconds
  const user2 = await helloWorld();    // 2 seconds
  const user3 = await helloWorld();    // 2 seconds
}

// GOOD - takes 2 seconds
async function fast() {
  const [user1, user2, user3] = await Promise.all([
    helloWorld(),
    helloWorld(),
    helloWorld()
  ]);
}

/*
## Top-Level Await

In modules, you can use await at the top level:

// module.js
const data = await fetchData();
export default data;

## Practice Exercises

1. Convert a Promise chain to async/await
2. Fetch multiple resources in parallel using async/await
3. Implement error handling with try/catch
4. Create an async function that processes an array sequentially
5. Refactor callback hell to async/await

## Key Takeaways

- `async` functions always return Promises
- `await` pauses execution until Promise resolves
- Use try/catch for error handling
- Async/await makes async code look synchronous
- Use Promise.all() for parallel operations
- Sequential await is slower than parallel
- Async/await is built on Promises
- More readable than Promise chains

---

**Next:** 19-fetch-api.js
*/
