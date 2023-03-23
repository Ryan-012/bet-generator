module.exports = function compareDate(betDate, currentDate) {
  const days = 1000 * 60 * 60 * 24;

  const date1 = new Date(currentDate);
  const date2 = new Date(betDate);

  return parseInt((date1 - date2) / days, 10);
};
