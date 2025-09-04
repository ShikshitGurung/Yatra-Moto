'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    name: 'Hunter 350',
    price: 400000,
    image: '/h350.jpg',
    description:
      'The Royal Enfield Hunter 350 is powered by the same 349 cc, single-cylinder, air-cooled, fuel-injected counterbalanced engine as the Classic 350, but with a few minor changes. The motor produces the same 20.48 PS at 6,100 rpm and a torque of 27 Nm at 4,000 rpm. The engine is paired with a 5-speed transmission. Given its displacement, RE claims a peak speed of 114 km/h and a mileage of 36 km/l. The fuel tank on the bike is 13 liters.',
  },
  {
    id: 2,
    name: 'Classic 350',
    price: 500000,
    image: '/c350.jpg',
    description:
      'The Royal Enfield Classic 350 is powered by a 349cc air-cooled, single-cylinder engine that produces 20.2 horsepower and 27 Nm of torque. The engine is paired with a 5-speed transmission that provides smooth and responsive shifting. The machine can reach speeds of up to 130 km/h, making it suitable for highway cruising. The Classic 350 features a retro design with a round headlamp, teardrop fuel tank, and spoked wheels. It also comes with modern features such as a digital-analog instrument cluster, LED tail lamp, and dual-channel ABS for enhanced safety.',
  },
  {
    id: 3,
    name: 'Interceptor 650',
    price: 650000,
    image: '/interceptor650.jpg',
    description:
      'The Royal Enfield Interceptor 650 is powered by a 648cc, air-cooled, parallel-twin engine. This engine delivers a smooth and torquey power delivery that is ideal for riding in the city or cruising down the highway. The engine is paired with a six-speed  gearbox that provides smooth and precise shifting. The Interceptor 650 has a top speed of around 160 km/h and can accelerate from 0 to 100 km/h in just over 5 seconds. The bike features a classic retro design with a round headlamp, teardrop fuel tank, and dual exhausts that give it a distinctive look. It also comes with modern features such as a digital-analog instrument cluster, LED tail lamp, and dual-channel ABS for enhanced safety.',
  },
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-300 py-6 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-white text-black rounded-lg shadow-md p-4 sm:p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-120"
          />
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{product.name}</h1>
          <p className="text-sm sm:text-base mb-4 leading-relaxed">{product.description}</p>
          <div className="flex sm:flex-row justify-between items-center sm:items-center gap-4">
            <p className="text-xl sm:text-2xl font-semibold text-red-600">
              Rs. {product.price}
            </p>

            {/* ✅ Buy Button */}
            <Link href={`/buy/${product.id}`}>
              <button className="px-16 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
