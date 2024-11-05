import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      // Redirect to products page
      navigate('/products');
    } catch (err) {
      console.error('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        className="login-input"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
      <p className="signup-prompt">Don't have an account? 
        <span className="signup-link" onClick={() => navigate('/signup')}> Sign Up</span>
      </p>
    </div>
  );
};

export default LoginPage;
