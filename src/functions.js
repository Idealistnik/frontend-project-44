export const getRandomItem = (arr) => {
  const randomItemIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomItemIndex];
  return randomItem;
};

export const getRandomNumber = (maxValue) => {
  const randomNumber = Math.ceil(Math.random() * maxValue);
  return randomNumber;
};

export const getRandomNumberInterval = (minValue, maxValue) => {
  const randomNumber = Math.ceil(Math.random() * (maxValue - minValue) + minValue);
  return randomNumber;
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
