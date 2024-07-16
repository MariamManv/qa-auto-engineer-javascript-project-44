export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';


export const minNumber = 1;
export const maxNumber = 1000;


export const isEven = (number) => {
    return number % 2 === 0;
};


export const getQuestionAndCorrectAnswer = () => {
    const randomNumber = Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    let correctAnswer
    if (isEven(randomNumber) === true) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    };
    return {
        question: randomNumber,
        correctAnswer: correctAnswer
    };
};