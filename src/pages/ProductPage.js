import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPage.css'; // Assuming you have some styling

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (id, qty) => {
    setQuantities({
      ...quantities,
      [id]: qty,
    });
  };

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h2>Available Drugs</h2>
      <input 
        type="text" 
        placeholder="Search for products..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.product_id} className="product-item">
            <img src={product.product_image} alt={product.product_name} className="product-image" />
            <h3>{product.product_name}</h3>
            <p>Company: {product.company}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div className="quantity-selector">
              <label>Quantity: </label>
              <input 
                type="number" 
                min="1" 
                value={quantities[product.product_id] || 1}
                onChange={(e) => handleQuantityChange(product.product_id, e.target.value)}
              />
            </div>
            <button onClick={() => addToCart({ ...product, quantity: quantities[product.product_id] || 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
