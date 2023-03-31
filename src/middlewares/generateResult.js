module.exports = function generateResult(req, _res, next) {
  const result = [];

  while (result.length < 6) {
    const number = Math.round(Math.random() * 60);

    if (number !== 0) {
      const containsNumber = result.some((item) => item === number);

      if (containsNumber === false) result.push(number);
    }
  }

  req.result = result;

  return next();
};
