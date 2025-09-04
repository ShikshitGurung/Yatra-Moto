'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 4,
    name: 'KTM Duke 200',
    price: 400000,
    image: '/duke200.webp',
    description:
      'The KTM Duke 200 is powered by a 199.5cc, single-cylinder, liquid-cooled engine that produces 25 PS at 10,000 rpm and 19.2 Nm of torque at 8,000 rpm. The engine is paired with a 6-speed transmission. The Duke 200 features a lightweight trellis frame, aggressive styling, and a fully digital instrument cluster. It is known for its sharp handling and is suitable for both city commuting and spirited rides.',
  },
  {
    id: 5,
    name: 'KTM Duke 390',
    price: 500000,
    image: '/duke390.webp',
    description:
      'The KTM Duke 390 is powered by a 373.2cc, single-cylinder, liquid-cooled engine that produces 43 PS at 9,000 rpm and 37 Nm of torque at 7,000 rpm. The engine is paired with a 6-speed transmission. The Duke 390 features a lightweight trellis frame, aggressive styling, and a fully digital instrument cluster. It is known for its sharp handling and is suitable for both city commuting and spirited rides.',
  },
  {
    id: 6,
    name: 'KTM RC 200',
    price: 650000,
    image: '/rc200.webp',
    description:
      'The KTM RC 200 is powered by a 199.5cc, single-cylinder, liquid-cooled engine that produces 25 PS at 10,000 rpm and 19.2 Nm of torque at 8,000 rpm. The engine is paired with a 6-speed transmission. The RC 200 features a lightweight trellis frame, aggressive styling, and a fully digital instrument cluster. It is known for its sharp handling and is suitable for both city commuting and spirited rides.',
  },
];

export default function ProductDetailsPage1() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-white/80">
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
