'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';

const Product = ({ products }) => {
  const { dispatch } = useCart();

  return (
    <div className="product-list">
      <h2>🛍️ Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
