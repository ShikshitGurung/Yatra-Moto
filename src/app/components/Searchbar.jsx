"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Available bikes
const bikes = [
  { id: 1, name: "Hunter 350", price: 400000, path: "/product/1" },
  { id: 2, name: "Classic 350", price: 500000, path: "/product/2" },
  { id: 3, name: "Interceptor 650", price: 650000, path: "/product/3" },
  { id: 4, name: "KTM Duke 200", price: 400000, path: "/product1/4" },
  { id: 5, name: "KTM Duke 390", price: 500000, path: "/product1/5" },
  { id: 6, name: "KTM RC 200", price: 650000, path: "/product1/6" },
  { id: 7, name: "Hero Xpulse 125R", price: 400000, path: "/product2/7" },
  { id: 8, name: "Xpulse 210", price: 500000, path: "/product2/8" },
  { id: 9, name: "Mavrick 440", price: 650000, path: "/product2/9" },
  { id: 10, name: "HJ 250", price: 400000, path: "/product3/10" },
  { id: 11, name: "RM 250", price: 500000, path: "/product3/11" },
  { id: 12, name: "RMZ 250", price: 650000, path: "/product3/12" },
  { id: 13, name: "Apache RTR 200", price: 400000, path: "/product4/13" },
  { id: 14, name: "TVs Ronin", price: 500000, path: "/product4/14" },
  { id: 15, name: "TVS RR 310", price: 650000, path: "/product4/15" },
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Filter bikes by name
  const filtered = bikes.filter((bike) =>
    bike.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // When user clicks a bike
  const handleSelect = (path) => {
    setSearchTerm("");
    router.push(path); // navigate to product page
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search bikes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 rounded-4xl bg-transparent border border-white text-black placeholder-gray-300 outline-none transition-all duration-300 focus:border focus:border-red-500 w-64"
      />

      {/* Dropdown Results */}
      {searchTerm && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((bike) => (
              <div
                key={bike.id}
                onClick={() => handleSelect(bike.path)}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black"
              >
                {bike.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-red-500">Bike is unavailable ❌</div>
          )}
        </div>
      )}
    </div>
  );
}
