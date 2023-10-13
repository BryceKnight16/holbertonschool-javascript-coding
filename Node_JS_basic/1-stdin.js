process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput !== null) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
