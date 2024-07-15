export const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';


export const minNumber = 1;
export const maxNumber = 100;


export const findGcd = (number1, number2) => {
    if (number2 === 0) {
        return  number1;
      } else {
        return gcd(number2, number1 % number2);
      };
};


export const getQuestionAndCorrectAnswer = () => {
    const randomNumber1 = (Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const randomNumber2 = (Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const maxDivisor = findGcd(randomNumber1, randomNumber2);
    const correctAnswer = String(maxDivisor);
    return `${randomNumber1} ${randomNumber2}`, correctAnswer;
};