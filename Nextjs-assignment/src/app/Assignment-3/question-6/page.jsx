'use client'
import React from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Laptop', desc: 'High-performance laptop for work and gaming.' },
  { id: 2, name: 'Smartphone', desc: 'Latest model with top-notch features.' },
  { id: 3, name: 'Headphones', desc: 'Noise-cancelling wireless headphones.' },
];

const ProductListPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛍️ Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ margin: '1rem 0' }}>
          <Link href={`/products/${product.id}`}>
            <span style={{ fontSize: '1.1rem' }}>
              ➕ {product.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
