import readlineSync from 'readline-sync';

export const roundNumber = 3;

export const executeBrainGames = (specificGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(specificGame.rulesOfTheGame);
  let correctAnswerCount = 0;
  for (let count = 0; count < roundNumber; count += 1) {
    const { question, correctAnswer } = specificGame.getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (userInput === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
      if (correctAnswerCount === roundNumber) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
