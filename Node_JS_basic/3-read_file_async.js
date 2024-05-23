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

      // Calcul du nombre total d'étudiants
      let totalStudents = 0;
      Object.keys(students).forEach((key) => { totalStudents += students[key].length; });

      // Préparation du résultat
      let output = `Number of students: ${totalStudents}\n`;

      // Préparation des informations pour chaque clé dans l'objet students
      Object.keys(students).forEach((key) => {
        const count = students[key].length;
        const list = students[key].join(', ');
        output += `Number of students in ${key}: ${count}. List: ${list}\n`;
      });

      // Affichage du résultat
      console.log(output.trim());

      // Retourner le résultat pour un usage ultérieur
      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database\n    at ReadFileContext.callback (/root/holbertonschool-javascript-coding/Node_JS_basic/3-read_file_async.js:6:27)');
    });
}

module.exports = countStudents;
