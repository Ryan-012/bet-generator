module.exports = function verifyNumbers(req, res, next) {
  const { bet } = req.body;
  const containsNumberNotAllowed = bet.some((number) => number < 1 || number > 60);

  if (!bet) return res.status(400).json({ error: true, message: 'Not bets!' });

  if (bet.length < 6 || bet.length > 15)
    return res.status(400).json({ error: true, message: 'Incorrect numbers amount!' });

  if (containsNumberNotAllowed === true)
    return res.status(400).json({ error: true, message: 'Some number is not allowed!' });

  for (let i = 0; bet.length > i; i++) {
    for (let j = 0; i > j; j++) {
      if (bet[i] === bet[j])
        return res.status(400).json({ error: true, message: 'Some number was repeated!' });
    }
  }

  return next();
};
