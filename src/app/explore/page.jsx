"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

const bikes = [ /* ... your bikes list ... */ ];

function ExploreContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit");
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  let filteredBikes = bikes;

  if (limit) {
    const n = Number(limit);
    if (!Number.isNaN(n) && n > 0) filteredBikes = bikes.slice(0, n);
  } else if (start && end) {
    const s = Number(start);
    const e = Number(end);
    if (!Number.isNaN(s) && !Number.isNaN(e)) {
      filteredBikes = bikes.filter((bike) => bike.id >= s && bike.id <= e);
    }
  }

  const handleAddToCart = (bike) => {
    addToCart(bike);
    alert(`${bike.name} has been added to your cart!`);
  };

  return (
    <div className="min-h-screen w-full bg-gray-300 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-black mb-10">
        All available Bikes
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-white text-black rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={bike.image}
              alt={bike.name}
              width={400}
              height={250}
              className="object-cover w-full h-56 rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{bike.name}</h3>
            <p className="text-lg font-semibold text-red-600">
              Rs. {bike.price}
            </p>

            <div className="mt-4 flex gap-5">
              <Link href={`/explore/${bike.id}`}>
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  View Details
                </button>
              </Link>

              <button
                onClick={() => handleAddToCart(bike)}
                className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Explore() {
  return (
    <Suspense fallback={<p className="text-center text-lg">Loading bikes...</p>}>
      <ExploreContent />
    </Suspense>
  );
}
