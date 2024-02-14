import readlineSync from 'readline-sync';

// const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   const playerName = readlineSync.question('May I have your name? ');
//   const greetingSentence = `Hello, ${playerName}!`;
//   console.log(greetingSentence);
//   const getName = () => {
//     return playerName;
//   };
//   return getName;
// };
// const playerName = greeting();

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  const greetingSentence = `Hello, ${playerName}!`;
  console.log(greetingSentence);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const randomNumer = Math.floor(Math.random() * 100);
    const playersAnswer = readlineSync.question(`Question: ${randomNumer}
Your answer: `);
    const rightAnswer = randomNumer % 2 === 0 ? 'yes' : 'no';

    if (rightAnswer === playersAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      const lastSentenceFalse = console.log(`Let's try again, ${playerName}!`);
      return lastSentenceFalse;
    }
  }
  const lastSentenceTrue = console.log(`Congratulations, ${playerName}!`);
  return lastSentenceTrue;
};
export default brainEven;
