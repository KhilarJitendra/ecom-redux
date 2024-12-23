import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Minus } from 'lucide-react';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus size={16} className="dark:text-white" />
                  </button>
                  <span className="dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus size={16} className="dark:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold dark:text-white">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};