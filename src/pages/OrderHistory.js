import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const res =  await axios.post('http://localhost:5000/api/orderhistory', { userId: user._id });
        setOrders(res.data);
      }
      catch (err) {
        console.error('Error fetching order history:', err);
        setError('Failed to fetch order history');
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {error && <p className="error">{error}</p>}
      {orders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h3>Order Date: {new Date(order.date).toLocaleString()}</h3>
              <p>Total: ${order.total}</p>
              <div>
                {order.items.map((item, idx) => (
                  <div key={idx}>
                    <p>{item.product_name} - {item.quantity} x ${item.price}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
