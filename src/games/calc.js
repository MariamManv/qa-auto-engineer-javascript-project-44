import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'What is the result of the expression?';

export const summ = (num1, num2) => num1 + num2;

export const subtract = (num1, num2) => num1 - num2;

export const multiply = (num1, num2) => num1 * num2;

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operations.length - 1));
  const randomOperation = operations[randomIndex];
  let correctAnswer;
  switch (randomOperation) {
    case '+':
      correctAnswer = String(summ(randomNumber1, randomNumber2));
      break;
    case '-':
      correctAnswer = String(subtract(randomNumber1, randomNumber2));
      break;
    default:
      correctAnswer = String(multiply(randomNumber1, randomNumber2));
  }
  return {
    question: `${randomNumber1} ${randomOperation} ${randomNumber2}`,
    correctAnswer,
  };
};
