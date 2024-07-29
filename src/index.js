import readlineSync from 'readline-sync';

export const roundNumber = 3;

export const executeBrainGames = (specificGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(specificGame.rulesOfTheGame);

  for (let count = 0; count < roundNumber; count += 1) {
    const { question, correctAnswer } = specificGame.getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');

    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
