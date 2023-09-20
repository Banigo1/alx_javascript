const request = require('request');

let url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});
