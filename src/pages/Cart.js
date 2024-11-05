import React, { useState } from 'react';
import axios from 'axios';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const [creditCard, setCreditCard] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/checkout', {
        items: cartItems,
        total: calculateTotal(),
        date: new Date().toISOString(),
        userId: user._id,
      });
      console.log(res.data);
      alert('Checkout successful!');
      navigate('/'); 


    } catch (err) {
      if (err.response && err.response.data.error === 'Credit card details required') {
        const enteredCard = prompt('Please enter your credit card details:');
        if (enteredCard) {
          try {
            
            await axios.put(`http://localhost:5000/api/users/${user._id}/update-card`, { creditCard: enteredCard });
            setCreditCard(enteredCard);
            alert('Card details saved! Proceeding with checkout...');
            handleCheckout(); 
          } catch (updateErr) {
            console.error('Error updating card details:', updateErr);
          }
        } else {
          alert('Checkout canceled: Credit card details are required.');
        }
      } else {
        console.error('Error:', err); 
      }
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
      
     {cartItems.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
      
    </div>
  );
};

export default Cart;
