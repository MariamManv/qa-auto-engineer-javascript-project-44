const getRandomNumber = (minNumber = 1, maxNumber = 100) => {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1);
  return Math.floor(randomNumber) + minNumber;
};

export default getRandomNumber;
