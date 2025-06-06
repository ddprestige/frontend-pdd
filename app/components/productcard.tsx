// components/ProductCard.tsx

import React from 'react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const addToCart = async (productId: string, quantity = 1) => {
    const res = await fetch('http://localhost:5000/api/cart/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    });

    if (!res.ok) {
      const error = await res.json();
      alert(error.message);
    } else {
      alert('Added to cart');
    }
  };

  return (
    <div className="border p-4 rounded">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product._id)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
