import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({ product_id: '', quantity: 1 });

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }, []);

  const placeOrder = async () => {
    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    alert('Order placed!');
  };

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <select onChange={e => setOrder({ ...order, product_id: e.target.value })}>
        <option>Select product</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} (${p.price})
          </option>
        ))}
      </select>
      <input
        type="number"
        value={order.quantity}
        onChange={e => setOrder({ ...order, quantity: e.target.value })}
        placeholder="Quantity"
      />
      <button onClick={placeOrder}>Place Order</button>

      <h2>All Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            {p.image_url && <img src={p.image_url} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
