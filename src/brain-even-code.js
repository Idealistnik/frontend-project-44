import readlineSync from 'readline-sync';

const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer 'yes' if the number is even, otherwise answer 'no'.`);
  let i = 1;
  for (;i <= 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    } else if (randomNumber % 2 !== 0 && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default playBrainEven;
