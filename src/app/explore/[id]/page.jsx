'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBikeById } from '../../../data/bikes';

export default function DetailsPage() {
  const { id } = useParams();
  const bike = getBikeById(id);

  if (!bike) {
    notFound(); // Renders the 404 page if the bike isn't found
  }

  return (
    <div className="min-h-screen bg-gray-300 py-10 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white text-black rounded-lg shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src={bike.image}
              alt={bike.name}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
              priority // Prioritize loading the main product image
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{bike.name}</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">{bike.description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-2xl sm:text-3xl font-bold text-red-600">
                  Rs. {bike.price.toLocaleString('en-NP')}
                </p>

                {/* ✅ CORRECTED: The <Link> is now styled as the button, removing the invalid nested <button> tag. */}
                <Link
                  href={`/buy/${bike.id}`}
                  className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Buy Now
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}