export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

import * as getRandomNumber from '../utils.js';

export const isEven = (number) => number % 2 === 0;

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber;
  let correctAnswer;
  if (isEven(randomNumber) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return {
    question: randomNumber,
    correctAnswer,
  };
};
