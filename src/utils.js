export const getRandomNumber = () => {
  const minNumber = 1;
  const maxNumber = 1000;
 return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
};