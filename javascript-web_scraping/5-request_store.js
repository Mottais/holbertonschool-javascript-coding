#!/usr/bin/node
/* Script qui récupère le contenu d'une page web et le stocke dans un fichier. */

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request.get(url, (erreur, reponse) => {
  if (erreur) {
    console.error(erreur);
    return;
  }
  fs.writeFile(path, reponse.body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
});
