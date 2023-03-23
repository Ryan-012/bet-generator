module.exports = function findCorrectNumbers(bet, result) {
  const correctNumbers = [];

  for (let i = 0; bet.length > i; i++) {
    const numbers = result.some((number) => number === bet[i]);

    if (numbers === true) {
      correctNumbers.push(bet[i]);
    }
  }

  return correctNumbers;
};
