import readlineSync from 'readline-sync';

const mainLogic = (game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const [gameRule] = game();
  console.log(gameRule);

  let roundCount = 0;
  for (; roundCount < 3;) {
    const [, [question, rightAnswer]] = game();
    const playersQuestion = readlineSync.question(`Question: ${question}
Your answer: `);
    const playersAnswer = `'${playersQuestion}'`;
    if (rightAnswer === playersAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`${playersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default mainLogic;
