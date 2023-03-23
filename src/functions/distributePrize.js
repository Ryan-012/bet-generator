module.exports = async function distributePrize(winners, prize) {
  const a = prize / 20;
  const b = (prize / 20) * 3;

  const fourNumbersWinners = await winners.filter((item) => {
    return item.correctNumbers.length === 4;
  });

  const fiveNumbersWinners = await winners.filter((item) => {
    return item.correctNumbers.length === 5;
  });

  const sixNumbersWinners = await winners.filter((item) => {
    return item.correctNumbers.length === 6;
  });

  fourNumbersWinners.forEach((item) => {
    item.prize = a / fourNumbersWinners.length;
  });

  fiveNumbersWinners.forEach((item) => {
    item.prize = b / fiveNumbersWinners.length;
  });

  sixNumbersWinners.forEach((item) => {
    item.prize = (prize - (a + b)) / sixNumbersWinners.length;
  });

  return { fourNumbersWinners, fiveNumbersWinners, sixNumbersWinners };
};
