const express = require('express');
const app = express();

//imports all routes hereby
const products = require('./routes/product');

app.use('/api/v1', products)

module.exports = app