import readlineSync from 'readline-sync';

import { playNod, rule } from './games/brain-gcd-code.js';

const mainLogic = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${rule}`);
  let i = 1;
  for (; i <= 3; i += 1) {
    const [question, correctAnswer] = playNod();
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (i >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default mainLogic;
