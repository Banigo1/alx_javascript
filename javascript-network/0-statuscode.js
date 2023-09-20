const request = require('request');

let url = process.argv[2];

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('code:', response && response.statusCode);
  }
});
