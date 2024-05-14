#!/usr/bin/node
/* script qui calcule le nombre de tâches accomplies par l'identifiant de l'utilisateur. */
const request = require('request');

const url = process.argv[2];

request(url, { json: true }, (erreur, response) => {
  if (erreur) {
    console.error(erreur);
    return;
  }
  const completedByUser = {};
  for (const task in response.body) {
    if (response.body[task].completed === true) {
      completedByUser[response.body[task].userId] = (completedByUser[response.body[task].userId] || 0) + 1;
    }
  }
  console.log(completedByUser);
});
