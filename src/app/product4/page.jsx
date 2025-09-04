'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 13,
    name: 'Apache RTR 200',
    price: 400000,
    image: '/apache200.webp',
  },
  {
    id: 14,
    name: 'TVS Ronin',
    price: 500000,
    image: '/ronin.jpg',
  },
  {
    id: 15,
    name: 'TVS RR310',
    price: 650000,
    image: '/rr310.webp',
  },
];

export default function Product4() {
  return (
    <div className='bg-gradient-to-r from-black to-white/80 h-screen w-full'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pt-10">
      {items.map((bike) => (
        <div key={bike.id} className="bg-white text-black rounded-lg shadow p-4 hover:scale-105 transition-transform">
          <Image
            src={bike.image}
            alt={bike.name}
            width={300}
            height={200}
            className="object-cover w-full h-70 mb-4"
          />
          <h3 className="text-xl font-semibold">{bike.name}</h3>
          <p className="text-lg text-red-600">Rs. {bike.price}</p>
          <Link href={`/product4/${bike.id}`}>
            <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              View Details
            </button>
          </Link>
          {/* Buy Button */}
          <Link href={`/buy/${bike.id}`}>
            <button className="mt-3 ml-3 px-12 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Buy
            </button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
