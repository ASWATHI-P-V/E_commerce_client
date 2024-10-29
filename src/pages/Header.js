import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log("Header is rendering...");
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">MedicalStore</Link>
      </div>
      <nav className="header-nav">
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/order-history">Order History</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
