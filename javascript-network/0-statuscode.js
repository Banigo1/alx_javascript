const request = require('request');

function getRequestStatusCode(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      const statusCode = response.statusCode === undefined ? 'N/A' : response.statusCode;
      const formattedStatusCode = `code: ${statusCode}`.padEnd(10);
      console.log(formattedStatusCode);
    }
  });
}

const urlToRequest = 'https://example.com'; // Replace with your desired URL
getRequestStatusCode(urlToRequest);
