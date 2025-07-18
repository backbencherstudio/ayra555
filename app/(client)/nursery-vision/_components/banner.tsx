import React from "react";
import Image from "next/image";
import BabyClothes from "@/public/images/baby-clothes.png";
import Link from "next/link";

export default function Banner() {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-4xl sm:text-[42px] md:text-5xl leading-tight font-medium text-[#578947] mb-6 sm:mb-8 md:mb-[40px]">
            Nursery Vision
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-[#434642]">
          Experts in the earliest years
          </h2>
          <p className="text-base sm:text-lg text-[#5E615D] leading-relaxed">
            Our team consists of passionate and caring educators with extensive
            expertise in infant development
          </p>
          <Link href="/contact-us">
            <button className="inline-block rounded-lg mt-20 sm:mt-28 md:mt-40 border-2 border-[#62C544] bg-gradient-to-b text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 transition-colors text-sm sm:text-base md:text-lg cursor-pointer hover:bg-gradient-to-t from-[rgba(168,240,147,0.90)] to-[rgba(77,193,41,0.90)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl p-4 sm:p-6 md:p-8">
            <div className="relative aspect-square w-full max-w-[490px] mx-auto">
              <Image
                src={BabyClothes}
                alt="Baby Clothes and Accessories"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 490px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
