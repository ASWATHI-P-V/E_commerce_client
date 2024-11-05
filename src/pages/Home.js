import React from 'react';
import './Home.css'; 
import HealthTipsCarousel from './HealthTipsCarousel';

const Home = () => {


  const healthTips = [
    { id: 1, tip: 'Stay Hydrated: Drink plenty of water throughout the day to maintain optimal health.' },
    { id: 2, tip: 'Regular Exercise: Aim for at least 30 minutes of physical activity most days of the week.' },
    { id: 3, tip: 'Balanced Diet: Incorporate fruits, vegetables, whole grains, and lean proteins into your meals.' },
    { id: 4, tip: 'Sleep Well: Aim for 7-9 hours of sleep each night for better health and productivity.' },
  ];

  const handleScroll = (scrollOffset) => {
    const container = document.getElementById('health-carousel-container');
    container.scrollLeft += scrollOffset;
  };


  return (
    <div className="home-container">
      {/* Hero Section */}
       <section className="section-container">
      <div className="background-image"></div>
      
      
      <div className="content">
        <h1 className="animated-heading">Welcome to Medical Store</h1>
        <p className="animated-paragraph">
          Your trusted source for healthcare products and essentials!
        </p>
        <p className="animated-paragraph">
          We provide a wide range of medical supplies, wellness products, and essential healthcare items. 
          Our mission is to ensure you have access to the products you need for a healthy life, with convenient online ordering and reliable delivery.
        </p>

        
      </div>
    </section>

      {/* Info Section */}
      <section class="info-section">
  <div class="info-item">
    <div class="icon-container">
      <img src="/images/delivery.png" alt="Secure Payment Icon" />
    </div>
    <div class="info-content">
      <h3>Secure Payment & Easy Return</h3>
      <p>Super Fast Delivery.</p>
    </div>
  </div>

  <div class="info-item">
    <div class="icon-container">
      <img src="/images/authentic.png" alt="Authentic Products Icon" />
    </div>
    <div class="info-content">
      <h3>Authentic Products</h3>
      <p>100% money back guarantee.</p>
    </div>
  </div>

  <div class="info-item">
    <div class="icon-container">
      <img src="/images/24-hours.png" alt="Online Support Icon" />
    </div>
    <div class="info-content">
      <h3>Online Support 24/7</h3>
      <p> Anytime, Anywhere.</p>
    </div>
  </div>
</section>



      
      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Prescription Fulfillment</h3>
            <p>Get your prescriptions filled promptly and efficiently.</p>
          </div>
          <div className="service-item">
            <h3>Health Supplements</h3>
            <p>Explore our range of vitamins and supplements tailored for your wellness goals.</p>
          </div>
          <div className="service-item">
            <h3>Home  <br />        
                Delivery</h3>
            <p>Receive your medicines at your doorstep with fast delivery.</p>
          </div>
          <div className="service-item">
            <h3>Health <br />Tips</h3>
            <p>Stay updated with our latest health tips and advice.</p>
          </div>
        </div>
      </section>

   


    {/*section1*/}
    <section className="medical-store-section-container">
      <div className="container">
        <div className="medical-store-background">

          
          <div className="image-container">
            <img src="/images/pharmacy.jpg" alt="Pharmacy with medicine" className="animated-image" />
          </div>

          
          <div className="text-container">
            <h1 className="animated-text">YOUR HEALTH, OUR PRIORITY</h1>
            <p className="animated-text">
              Discover a wide range of medicines and health products available at your fingertips.
            </p>
            <p className="animated-text">
              We ensure quick and reliable delivery to keep you and your family healthy and happy.
            </p>
          </div>

        </div>
      </div>
    </section>

    {/*section2*/}
    <div>
      <section>
      <HealthTipsCarousel />
    </section>
    </div>


       {/* Testimonials Section */}
<section className="testimonials-section">
  <h2 className="section-title">What Our Customers Say</h2>
  <div className="testimonials">
    <div className="testimonial-item">
      <p>"Amazing service, timely delivery, and quality products!"</p>
      <span>- Alex</span>
    </div>
    <div className="testimonial-item">
      <p>"The quality of medicines and the prompt delivery has made this my go-to store."</p>
      <span>- Sofia</span>
    </div>
    <div className="testimonial-item">
      <p>"I found everything I needed at great prices. Highly recommended!"</p>
      <span>- Liam</span>
    </div>
    <div className="testimonial-item">
      <p>"Very reliable and customer-friendly. The best medical store online!"</p>
      <span>- Noah</span>
    </div>
    <div className="testimonial-item">
      <p>"Ordering medicines is so convenient, and the customer support is exceptional!"</p>
      <span>- Emma</span>
    </div>
    <div className="testimonial-item">
      <p>"Highly appreciate the quick response and support. Shopping here is a pleasure!"</p>
      <span>- Olivia</span>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default Home;
