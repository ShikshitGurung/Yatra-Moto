"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { bikes } from '../../data/bikes';
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchRef = useRef(null);

  const filteredBikes = searchTerm
    ? bikes.filter((bike) =>
        bike.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelect = (bikeId) => {
    setSearchTerm("");
    router.push(`/explore/${bikeId}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search bikes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 pl-10 rounded-full bg-gray-700 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:bg-gray-600 w-48 sm:w-64"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {searchTerm && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
          {filteredBikes.length > 0 ? (
            filteredBikes.map((bike) => (
              <div
                key={bike.id}
                onClick={() => handleSelect(bike.id)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-black"
              >
                {bike.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500">No bikes found.</div>
          )}
        </div>
      )}
    </div>
  );
}