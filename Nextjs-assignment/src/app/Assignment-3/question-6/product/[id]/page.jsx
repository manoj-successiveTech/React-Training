// app/products/[id]/page.jsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import '@/app/styles/welcome3.css';

const products = [
  { id: 1, name: 'Laptop', desc: 'High-performance laptop for work and gaming.' },
  { id: 2, name: 'Smartphone', desc: 'Latest model with top-notch features.' },
  { id: 3, name: 'Headphones', desc: 'Noise-cancelling wireless headphones.' },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="app-container">
        <h2>Product not found!</h2>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h2>📝 Product Detail</h2>
      <div className="product-detail">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <button onClick={() => router.back()}>⬅️ Go Back</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
