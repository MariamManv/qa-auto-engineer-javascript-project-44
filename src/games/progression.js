import getRandomNumber from '../utils.js';

export const rulesOfTheGame = 'What number is missing in the progression?';

export const minCommonDifferenceNumber = 1;
export const maxCommonDifferenceNumber = 15;
export const progressionLength = 10;

export const makeProgression = (initialTerm) => {
  const commonDifference = Math.floor(Math.random() * (
    maxCommonDifferenceNumber - minCommonDifferenceNumber + 1))
  + minCommonDifferenceNumber;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(initialTerm + i * commonDifference);
  }
  return progression;
};

export const getQuestionAndCorrectAnswer = () => {
  const initialTerm = getRandomNumber();
  const newProgression = makeProgression(initialTerm);
  const correctIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(newProgression[correctIndex]);
  newProgression[correctIndex] = '..';
  const finishedProgression = newProgression.join(' ');
  return {
    question: finishedProgression,
    correctAnswer,
  };
};
