import React from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const itemPrice = item.price + (item.abs ? 20000 : 0);
  const subtotal = itemPrice * item.quantity;

  return (
    <div className="flex items-start justify-between p-4 border-b">
      <div className="flex items-start space-x-4">
        <Image 
          src={item.image || "/placeholder.png"} 
          alt={item.name} 
          width={100} 
          height={100} 
          className="object-cover rounded-lg border" 
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">Color: {item.color} | Engine: {item.engine}</p>
          {item.abs && <p className="text-sm text-green-600 font-medium">+ ABS</p>}
          <p className="text-gray-800 font-semibold mt-2">Rs. {subtotal.toLocaleString('en-NP')}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border rounded-lg p-1">
          <button 
            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} 
            className="w-8 h-8 rounded disabled:opacity-50 hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} 
            className="w-8 h-8 rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button 
          onClick={() => removeFromCart(item.cartItemId)} 
          className="p-2 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
          aria-label="Remove item"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};