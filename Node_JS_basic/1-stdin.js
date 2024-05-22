function useStdin() {
  process.stdin.on('data', (saisieClavier) => {
    process.stdout.write(`Your name is: ${saisieClavier.toString()}`);
    console.log('This important software is now closing');
    process.exit();
  });
}

module.exports = useStdin;
if (require.main === module) {
  console.log('Welcome to Holberton School, what is your name?');
  useStdin();
}
