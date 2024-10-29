import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>Medical Store</h4>
          <p>Your reliable source for health and wellness products</p>
        </div>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-contact">
          <p>Contact: support@medicalstore.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <p className="footer-copyright">
        © 2024 Medical Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
