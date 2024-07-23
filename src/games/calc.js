import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'What is the result of the expression?';

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operations.length - 1));
  const randomOperation = operations[randomIndex];
  let correctAnswer;
  if (randomOperation === '+') {
    correctAnswer = String(randomNumber1 + randomNumber2);
  } else if (randomOperation === '-') {
    correctAnswer = String(randomNumber1 - randomNumber2);
  } else {
    correctAnswer = String(randomNumber1 * randomNumber2);
  }
  return {
    question: `${randomNumber1} ${randomOperation} ${randomNumber2}`,
    correctAnswer,
  };
};
