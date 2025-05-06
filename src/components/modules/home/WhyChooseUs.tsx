'use client';

import Image from 'next/image';
import usImage from '@/assets/images/us.jpg';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1 w-full h-full">
          <Image
            src={usImage}
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-xl"
            style={{ maxHeight: '400px' }}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
            <li>-100% Genuine & Verified Medicines from top pharmaceutical companies.</li>
            <li>-Easy-to-use search and filtering to find your needs instantly.</li>
            <li>-Upload prescription for special medications with secure verification.</li>
            <li>-Safe and encrypted payments through SurjoPay, bKash & more.</li>
            <li>-Fast delivery across all regions of Bangladesh.</li>
            <li>-Excellent customer support and real-time order tracking.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;