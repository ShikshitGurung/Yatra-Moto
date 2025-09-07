'use client';
import { useParams, useRouter, notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getBikeById } from '../../../data/bikes';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

export default function BuyPage() {
  const { id } = useParams();
  const router = useRouter();
  const bike = getBikeById(id);

  const { addToCart } = useCart();
  const { currentUser } = useAuth();

  const [color, setColor] = useState('');
  const [engine, setEngine] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [abs, setAbs] = useState(false);

  useEffect(() => {
    if (bike) {
      setColor(bike.colors[0] || '');
      setEngine(bike.engineOptions[0] || '');
    }
  }, [bike]);

  if (!bike) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!currentUser) {
      toast.error("Please log in to add items to your cart.");
      router.push(`/login?redirectTo=/buy/${id}`);
      return;
    }

    const itemToAdd = {
      ...bike,
      color,
      engine,
      quantity,
      abs,
    };
    addToCart(itemToAdd);
    router.push('/cart');
  };

  const totalPrice = (bike.price * quantity) + (abs ? 20000 : 0);

  return (
    <div className='min-h-screen bg-gray-300 text-black p-4 sm:p-10 md:p-20'>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Customize {bike.name}</h1>
        <p className="text-xl font-bold mb-4 text-red-600">Base Price: Rs. {bike.price.toLocaleString('en-NP')}</p>

        {/* Color Option */}
        <label htmlFor="color-select" className="block mb-2 font-semibold">Select Color:</label>
        <select
          id="color-select"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded p-2 w-full mb-4 bg-white"
        >
          {bike.colors.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Engine Option */}
        <label htmlFor="engine-select" className="block mb-2 font-semibold">Select Engine CC:</label>
        <select
          id="engine-select"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
          className="border rounded p-2 w-full mb-4 bg-white"
        >
          {bike.engineOptions.map((cc) => (
            <option key={cc} value={cc}>{cc}</option>
          ))}
        </select>

        {/* Quantity */}
        <label htmlFor="quantity-input" className="block mb-2 font-semibold">Quantity:</label>
        <input
          id="quantity-input"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded p-2 w-full mb-4 bg-white"
        />

        {/* ABS Option */}
        <label className="flex items-center mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={abs}
            onChange={() => setAbs(!abs)}
            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span className="ml-2">Add ABS (+ Rs. 20,000)</span>
        </label>
        
        <div className='border-t pt-4'>
            <div className='text-2xl font-bold text-right mb-4'>
                Total: Rs. {totalPrice.toLocaleString('en-NP')}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
}