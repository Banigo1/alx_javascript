// Import the 'request' module
const request = require('request');

// Function to make a GET request and display the status code
function getRequestStatusCode(url){
  request.get(url, (error, response, body) =>
  {
    if (error){
      console.error('Error:', error);
    }
    else {
      console.log('Status code:', response.statusCode);
    }
  });
}

// Example usage
const urlToRequest = 'https://example.com'; // Replace with your desired URL
getRequestStatusCode(urlToRequest);
