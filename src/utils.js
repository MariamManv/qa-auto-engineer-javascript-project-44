export const minNumber = 1;
export const maxNumber = 1000;
export const getRandomNumber = () => {
  return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
};
