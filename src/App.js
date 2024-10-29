import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  console.log("App is rendering..."); 
  return (
    <div className="App">
    <Header />
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<h1>Welcome to the Medical Store</h1>} /> 
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>

    <Footer />
    </div>
  );
}

export default App;
