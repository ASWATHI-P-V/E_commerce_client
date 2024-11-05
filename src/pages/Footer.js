import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-about">
          <h3>About Medical Store</h3>
          <p>Your reliable source for health and wellness products, delivering trusted medical supplies directly to your door.</p>
        </div>

       
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/order">Order Now</a></li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@medicalstore.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 456 Wellness Ave, Health City</p>
        </div>

        
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        <ul className="social-icons">
          <li><a href="#"><img src="/images/youtube.png" alt="YouTube" /></a></li>
          <li><a href="#"><img src="/images/instagram.png" alt="Instagram" /></a></li>
          <li><a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Medical Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
