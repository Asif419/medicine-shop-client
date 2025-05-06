'use client';

import Link from 'next/link';
import Image from 'next/image';
import medicineImage from '@/assets/images/medicine.jpg';

const BrandingSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
            Welcome to MediMart
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Empowering Health Through <span className="text-black">Trusted Care</span>
          </h1>
          <p className="md:max-w-2/3 text-lg text-gray-600 mb-8">
            Discover a faster, safer way to get your medicines. MediMart brings authentic healthcare products to your door with just a few clicks.
          </p>
          <Link href="/shop">
            <button className="bg-black text-white px-6 py-3 text-base rounded-xl hover:bg-gray-800 transition">
              Explore Our Products
            </button>
          </Link>
        </div>
        <div className="flex-1 w-full">
          <Image
            src={medicineImage}
            alt="Online pharmacy illustration"
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default BrandingSection;