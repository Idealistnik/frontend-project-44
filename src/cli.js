import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  const greetingSentence = `Hello, ${playerName}!`;
  console.log(greetingSentence);
  return playerName;
};
export default greeting;
