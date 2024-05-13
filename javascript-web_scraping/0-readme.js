#!/usr/bin/node
/* imprime dans la console le contenu d'un fichier ou erreur si fichier n'a pas pu être lu */

const fs = require('fs');
const cheminDuFichier = process.argv[2];
fs.readFile(cheminDuFichier, 'utf8', callbackLectureFichier);

// Définition de la fonction de rappel
function callbackLectureFichier (erreur, contenu) {
  if (erreur) {
    console.log(erreur);
  } else {
    console.log(contenu)
  }
}
