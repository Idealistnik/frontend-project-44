import readlineSync from 'readline-sync';

const mainLogic = (gameCondition, gameType) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  const greetingSentence = `Hello, ${playerName}!`;
  console.log(greetingSentence);
  console.log(gameCondition);

  let i = 0;
  for (; i < 3;) {
    const answers = gameType();
    const [playersAnswer] = answers;
    const [, rightAnswer] = answers;
    if (rightAnswer === playersAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${playersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      break;
    }
  }
  const result = i === 3 ? console.log(`Congratulations, ${playerName}!`) : console.log(`Let's try again, ${playerName}!`);
  return result;
};
export default mainLogic;

export const getRandomItem = (arr) => {
  const randomItemIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomItemIndex];
  return randomItem;
};

export const getRandomNumber = (maxValue) => {
  const randomNumber = Math.ceil(Math.random() * maxValue);
  return randomNumber;
};
