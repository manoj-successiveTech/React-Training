// 6.Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list.

// app/products/page.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import '@/app/styles/welcome3.css';

const products = [
  { id: 1, name: 'Laptop', desc: 'High-performance laptop for work and gaming.' },
  { id: 2, name: 'Smartphone', desc: 'Latest model with top-notch features.' },
  { id: 3, name: 'Headphones', desc: 'Noise-cancelling wireless headphones.' },
];

const ProductListPage = () => {
  return (
    <div className="app-container">
      <h2>🛍️ Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              ➕ {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
