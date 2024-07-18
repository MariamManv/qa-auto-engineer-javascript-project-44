export const rulesOfTheGame = 'What is the result of the expression?';

export const minNumber = 1;
export const maxNumber = 100;

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber1 = Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
  const randomNumber2 = Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
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
