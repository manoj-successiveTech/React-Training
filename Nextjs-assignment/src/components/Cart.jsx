// Cart.jsx

'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              <div>
                {item.name} x{item.quantity} - ₹{item.price}
              </div>
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
