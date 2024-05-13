#!/usr/bin/node
// send request and get status
const request = require('request');

const url = process.argv[2];

request(url, (erreur, reponse) => {
  if (erreur) {
    console.error(`Error making request: ${erreur.message}`);
  } else {
    console.log(`code: ${reponse.statusCode}`);
  }
});
