// Afficher le message de bienvenue initial
console.log('Welcome to Holberton School, what is your name?');

// Définir l'encodage pour stdin afin de lire les chaînes de caractères
process.stdin.setEncoding('utf8');

// Gérer l'entrée utilisateur depuis stdin
process.stdin.on('data', (data) => {
  // Supprimer le caractère de nouvelle ligne à la fin de l'entrée
  const name = data.trim();

  // Afficher le nom de l'utilisateur
  console.log(`Your name is: ${name}`);

  // Quitter le processus proprement
  process.exit(0);
});

// Gérer la sortie du processus et afficher le message de fermeture
process.on('exit', () => {
  console.log('This important software is now closing');
});

// Assurer la gestion des signaux pour terminer proprement
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
