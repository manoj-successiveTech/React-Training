// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

'use client'
import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Product from '@/components/Product';
import Cart from '@/components/Cart';
import '@/app/styles/welcome2.css';


const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const Page = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <Product products={products} />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Page;