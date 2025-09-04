'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 10,
    name: 'HJ 250',
    price: 400000,
    image: '/hj250.jpg',
  },
  {
    id: 11,
    name: 'RM 250',
    price: 500000,
    image: '/rm250.jpg',
  },
  {
    id: 12,
    name: 'RMZ 250',
    price: 650000,
    image: '/rmz250.webp',
  },
];

export default function Product3() {
  return (
    <div className='bg-gray-300 h-screen w-full'>
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
            <Link href={`/product3/${bike.id}`}>
              <button className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer">
                View Details
              </button>
            </Link>
            {/* Buy Button */}
          <Link href={`/buy/${bike.id}`}>
            <button className="mt-3 ml-3 px-12 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
              Buy
            </button>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
