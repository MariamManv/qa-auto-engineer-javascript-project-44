import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'What is the result of the expression?';

export const calculate = (operator, num1, num2) => {
  let answer;
  switch (operator) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    default:
      answer = String(num1 * num2);
  }
  return answer;
};

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operations.length - 1));
  const randomOperation = operations[randomIndex];
  const correctAnswer = calculate(randomOperation, randomNumber1, randomNumber2);
  return {
    question: `${randomNumber1} ${randomOperation} ${randomNumber2}`,
    correctAnswer,
  };
};
