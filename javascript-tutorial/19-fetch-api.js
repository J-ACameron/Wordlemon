/*
# Fetch API and HTTP Requests

The Fetch API provides a modern way to make HTTP requests.

## What is Fetch?

Fetch is a browser API for making network requests. It returns Promises, making it perfect for async/await.

## Basic GET Request
*/

fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

/*
## With Async/Await
*/

async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
## Response Object

The fetch response has useful properties and methods:
*/

async function checkResponse() {
  const response = await fetch('https://api.example.com/data');
  
  console.log(response.ok);        // true if status 200-299
  console.log(response.status);    // 200, 404, 500, etc.
  console.log(response.statusText); // 'OK', 'Not Found', etc.
  console.log(response.headers);   // Response headers
  
  const data = await response.json(); // Parse JSON
}

/*
## Checking Response Status
*/

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}

/*
## Response Methods
*/

// Parse as JSON
const data = await response.json();

// Parse as text
const text = await response.text();

// Parse as blob (for images, files)
const blob = await response.blob();

// Parse as FormData
const formData = await response.formData();

/*
## POST Request
*/

async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
createUser({ name: 'Tom', email: 'tom@example.com' });

/*
## PUT Request (Update)
*/

async function updateUser(userId, updates) {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  });
  
  return response.json();
}

/*
## DELETE Request
*/

async function deleteUser(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: 'DELETE'
  });
  
  if (response.ok) {
    console.log('User deleted');
  }
}

/*
## Request Headers
*/

async function fetchWithHeaders() {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here',
      'Accept': 'application/json'
    }
  });
  
  return response.json();
}

/*
## Query Parameters
*/

// Build URL with query params
const params = new URLSearchParams({
  search: 'javascript',
  limit: 10,
  page: 1
});

const url = `https://api.example.com/search?${params}`;

async function search() {
  const response = await fetch(url);
  return response.json();
}

/*
## Error Handling
*/

async function robustFetch(url) {
  try {
    const response = await fetch(url);
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    // Network error or parsing error
    if (error.name === 'TypeError') {
      console.error('Network error:', error);
    } else {
      console.error('Error:', error);
    }
    throw error;
  }
}

/*
## Timeout

Fetch doesn't have built-in timeout, but you can add one:
*/

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request timed out');
    }
    throw error;
  }
}

/*
## Abort Requests
*/

const controller = new AbortController();

fetch('https://api.example.com/data', {
  signal: controller.signal
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    }
  });

// Cancel the request
controller.abort();

/*
## Practical Example: Complete API Client
*/

class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
  
  get(endpoint) {
    return this.request(endpoint);
  }
  
  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
}

// Usage
const api = new APIClient('https://api.example.com');

async function example() {
  const users = await api.get('/users');
  const newUser = await api.post('/users', { name: 'Tom' });
  await api.delete(`/users/${newUser.id}`);
}

/*
## Handling Different Response Types
*/

async function handleResponse(url) {
  const response = await fetch(url);
  
  const contentType = response.headers.get('content-type');
  
  if (contentType.includes('application/json')) {
    return await response.json();
  } else if (contentType.includes('text/html')) {
    return await response.text();
  } else if (contentType.includes('image/')) {
    return await response.blob();
  } else {
    throw new Error('Unsupported content type');
  }
}

/*
## Uploading Files
*/

async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', file.name);
  
  const response = await fetch('https://api.example.com/upload', {
    method: 'POST',
    body: formData
    // Don't set Content-Type header - browser sets it automatically
  });
  
  return response.json();
}

/*
## CORS (Cross-Origin Resource Sharing)

CORS errors happen when API doesn't allow your origin
You can't fix this from client side - server must allow it

Some APIs require credentials:
*/

fetch('https://api.example.com/data', {
  credentials: 'include' // Send cookies
});

/*
## Practice Exercises

1. Fetch data from a public API and display it
2. Create a function that POSTs data to an API
3. Implement error handling for network failures
4. Build a simple API client class
5. Add request timeout functionality

## Key Takeaways

- Fetch returns Promises - perfect for async/await
- Always check `response.ok` before parsing
- Use appropriate HTTP methods (GET, POST, PUT, DELETE)
- Set headers for authentication and content type
- Handle errors for both network and HTTP failures
- Fetch doesn't reject on HTTP errors (404, 500, etc.)
- Use AbortController to cancel requests
- Parse response based on content type

---

**Next:** 20-this-keyword.js
*/
