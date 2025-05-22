const express = require('express');
require('dotenv').config();
const app = express();
const products = require('./routes/products');
const orders = require('./routes/orders');

app.use(express.json());
app.use('/api/products', products);
app.use('/api/orders', orders);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
