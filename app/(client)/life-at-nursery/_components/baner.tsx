import React from "react";
import bannerImg from "@/public/images/banner-img.png";
import { Button } from "@/components/ui/button";
import BannerStarIcon from "@/public/icons/banner-star-icon";
import BannerIcon from "@/public/icons/banner-icon";
import Link from "next/link";

export default function LifeAtNurseryBanner() {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <BannerStarIcon className="w-8 sm:w-10 md:w-auto" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-medium text-[#7CC466] mb-2 sm:mb-3 md:mb-4">
              Life At Nursery
            </h1>
          </div>
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
            <p className="text-sm sm:text-base md:text-lg text-[#5E615D] leading-relaxed">
              Creating playful memories every day.
            </p>
            <BannerIcon className="w-8 sm:w-10 md:w-auto mt-1 sm:mt-2 md:mt-5" />
          </div>
          <Link href="/contact-us">
            <Button className="mt-6 sm:mt-8 md:mt-12 border-2 border-[#62C544] bg-gradient-to-b from-[rgba(168,240,147,0.90)] to-[rgba(77,193,41,0.90)] text-white hover:bg-gradient-to-t text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl sm:rounded-[24px] md:rounded-[32px] p-3 sm:p-4 md:p-8">
            <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[490px] mx-auto">
              <img
                src={bannerImg.src}
                alt="Children playing with blocks"
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
