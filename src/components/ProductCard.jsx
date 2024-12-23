import React from 'react';
import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { addToCart } from '../store/slices/cartSlice';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">${product.price}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {product.description}
        </p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};