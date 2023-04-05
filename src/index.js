require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected database.');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));

app.listen(process.env.PORT, () => {
  console.log('Server running on PORT ' + process.env.PORT);
});
