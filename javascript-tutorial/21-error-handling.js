/*
# Error Handling

Proper error handling makes your code more robust and easier to debug.

## Try/Catch

Handle errors gracefully:
*/

try {
  // Code that might throw an error
  const data = JSON.parse('invalid json');
} catch (error) {
  console.error('Error:', error.message);
}

/*
## The Error Object
*/

try {
  throw new Error('Something went wrong!');
} catch (error) {
  console.log(error.name);    // 'Error'
  console.log(error.message); // 'Something went wrong!'
  console.log(error.stack);   // Stack trace
}

/*
## Finally Block

Runs regardless of success or failure:
*/

let file;

try {
  // file = openFile('data.txt');
  // processFile(file);
} catch (error) {
  console.error('Error processing file:', error);
} finally {
  // Always runs - cleanup code
  if (file) {
    // closeFile(file);
  }
}

/*
## Throwing Errors
*/

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (error) {
  console.error(error.message); // Cannot divide by zero
}

/*
## Custom Error Types
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age cannot be negative');
  }
  if (age > 150) {
    throw new ValidationError('Age seems unrealistic');
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation failed:', error.message);
  }
}

/*
## Async Error Handling

### With Promises
*/

/*
fetchData()
  .then((data) => processData(data))
  .catch((error) => {
    console.error('Error:', error);
  });
*/

/*
### With Async/Await
*/

async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

/*
## Best Practices

1. Always handle errors
2. Provide meaningful error messages
3. Use specific error types
4. Clean up resources in finally
5. Don't catch errors you can't handle

## Key Takeaways

- Use try/catch for error handling
- finally block always executes
- Throw errors with meaningful messages
- Create custom error types for specific cases
- Handle async errors with catch or try/catch

---

**Next:** 22-advanced-arrays.js
*/
