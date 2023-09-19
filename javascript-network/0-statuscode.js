const axios = require('axios');

function getStatus(url) {
  axios
    .get(url)
    .then(response => {
      console.log('code:', response.status);
    })
    .catch(error => {
      console.log('An error occurred:', error.message);
    });
}

const url = process.argv[2];
if (!url) {
  console.log('Please provide a URL as an argument.');
} else {
  getStatus(url);
}
