'use client';
import { useCart } from "../../context/CartContext";
import Link from 'next/link';
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, cartTotal, clearCart, isLoaded } = useCart();

  if (!isLoaded) {
    return <p className="p-10 text-center">Loading Cart...</p>;
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 text-black flex flex-col justify-center items-center p-6">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Looks like you haven't added any bikes yet.</p>
          <Link href="/explore">
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Explore Bikes
            </button>
          </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h1 className="text-2xl text-black font-bold">Your Shopping Cart</h1>
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>
          
          <div className="space-y-4 text-black">
            {cart.map((item) => (
              <CartItem key={item.cartItemId} item={item} />
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between text-black items-center font-bold text-xl">
              <span>Total Amount:</span>
              <span>Rs. {cartTotal.toLocaleString('en-NP')}</span>
            </div>
            <Link href="/checkout">
              <button
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}