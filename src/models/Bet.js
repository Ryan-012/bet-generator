const mongoose = require('mongoose');

const betSchema = mongoose.Schema({
  name: { type: String, required: true },
  bet: { type: Array, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('Bet', betSchema);
