import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

export const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const maxDivisor = findGcd(randomNumber1, randomNumber2);
  const correctAnswer = String(maxDivisor);
  return {
    question: `${randomNumber1} ${randomNumber2}`,
    correctAnswer,
  };
};
