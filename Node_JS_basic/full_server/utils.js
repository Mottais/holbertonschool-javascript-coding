const fs = require('fs').promises;

// fonction pour créer un objet à partir des données
// clé = field et valeur = tableau de prénoms
function parseDataToObject(data) {
  const lines = data.split('\n');
  const result = {};

  // i= 1 pour ignorer la première ligne d'en-tête
  for (let i = 1; i < (lines.length - 1); i += 1) {
    // Je suppose que les champs existent et sont toujours dans le même ordre
    const [firstname, , , field] = lines[i].split(',');

    if (field) {
      // si la clé n'existe pas, je la crée
      if (!result[field]) { result[field] = []; }
      result[field].push(firstname);
    }
  }

  return result;
}

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const students = parseDataToObject(data);

      // Retourner le résultat pour un usage ultérieur
      return students;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
