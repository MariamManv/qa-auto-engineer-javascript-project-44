const getRandomNumber = () => {
  const minNumber = 1;
  const maxNumber = 100;
  return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
};

export default getRandomNumber;
