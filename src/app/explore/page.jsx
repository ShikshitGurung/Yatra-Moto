"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

const bikes = [ {
    id: 1,
    name: 'Hunter 350',
    price: 400000,
    image: '/h350.jpg',
    description: 'The Royal Enfield Hunter 350 is powered by the same 349 cc, single-cylinder, air-cooled, fuel-injected counterbalanced engine as the Classic 350...',
    engineOptions: ['349cc', '350cc'],
    colors: ['Red', 'Black', 'Silver']
  },
  {
    id: 2,
    name: 'Royal Enfield Classic 350',
    price: 500000,
    image: '/c350.jpg',
    description: 'The Royal Enfield Classic 350 is powered by a 349cc air-cooled, single-cylinder engine that produces 20.2 horsepower and 27 Nm of torque...',
    engineOptions: ['346cc', '350cc'],
    colors: ['Green', 'Black', 'Blue']
  },
  {
    id: 3,
    name: 'Interceptor 650',
    price: 650000,
    image: '/interceptor650.jpg',
    description: 'The Royal Enfield Interceptor 650 is powered by a 648cc, air-cooled, parallel-twin engine. This engine delivers a smooth and torquey power delivery...',
    engineOptions: ['648cc'],
    colors: ['Orange', 'Black', 'White']
  },
  {
    id: 4,
    name: 'Himalayan Hanle Black',
    price: 1039500,
    image: '/HimalayanHanleBlack.webp',
    description: 'The Royal Enfield Himalayan Hanle Black is an adventure tourer with a 452cc engine, built for both on-road and off-road exploration...',
    engineOptions: ['452cc'],
    colors: ['Black']
  },
  {
    id: 5,
    name: 'KTM Duke 200',
    price: 400000,
    image: '/duke200.webp',
    description: 'The KTM Duke 200 is a lightweight naked bike with a 199.5cc engine, known for its sharp handling and aggressive styling...',
    engineOptions: ['199cc', '200cc'],
    colors: ['Orange', 'Black', 'White']
  },
    {
    id: 6,
    name: 'KTM Duke 390',
    price: 500000,      
    image: '/duke390.webp',
    description: 'The KTM Duke 390 is a powerful naked bike with a 373.2cc engine, offering a thrilling riding experience with advanced features...',
    engineOptions: ['373cc'],
    colors: ['Orange', 'Black', 'White']
  },
  {
    id: 7,          
    name: 'KTM RC 200',
    price: 650000,
    image: '/rc200.webp',
    description:
      'The KTM RC 200 is powered by a 199.5cc, single-cylinder, liquid-cooled engine that produces 25 PS at 10,000 rpm and 19.2 Nm of torque at 8,000 rpm. The engine is paired with a 6-speed transmission. The RC 200 features a lightweight trellis frame, aggressive styling, and a fully digital instrument cluster. It is known for its sharp handling and is suitable for both city commuting and spirited rides.',
    engineOptions: ['199cc', '200cc'],  
    colors: ['Orange', 'Black', 'White']
  },
  { 
    id: 8,
    name: 'KTM Adventure 390',
    price: 1074000,
    image: '/ktma390.webp',
    description:
      'The KTM Adventure 390 is powered by a 373.2cc, single-cylinder, liquid-cooled engine that produces 43 PS at 9,000 rpm and 37 Nm of torque at 7,000 rpm. The engine is paired with a 6-speed transmission. The Adventure 390 features a lightweight trellis frame, aggressive styling, and a fully digital instrument cluster. It is known for its sharp handling and is suitable for both city commuting and spirited rides.',
    engineOptions: ['373cc'],
    colors: ['Orange', 'Black', 'White']
  },
  { 
    id: 9,
    name: 'Hero Xpulse 125R',
    price: 400000,
    image: '/xtreme125r.jpg',
    description: 'The Hero Xpulse 125R is a versatile adventure bike with a 125cc engine, designed for both city commuting and off-road adventures...',
    engineOptions: ['125cc'],
    colors: ['Blue', 'Black', 'White']
    },  
    {
    id: 10,
    name: 'Xpulse 210',
    price: 500000,
    image: '/xpulse210.png',
    description: 'The Hero Xpulse 210 is an adventure motorcycle with a 200cc engine, offering a blend of performance and off-road capability...',
    engineOptions: ['210cc'],
    colors: ['Blue', 'Black', 'White']
},
  {
    id: 11,
    name: 'Mavrick 440',
    price: 650000,
    image: '/mavrick440.jpg',
    description: 'The Hero Mavrick 440 is powered by a 440cc, single-cylinder, air-cooled engine that produces 27 PS at 8,000 rpm and 38 Nm of torque at 6,500 rpm. The engine is paired with a 6-speed transmission. The Mavrick 440 features a muscular design, long-travel suspension, and a fully digital instrument cluster. It is known for its versatility and is suitable for both city commuting and adventure touring.',
    engineOptions: ['440cc'],
    colors: ['Grey', 'Black', 'White']
    },
    {
    id: 12,
    name: 'Super Splendor',
    price: 255900,
    image: '/splendor.jpg',
    description: 'The Hero Super Splendor is powered by a 124.7cc, single-cylinder, air-cooled engine that produces 11.2 PS at 8,000 rpm and 11 Nm of torque at 6,500 rpm. The engine is paired with a 5-speed transmission. The Super Splendor features a sleek design, comfortable seating, and a fully digital instrument cluster. It is known for its fuel efficiency and is suitable for daily commuting.',
    engineOptions: ['125cc'],
    colors: ['Grey', 'Black']
    },
    {
    id: 13,
    name: 'HJ 250',
    price: 400000,  
    image: '/hj250.jpg',
    description: 'The HJ 250 is a stylish street motorcycle with a 250cc engine, offering a balance of performance and comfort for urban riding...',
    engineOptions: ['250cc'],
    colors: ['Grey', 'Black', 'White']
    },
    {
    id: 14,
    name: 'RM 250',
    price: 500000,  
    image: '/rm250.jpg',
    description: 'The Crossfire RM 250 is a high-performance dirt bike with a 250cc engine, designed for off-road enthusiasts seeking adventure and thrill...',
    engineOptions: ['250cc'],
    colors: ['Grey', 'Black', 'White']
  },
    {
    id: 15,
    name: 'RMZ 250',
    price: 650000,  
    image: '/rmz250.webp',
    description: 'The Crossfire RMZ 250 is a high-performance motocross bike with a 250cc engine, designed for competitive racing and off-road performance...',
    engineOptions: ['250cc'],
    colors: ['Grey', 'Black', 'White']
  },
    {
    id: 16,
    name: 'Tracker 250',
    price: 700000,
    image: '/tracker250.jpg',
    description: 'The Tracker 250 is a versatile motorcycle designed for both on-road and off-road adventures, featuring a 250cc engine and rugged styling.',
    engineOptions: ['250cc'],
    colors: ['Grey', 'Black', 'White']
  },
    {
    id: 17,
    name: 'Apache RTR 200',
    price: 400000,
    image: '/apache200.webp',
    description: 'The Apache RTR 200 is a sporty motorcycle with a 200cc engine, designed for urban commuting and spirited rides.',
    engineOptions: ['200cc'],
    colors: ['Red', 'Black', 'White']
  },
    {
    id: 18,
    name: 'TVS Ronin',
    price: 500000,  
    image: '/ronin.jpg',
    description: 'The TVS Ronin is a modern motorcycle with a 225cc engine, offering a blend of performance and style for city riding.',
    engineOptions: ['225cc'],
    colors: ['Red', 'Black', 'White']
  },
    {
    id: 19,
    name: 'Raider',
    price: 450000,
    image: '/raider.webp',
    description: 'The Raider is a stylish and powerful motorcycle with a 150cc engine, perfect for city commuting and short rides.',
    engineOptions: ['150cc'],
    colors: ['Red', 'Black', 'White']
  },
    {
    id: 20,
    name: 'TVS RR 310',
    price: 650000,  
    image: '/rr310.webp',
    description: 'The TVS RR 310 is a premium sports bike that combines cutting-edge technology with a powerful performance. It is powered by a 312cc, single-cylinder, liquid-cooled engine that produces 34 PS of power and 27.3 Nm of torque. The bike features a fully-faired design, aggressive styling, and advanced features such as a TFT display, ride-by-wire throttle, and dual-channel ABS. With its lightweight chassis and high-performance components, the RR310 is designed for both track and street riding.',
    engineOptions: ['310cc'],
    colors: ['Red', 'Black', 'White']
  }
];

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
