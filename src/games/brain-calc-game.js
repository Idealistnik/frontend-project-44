import getRandomNumberInterval from '../functions.js';
import mainLogic from '../index.js';

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`'${operator}' is not readable`);
  }
};

const gameRule = 'What is the result of the expression?';

const brainCalc = () => {
  const firstNumber = getRandomNumberInterval(10);
  const secondNumber = getRandomNumberInterval(10);
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomNumberInterval(operators.length - 1);
  const operator = operators[randomOperatorIndex];

  const expression = calculate(firstNumber, secondNumber, operator);

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = expression.toString();
  return [question, rightAnswer];
};

const brainCalcGame = () => {
  mainLogic(gameRule, brainCalc);
};

export default brainCalcGame;
