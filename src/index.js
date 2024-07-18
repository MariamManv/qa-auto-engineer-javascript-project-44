import readlineSync from 'readline-sync';

export const roundNumber = 3;

export const executeBrainGames = (specificGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(specificGame.rulesOfTheGame);
  let count = 0;
  while (count < roundNumber) {
    const { question, correctAnswer } = specificGame.getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (userInput === correctAnswer) {
      count += 1;
      console.log('Correct!');
      if (count === roundNumber) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
