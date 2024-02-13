import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  const greetingSentence = `Hello, ${name}!`;
  console.log(greetingSentence);
};
export default greeting;
