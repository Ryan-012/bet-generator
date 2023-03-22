const Bet = require('./models/Bet');
const currentDate = require('./middlewares/currentDate');
const compareDate = require('./middlewares/compareDate');
const findCorrectNumbers = require('./middlewares/findCorrectNumbers');
const distributePrize = require('./middlewares/distributePrize');
const generateResult = require('./middlewares/generateResult');

module.exports = {
  getWinners: async (req, res, next) => {
    const winners = [];
    const result = generateResult();
    const bets = await Bet.find();

    if (bets.length === 0) return res.status(400).json({ message: 'No bets!' });

    for (let i = 0; bets.length > i; i++) {
      const { date, bet } = bets[i];
      const differenceBetweenDates = compareDate(date, currentDate());

      if (differenceBetweenDates === 0) {
        const correctNumbers = findCorrectNumbers(bet, result);

        if (correctNumbers.length >= 4) {
          const { _doc } = bets[i];
          winners.push({ ..._doc, correctNumbers });
        }
      }
    }

    if (winners.length === 0) return res.status(400).json({ message: 'No winners!' });

    req.winners = winners;
    req.result = result;
    return next();
  },
  saveBet: async (req, res) => {
    const { name, bet } = req.body;

    const price = (bet.length - 5) * 4.5;

    const newBet = new Bet({ name, bet, price, date: currentDate() });

    try {
      const doc = await newBet.save();
      res.status(201).json({ doc });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  showWinners: async (req, res) => {
    const prize = Number(req.body.prize) || 10000;
    const winners = req.winners;

    try {
      const finalWinners = await distributePrize(winners, prize);
      res.json({ finalWinners, result: req.result });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  cleanBets: async (_req, res) => {
    Bet.deleteMany()
      .then((response) => {
        return res.json({ response, message: 'All bets successfully deleted!' });
      })
      .catch((error) => {
        return res.status(400).json({ error });
      });
  },
  allBet: async (_req, res) => {
    try {
      const bets = await Bet.find();

      res.json({ bets });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
