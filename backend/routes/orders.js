const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
  const { product_id, quantity } = req.body;
  const result = await pool.query(
    'INSERT INTO orders (product_id, quantity) VALUES ($1, $2) RETURNING *',
    [product_id, quantity]
  );
  res.json(result.rows[0]);
});

module.exports = router;
