import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import OrderHistory from './pages/OrderHistory';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
  console.log("App is rendering..."); 


   // State to store cart items
   const [cartItems, setCartItems] = useState([]);

   // Function to add items to the cart
   const addToCart = (product) => {
     setCartItems(prevItems => {
       const existingProduct = prevItems.find(item => item.product_id === product.product_id);
       if (existingProduct) {
         // Update quantity if item already exists in the cart
         return prevItems.map(item =>
           item.product_id === product.product_id
             ? { ...item, quantity: item.quantity + product.quantity }
             : item
         );
       }
       // Add new item to the cart
       return [...prevItems, product];
     });
   };
 
   // Function to remove items from the cart
   const removeFromCart = (productId) => {
     setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
   };



  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/' 
        element={ 
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        }>
          <Route index element={<Home />} /> 
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
          <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Route>

      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
