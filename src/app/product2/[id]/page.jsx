'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 7,
    name: 'Hero Xtreme 125R',
    price: 400000,
    image: '/xtreme125r.jpg',
    description: 'The Hero Xtreme 125R is powered by a 124.7cc, single-cylinder, air-cooled engine that produces 11.2 PS at 8,000 rpm and 11 Nm of torque at 6,500 rpm. The engine is paired with a 5-speed transmission. The Xtreme 125R features a sporty design, aggressive styling, and a fully digital instrument cluster. It is known for its nimble handling and is suitable for both city commuting and spirited rides.',
  },
  {
    id: 8,
    name: 'Xpulse 210',
    price: 500000,
    image: '/xpulse210.png',
    description: 'The Hero Xpulse 210 is powered by a 210cc, single-cylinder, air-cooled engine that produces 18.8 PS at 8,500 rpm and 17.3 Nm of torque at 6,500 rpm. The engine is paired with a 5-speed transmission. The Xpulse 210 features a rugged design, long-travel suspension, and a fully digital instrument cluster. It is known for its off-road capabilities and is suitable for both city commuting and adventure touring.',
  },
  {
    id: 9,
    name: 'Mavrick 440',
    price: 650000,
    image: '/mavrick440.jpg',
    description: 'The Hero Mavrick 440 is powered by a 440cc, single-cylinder, air-cooled engine that produces 27 PS at 8,000 rpm and 38 Nm of torque at 6,500 rpm. The engine is paired with a 6-speed transmission. The Mavrick 440 features a muscular design, long-travel suspension, and a fully digital instrument cluster. It is known for its versatility and is suitable for both city commuting and adventure touring.',
  },
];

export default function ProductDetailsPage2() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className='min-h-screen bg-gray-300'>  
    <div className="w-180 max-w-3xl mx-auto p-2">
      
      <div className="bg-white text-black rounded-lg shadow-md p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={600} 
          height={400}
          className="rounded-lg object-cover w-full h-120 mb-4"
        />
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        <p className="text-sm mb-4">{product.description}</p>
        <div className='flex justify-between items-center'>
            <p className="text-2xl font-semibold text-red-600">
              Rs. {product.price}
            </p>

            {/* ✅ Buy Button */}
            <Link href={`/buy/${product.id}`}>
              <button className="mt-3 ml-3 px-18 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
                Buy
              </button>
            </Link>
          </div>
      </div>
    </div>
    </div>
  );
}
