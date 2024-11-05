import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header is rendering...");

  //take user data from local storage and parse it
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User:", user);

  // function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    alert("You have been logged out");
  };

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
        {user ? (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
