const rule = 'What is the result of the expression?';

const playBrainCalc = () => {
  const getRandomNumber = (max) => Math.round(Math.random() * max);
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);

  const getRandomElement = (arr) => arr[getRandomNumber(arr.length - 1)];
  const operators = ['+', '-', '*'];
  const randomOperator = getRandomElement(operators);

  const inputData = `${firstNumber} ${randomOperator} ${secondNumber}`;

  let correctAnswer = 0;

  if (randomOperator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (randomOperator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else if (randomOperator === '*') {
    correctAnswer = firstNumber * secondNumber;
  }
  return [inputData, correctAnswer];
};
export { playBrainCalc, rule };
