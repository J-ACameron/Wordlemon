/*
# Promises

Promises provide a cleaner way to handle asynchronous operations than callbacks.

## What is a Promise?

A Promise represents a value that may be available now, later, or never.
*/

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;
  
  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

/*
## Promise States

A Promise has three states:

1. **Pending** - Initial state, operation not complete
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed
*/

const promise2 = new Promise((resolve, reject) => {
  const res = true;
  
  if (res) {
    resolve('Resolved!'); // Fulfilled
  } else {
    reject(Error('Error')); // Rejected
  }
});

/*
## Creating a Promise
*/

const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!');
};

const promise3 = new Promise(executorFn);

/*
The executor function runs immediately when the Promise is created.

## `.then()` Method

Handle fulfilled promises:
*/

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Result');
  }, 200);
});

promise4.then((result) => {
  console.log(result); // Result
});

/*
With error handler:
*/

promise4.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
);

/*
## `.catch()` Method

Handle rejected promises:
*/

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise rejected!'));
  }, 1000);
});

promise5
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Promise rejected!
  });

/*
## Chaining Promises

Avoid callback hell by chaining:
*/

const promise6 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('*');
  }, 1000);
});

const twoStars = (star) => {
  return star + star;
};

const oneDot = (star) => {
  return star + '.';
};

const print = (val) => {
  console.log(val);
};

// Chain them together
promise6
  .then(twoStars)   // '**'
  .then(oneDot)     // '**.'
  .then(print);     // Logs: **.

/*
### Returning Promises in Chains
*/

const promise7 = new Promise((resolve) => {
  setTimeout(() => resolve('Alan'), 100);
});

promise7
  .then((res) => {
    if (res === 'Alan') {
      return Promise.resolve('Hey Alan!');
    } else {
      return Promise.reject('Who are you?');
    }
  })
  .then((res) => {
    console.log(res); // Hey Alan!
  })
  .catch((err) => {
    console.error(err);
  });

/*
## Promise.all()

Wait for multiple promises to complete:
*/

const promise8 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 300);
});

const promise9 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 200);
});

Promise.all([promise8, promise9]).then((results) => {
  console.log(results[0]); // 3
  console.log(results[1]); // 2
  console.log(results);    // [3, 2]
});

/*
**Important:** If any promise rejects, `Promise.all()` rejects immediately:
*/

const promise10 = Promise.resolve(1);
const promise11 = Promise.reject('Error!');
const promise12 = Promise.resolve(3);

Promise.all([promise10, promise11, promise12])
  .then((results) => {
    console.log(results); // Never runs
  })
  .catch((error) => {
    console.error(error); // Error!
  });

/*
## Promise.race()

Returns when first promise settles:
*/

const promise13 = new Promise((resolve) => {
  setTimeout(() => resolve('First'), 500);
});

const promise14 = new Promise((resolve) => {
  setTimeout(() => resolve('Second'), 100);
});

Promise.race([promise13, promise14]).then((result) => {
  console.log(result); // Second (finishes first)
});

/*
## Promise.allSettled()

Wait for all promises to settle (fulfilled or rejected):
*/

const promise15 = Promise.resolve(1);
const promise16 = Promise.reject('Error!');
const promise17 = Promise.resolve(3);

Promise.allSettled([promise15, promise16, promise17])
  .then((results) => {
    console.log(results);
    /*
    [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'Error!' },
      { status: 'fulfilled', value: 3 }
    ]
    */
  });

/*
## Promise.any()

Returns when first promise fulfills:
*/

const promise18 = Promise.reject('Error 1');
const promise19 = new Promise((resolve) => {
  setTimeout(() => resolve('Success!'), 100);
});
const promise20 = Promise.reject('Error 2');

Promise.any([promise18, promise19, promise20])
  .then((result) => {
    console.log(result); // Success!
  });

/*
## Practical Example: Fake HTTP Request
*/

const mock = (success, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, data: {} });
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

// Usage
mock(true, 1000)
  .then((response) => {
    console.log('Success:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

/*
## Error Handling

### Single catch for chain
*/

/*
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((error) => {
    // Catches errors from any step
    console.error('Error:', error);
  });
*/

/*
### Multiple catches
*/

/*
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .catch((error) => {
    console.error('User fetch failed:', error);
    return []; // Recover with empty array
  })
  .then((posts) => {
    console.log('Posts:', posts);
  });
*/

/*
## Promise.resolve() and Promise.reject()

Create immediately resolved/rejected promises:
*/

// Resolved promise
const resolved = Promise.resolve(42);
resolved.then((value) => console.log(value)); // 42

// Rejected promise
const rejected = Promise.reject('Error!');
rejected.catch((error) => console.error(error)); // Error!

/*
## Converting Callbacks to Promises
*/

// Callback version
function fetchData(callback) {
  setTimeout(() => {
    callback(null, 'Data');
  }, 1000);
}

// Promise version
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data');
    }, 1000);
  });
}

// Usage
fetchDataPromise()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/*
## Common Patterns

### Sequential Execution
*/

/*
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .then((posts) => fetchComments(posts[0].id))
  .then((comments) => console.log(comments));
*/

/*
### Parallel Execution
*/

/*
Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
]).then((users) => {
  console.log('All users:', users);
});
*/

/*
## Practice Exercises

1. Create a Promise that resolves after 2 seconds
2. Chain three `.then()` calls to transform data
3. Use `Promise.all()` to wait for multiple operations
4. Handle errors in a Promise chain
5. Convert a callback-based function to return a Promise

## Key Takeaways

- Promises represent future values
- Three states: pending, fulfilled, rejected
- Use `.then()` for success, `.catch()` for errors
- Chain promises to avoid callback hell
- `Promise.all()` waits for all promises
- `Promise.race()` returns first settled promise
- Promises are the foundation for async/await
- Always handle errors with `.catch()`

---

**Next:** 18-async-await.js
*/
