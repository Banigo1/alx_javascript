const request = require('request');

let movieId = process.argv[2];

let url = `https://swapi.dev/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let film = JSON.parse(body);
    film.characters.forEach(function(characterUrl) {
      request(characterUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          let character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
