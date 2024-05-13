#!/usr/bin/node
/* imprime dans la console le contenu d'un fichier ou err si erreur */

const fs = require('fs');
const cheminDuFichier = process.argv[2];
fs.readFile(cheminDuFichier, 'utf8', callbackLectureFichier);

// Définition de la fonction de rappel
function callbackLectureFichier (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}
