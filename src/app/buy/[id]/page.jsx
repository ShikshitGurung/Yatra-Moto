'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const bikes = [
    {
        id: 1,
        name: 'Hunter 350',
        price: 400000,
        engineOptions: ['349cc', '350cc'],
        colors: ['Red', 'Black', 'Silver'],
    },
    {
        id: 2,
        name: 'Royal Enfield Classic 350',
        price: 500000,
        engineOptions: ['346cc', '350cc'],
        colors: ['Green', 'Black', 'Blue'],
    },
    {
        id: 3,
        name: 'Interceptor 650',
        price: 650000,
        engineOptions: ['648cc'],
        colors: ['Orange', 'Black', 'White'],
    },
    {
        id: 4,
        name: 'KTM Duke 200',
        price: 400000,
        engineOptions: ['199cc', '200cc'],
        colors: ['Orange', 'Black', 'White'],
    },
    {
        id: 5,
        name: 'KTM Duke 390',
        price: 500000,
        engineOptions: ['373cc'],
        colors: ['Orange', 'Black', 'White'],
    },
    {
        id: 6,
        name: 'KTM RC 200',
        price: 650000,
        engineOptions: ['199cc', '200cc'],
        colors: ['Orange', 'Black', 'White'],
    },
    {
        id: 7,
        name: 'Hero Xpulse 125R',
        price: 400000,
        engineOptions: ['125cc'],
        colors: ['Blue', 'Black', 'White'],
    },
    {
        id: 8,
        name: 'Xpulse 210',
        price: 500000,
        engineOptions: ['210cc'],
        colors: ['Red', 'Black', 'White'],
    },
    {
        id: 9,
        name: 'Mavrick 440',
        price: 650000,
        engineOptions: ['440cc'],
        colors: ['Grey', 'Black', 'White'],
    },
    {
        id: 10,
        name: 'HJ 250',
        price: 400000,
        engineOptions: ['250cc'],
        colors: ['orange', 'Black'],
    },
    {
        id: 11,
        name: 'RM 250',
        price: 500000,
        engineOptions: ['300cc'],
        colors: ['Red'],
    },
    {
        id: 12,
        name: 'RMZ 250',
        price: 650000,
        engineOptions: ['250cc'],
        colors: ['White', 'Black', 'Blue'],
    },
    {
        id: 13,
        name: 'Apache RTR 200',
        price: 400000,
        engineOptions: ['200cc'],
        colors: ['Red', 'Black'],
    },
    {
        id: 14,
        name: 'TVs Ronin',
        price: 500000,
        engineOptions: ['225cc'],
        colors: ['Grey', 'Black'],
    },
    {
        id: 15,
        name: 'TVS RR 310',
        price: 650000,
        engineOptions: ['310cc'],
        colors: ['Red', 'Black'],
    }
];

export default function BuyPage() {
    const { id } = useParams();
    const bike = bikes.find((b) => b.id === Number(id));

    const [color, setColor] = useState(bike.colors[0]);
    const [engine, setEngine] = useState(bike.engineOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const [abs, setAbs] = useState(false);

    if (!bike) return <p className="p-6">Bike not found!</p>;

    const handleBuy = () => {
        alert(`
      ✅ Purchase Summary:
      Bike: ${bike.name}
      Color: ${color}
      Engine: ${engine}
      Quantity: ${quantity}
      ABS: ${abs ? 'Yes' : 'No'}
      Total: Rs. ${bike.price * quantity}
    `);
    };

    return (
        <div className='min-h-screen bg-gradient-to-r from-black to-white/80 text-black p-20'>

            <div className="max-w-lg mx-auto bg-white rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Buy {bike.name}</h1>
                <p className="text-xl font-bold mb-2 text-red-600">Price: Rs. {bike.price}</p>

                {/* Color Option */}
                <label className="block mb-2 font-semibold">Select Color:</label>
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="border rounded p-2 w-full mb-4"
                >
                    {bike.colors.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                {/* Engine Option */}
                <label className="block mb-2 font-semibold">Select Engine CC:</label>
                <select
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    className="border rounded p-2 w-full mb-4"
                >
                    {bike.engineOptions.map((cc) => (
                        <option key={cc} value={cc}>
                            {cc}
                        </option>
                    ))}
                </select>

                {/* Quantity */}
                <label className="block mb-2 font-semibold">Quantity:</label>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border rounded p-2 w-full mb-4"
                />

                {/* Extra Feature */}
                <label className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={abs}
                        onChange={() => setAbs(!abs)}
                        className="mr-2"
                    />
                    Add ABS (+ Rs. 20,000)
                </label>

                {/* Buy Button */}
                <button
                    onClick={handleBuy}
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Confirm Purchase
                </button>
            </div>
        </div>
    );
}
