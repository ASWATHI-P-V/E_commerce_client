// Cart.js
import React from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  
  // router.post('/checkout', authenticateToken, async (req, res) => {
  //   const { items, total, date } = req.body;
  //   try {
  //     const order = new OrderHistory({ items, total, date });
  //     await order.save();
  //     res.json(order);
  //   } catch (err) {
  //     res.status(500).send('Server error');
  //   }
  // });

  const handleCheckout = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/checkout', {
        items: cartItems,
        total: calculateTotal(),
        date: new Date().toISOString(),
      });
      console.log(res.data);
    } catch (err) {
      console.error('Error:', err); // Log the error
    }
  };
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_id} className="cart-item">
              <img src={item.product_image} alt={item.product_name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.product_name}</h3>
                <p>Company: {item.company}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.product_id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={handleCheckout} className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
