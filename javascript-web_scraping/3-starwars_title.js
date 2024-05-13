#!/usr/bin/node
/* Imprime le titre d'un film Star Wars dont le numéro d'épisode correspond à un entier passé en argument. */

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films';

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`${error}`);
  } else {
    data = JSON.parse(body);
    const n = process.argv[2] - 1;
    console.log(data.results[n].title);
  }
});
