// Import the required modules
const http = require('http');

// Define the port on which the server will listen
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a 200 status code and plain text content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send "Hello, World!" as the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
