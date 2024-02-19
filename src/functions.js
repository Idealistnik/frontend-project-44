export const isEven = (number) => number % 2 === 0;

export const getRandomNumberInterval = (maxValue, minValue = 0) => {
  const randomNumber = Math.ceil(Math.random() * (maxValue - minValue) + minValue);
  return randomNumber;
};

export const calculate = (firstOperand, secondOperand, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  return result;
};

export const getNod = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getNod(secondNumber, firstNumber % secondNumber);
};

export const makeProgression = (progressionFirstNum, progressionSize, progressionStep) => {
  const result = [];
  for (let i = 0; i <= progressionSize - 1; i += 1) {
    const progressionIncrease = i * progressionStep;
    result.push(progressionFirstNum + progressionIncrease);
  }
  return result;
};

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider < num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};
