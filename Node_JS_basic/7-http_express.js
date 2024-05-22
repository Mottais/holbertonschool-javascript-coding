const express = require('express');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = express();

// 'a' : Le premier argument est toujours l'objet de requête. (req).
// On peut accéder aux propriétés de la requête: a.body, a.params, a.query, etc.
// 'b' : Le deuxième argument est toujours l'objet de réponse (res).
// On peut envoyer des réponses au client : b.send(), b.json(), b.status(), etc.
// 'c' : Le troisième argument est toujours la fonction next.
// On peut appeler next() pour passer la requête au middleware suivant.
// Le Middleware de Gestion des Erreurs utilisent quatre paramètres
// exemple : app.use((err, req, res, next) => {...});
app.get('/', (a, b) => {
  b.send('Hello Holberton School!');
});
app.get('/students', (a, b) => {
  countStudents(path)
    .then((result) => {
      b.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      b.send(`This is the list of our students\n${error.message}`);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
