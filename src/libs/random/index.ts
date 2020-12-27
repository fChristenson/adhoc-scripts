export const getRandomNumber = (numDigits: number = 1) => {
  const multiple = Math.pow(10, numDigits);
  console.log(Math.floor(Math.random() * multiple));
};
