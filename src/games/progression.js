export const rulesOfTheGame = 'What number is missing in the progression?';

export const minInitialTermNumber = 1;
export const maxInitialTermNumber = 100;
export const minCommonDifferenceNumber = 1;
export const maxCommonDifferenceNumber = 15;
export const progressionLength = 10;

export const getQuestionAndCorrectAnswer = () => {
  const initialTerm = Math.floor(Math.random() * (
    maxInitialTermNumber - minInitialTermNumber + 1))
  + minInitialTermNumber;
  const commonDifference = Math.floor(Math.random() * (
    maxCommonDifferenceNumber - minCommonDifferenceNumber + 1))
  + minCommonDifferenceNumber;
  const progression = [];
  let i = 0;
  while (i < progressionLength) {
    progression.push(initialTerm + i * commonDifference);
    i += 1;
  }
  const correctIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[correctIndex]);
  progression[correctIndex] = '..';
  const finishedProgression = progression.join(' ');
  return {
    question: finishedProgression,
    correctAnswer,
  };
};
