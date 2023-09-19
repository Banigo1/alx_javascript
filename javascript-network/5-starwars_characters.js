#!/usr/bin/node
const request = require('request');

function fetchMovieCharacters(movieId) {
  const apiUrl = `https://swapi.dev/api/films/${movieId}/`;
  
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        const characters = movieData.characters;

        console.log(`Characters in Star Wars Episode ${movieData.episode_id}: ${movieData.title}`);
        console.log('---------------------------');

        characters.forEach((characterUrl) => {
          request.get(characterUrl, (charError, charResponse, charBody) => {
            if (charError) {
              console.error('Error:', charError);
            } else {
              if (charResponse.statusCode === 200) {
                const characterData = JSON.parse(charBody);
                console.log(characterData.name);
              }
            }
          });
        });
      } else {
        console.error('Failed to fetch movie data. Status code:', response.statusCode);
      }
    }
  });
}

const movieId = 3; // Replace with the desired movie ID
fetchMovieCharacters(movieId);
