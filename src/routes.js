const express = require('express');
const routes = express.Router();
const controller = require('./controller');
const generateResult = require('./middlewares/generateResult');
const verifyNumbers = require('./middlewares/verifyNumbers');

routes.get('/allBets', controller.allBet);

routes.get(
  '/generateResult',
  generateResult,
  controller.getWinners,
  controller.showWinners
);

routes.post('/newBet', verifyNumbers, controller.saveBet);

routes.delete('/cleanBets', controller.cleanBets);

module.exports = routes;
