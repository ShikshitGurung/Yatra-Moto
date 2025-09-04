'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 13,
    name: 'Apache RTR 200',
    price: 400000,
    image: '/apache200.webp',
    description: 'The Apache RTR 200 is a powerful and stylish motorcycle designed for urban commuting and spirited rides. With its aggressive design, advanced features, and a potent engine, it delivers an exhilarating riding experience. The bike is equipped with a 197.75cc, single-cylinder, oil-cooled engine that produces 20.5 PS of power and 18.1 Nm of torque, making it suitable for both city traffic and open highways.',
  },
  {
    id: 14,
    name: 'TVS Ronin',
    price: 500000,
    image: '/ronin.jpg',
    description: 'The TVS Ronin is a versatile motorcycle that combines modern design with advanced technology. It features a 225cc, single-cylinder engine that delivers a smooth and responsive ride. The Ronin is equipped with a host of features, including a digital instrument cluster, LED lighting, and a comfortable seating position, making it ideal for both city commuting and weekend getaways.',
  },
  {
    id: 15,
    name: 'TVS RR310',
    price: 650000,
    image: '/rr310.webp',
    description: 'The TVS RR310 is a premium sports bike that combines cutting-edge technology with a powerful performance. It is powered by a 312cc, single-cylinder, liquid-cooled engine that produces 34 PS of power and 27.3 Nm of torque. The bike features a fully-faired design, aggressive styling, and advanced features such as a TFT display, ride-by-wire throttle, and dual-channel ABS. With its lightweight chassis and high-performance components, the RR310 is designed for both track and street riding.',
  },
];

export default function ProductDetailsPage4() {
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
