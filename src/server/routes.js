const express = require('express');

const router = express.Router();
const cars = require('./data/cars.json');

router.get('/', (req, res) => {
  res.send('Welcome - this is the Medical-Objects Test Shop NodeJS server!');
});

router.post('/cars', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(cars);
});

module.exports = router;
