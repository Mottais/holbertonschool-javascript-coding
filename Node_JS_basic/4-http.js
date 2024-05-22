const http = require('http');

// Créer un serveur HTTP
const app = http.createServer((req, res) => {
  // Définir le code de réponse et les en-têtes HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envoyer la réponse avec le message Hello Holberton School!
  res.end('Hello Holberton School!');
});

// Écouter le serveur HTTP sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporter le serveur pour une utilisation dans d'autres fichiers
module.exports = app;
