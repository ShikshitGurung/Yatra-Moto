'use client';
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const getTotal = () =>
    cart.reduce(
      (sum, item) => sum + (item.price + (item.abs ? 20000 : 0)) * item.quantity,
      0
    );

  if (cart.length === 0) {
    return <p className="p-6 text-center">Your cart is empty. Add bikes to proceed.</p>;
  }

  const handleConfirm = () => {
    alert(`
    ✅ Purchase Confirmed!
    Items:
    ${cart.map(item =>
      `${item.name} (x${item.quantity}) ${item.abs ? "[+ABS]" : ""}`
    ).join("\n")}
    Total: Rs. ${getTotal()}
    `);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  Qty: {item.quantity} | Engine: {item.engine} | Color: {item.color}
                </p>
                {item.abs && <p className="text-green-600 text-sm">+ ABS (Rs. 20,000)</p>}
              </div>
              <p className="font-bold">
                Rs. {(item.price + (item.abs ? 20000 : 0)) * item.quantity}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right font-bold text-xl">
          Total: Rs. {getTotal()}
        </div>
        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}
