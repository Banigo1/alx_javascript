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

const urlToRequest = 'https://intranet.alxswe.com/status'; // Replace with your desired URL
getRequestStatusCode(urlToRequest);
