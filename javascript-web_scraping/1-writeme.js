#!/usr/bin/node
/* Créé un fichier avec le nom et le contenu passés en argument */

const fs = require('fs');

const path = process.argv[2];
const string = process.argv[3];

fs.writeFile(path, string, 'utf-8', (erreur) => {
  if (erreur) { console.error(erreur); }
});
