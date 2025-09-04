'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 10,
    name: 'Crossfire HJ 250',
    price: 400000,
    image: '/hj250.jpg',
    description: 'When it comes to off-road adventures, the Crossfire HJ 250 emerges as the perfect companion, blending the qualities of a natural all-rounder with the potential to conquer every terrain. This machine is more than just a  motorcycle; it’s a versatile powerhouse designed to tackle the challenges of both city streets and rugged trails. With its robust build and advanced features, the HJ 250 promises an exhilarating ride that meets the demands of every adventure seeker.',
  },
  {
    id: 11,
    name: 'Crossfire RM 250',
    price: 500000,
    image: '/rm250.jpg',
    description: 'The Crossfire RM 250 stands as a pinnacle of off-road performance, encapsulating the essence of dirtbike styling with a touch of premium flair. Built upon familiar foundations but distinguished by more premium graphics, the RM 250 promises enthusiasts an elevated off-road experience. From its aggressive front styling to the reinforced steel engine guard, this machine is designed to conquer diverse terrains with style.',
  },
  {
    id: 12,
    name: 'Crossfire RMZ 250',
    price: 650000,
    image: '/rmz250.webp',
    description: 'Crossfire’s RMZ 250 isn’t just another dirt bike—it’s a revival. The original RM 250 was once the go-to choice for adrenaline junkies in Nepal, celebrated for its agility and thrill factor. The RMZ 250 builds on that legacy but elevates it with contemporary upgrades. Designed for hardcore enduro enthusiasts, this model promises to deliver unmatched performance while cementing Crossfire’s reputation as a trusted name in Nepal’s off-road segment.',
  },
];

export default function ProductDetailsPage3() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-black to-white/80'>  
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
              <button className="mt-3 ml-3 px-18 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Buy
              </button>
            </Link>
          </div>
      </div>
    </div>
    </div>
  );
}
