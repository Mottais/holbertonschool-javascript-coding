#!/usr/bin/node
// Retourne le code de statut de la réponse à une requête GET à une URL fournie

// Importer le module request
const request = require('request');

const url = process.argv[2];

// Faire une requête GET à l'URL fournie
request.get(url, (erreur, reponse) => {
  if (erreur) {
    console.log('code: 404');
  } else {
    console.log(`code: ${reponse.statusCode}`);
  }
});
