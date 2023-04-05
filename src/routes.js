const express = require('express');
const routes = express.Router();
const controller = require('./controller');
const verifyNumbers = require('./middlewares/verifyNumbers');

routes.get('/allBets', controller.allBet);

routes.get('/generateResult', controller.getWinners, controller.showWinners);

routes.post('/saveBet', verifyNumbers, controller.saveBet);

routes.delete('/cleanBets', controller.cleanBets);

module.exports = routes;
