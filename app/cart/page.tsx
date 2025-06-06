// app/cart/page.tsx
"use client";

import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:5000/api/cart', {
          credentials: 'include',
        });

        if (!res.ok) {
          const errorMessage = await res.text();
          throw new Error(`HTTP error! status: ${res.status}, message: ${errorMessage}`);
        }

        const data = await res.json();
        setCart(data.items || []);
      } catch (err) {
        console.error("Error fetching cart:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to fetch cart items.');
        }
        setCart([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>Error loading cart: {error}</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item: any) => (
            <li key={item._id}>
              {item.name} - Quantity: {item.quantity} - Price: ₹{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </div>
  );
};

export default Cart;
