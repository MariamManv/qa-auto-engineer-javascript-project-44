import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber();
  let correctAnswer;
  if (isPrime(randomNumber) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return {
    question: randomNumber,
    correctAnswer,
  };
};
