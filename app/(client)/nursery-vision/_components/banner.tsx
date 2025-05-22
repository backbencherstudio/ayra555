import React from 'react';
import Image from 'next/image';
import BabyClothes from '@/public/images/baby-clothes.png';

export default function Banner() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-2">
          <h1 className="text-5xl leading-16 md:text-5xl font-medium text-[#578947] mb-[40px]">
            Nursery Vision
          </h1>
          <h2 className="text-base md:text-xl font-medium text-[#434642]">
            We are the baby experts
          </h2>
          <p className="text-base md:text-lg text-[#5E615D] leading-relaxed">
            Our team consists of passionate and caring educators with extensive expertise in infant development
          </p>
          <button
            className="inline-block rounded-lg mt-40 border-2 border-[#62C544] bg-gradient-to-b  text-white px-6 md:px-8 py-2 md:py-3 transition-colors text-base md:text-lg cursor-pointer hover:bg-gradient-to-t from-[rgba(168,240,147,0.90)] to-[rgba(77,193,41,0.90)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl p-8">
            <div className="relative aspect-square w-full">
              <Image
                src={BabyClothes}
                alt="Baby Clothes and Accessories"
                width={490}
                height={490}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
