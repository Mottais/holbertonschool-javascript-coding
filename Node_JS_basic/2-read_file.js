const fs = require('fs');

// fonction pour créer un objet à partir des données
// clé = fied et valeur = tableau de prénoms
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
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = parseDataToObject(data);

    // Calcul du nombre total d'étudiants
    let totalStudents = 0;
    Object.keys(students).forEach((key) => { totalStudents += students[key].length; });

    // Affichage du nombre total d'étudiants
    console.log(`Number of students: ${totalStudents}`);

    // Affichage des informations pour chaque clé dans l'objet students
    Object.keys(students).forEach((key) => {
      const count = students[key].length;
      const list = students[key].join(', ');
      console.log(`Number of students in ${key}: ${count}. List: ${list}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
