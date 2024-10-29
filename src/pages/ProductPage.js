import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Available Drugs</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.name} - {product.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
