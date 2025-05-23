const express = require('express');
require('dotenv').config();
const app = express();
const products = require('./routes/products');
const orders = require('./routes/orders');

app.use(express.json());
app.use('/api/products', products);
app.use('/api/orders', orders);

// Default to 5000 if PORT is not in .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
