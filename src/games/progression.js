import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'What number is missing in the progression?';

export const minCommonDifferenceNumber = 1;
export const maxCommonDifferenceNumber = 15;
export const progressionLength = 10;

export const makeProgression = () => {
  const initialTerm = getRandomNumber();
  const commonDifference = Math.floor(Math.random() * (
    maxCommonDifferenceNumber - minCommonDifferenceNumber + 1))
  + minCommonDifferenceNumber;
  const progression = [];
  let i = 0;
  while (i < progressionLength) {
    progression.push(initialTerm + i * commonDifference);
    i += 1;
  }
  return progression;
};

export const getQuestionAndCorrectAnswer = () => {
  const newProgression = makeProgression();
  const correctIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(newProgression[correctIndex]);
  newProgression[correctIndex] = '..';
  const finishedProgression = newProgression.join(' ');
  return {
    question: finishedProgression,
    correctAnswer,
  };
};
