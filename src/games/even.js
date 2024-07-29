import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (number) => number % 2 === 0;

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return {
    question: randomNumber,
    correctAnswer,
  };
};
