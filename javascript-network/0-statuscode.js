const request = require('request');

function getRequestStatusCode(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`code: ${response.statusCode}`);
    }
  });
}

const urlToRequest = 'https://swapi-api.alx-tools.com'; // Replace with your desired URL
getRequestStatusCode(urlToRequest);
