const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { name, price, image_url } = req.body;
  const result = await pool.query(
    'INSERT INTO products (name, price, image_url) VALUES ($1, $2, $3) RETURNING *',
    [name, price, image_url]
  );
  res.json(result.rows[0]);
});

module.exports = router;
