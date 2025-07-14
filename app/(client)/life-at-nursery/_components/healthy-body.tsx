import React from "react";
import Image from "next/image";
import BottlesImg from "@/public/images/MilkChars-01.png";
import AnimatedBottlesImg from "@/public/images/MilkChars-02.png";

export default function HealthyBody() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 bg-[#FCF8E3] rounded-3xl shadow-md">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#262925] mb-8 text-center tracking-tight">
        🍽️ Our Approach to Mealtimes at BabyGrow Nursery
      </h3>
      <p className="text-base sm:text-lg text-[#434642] mb-6 text-center max-w-2xl mx-auto leading-relaxed">
        At BabyGrow, we believe that healthy eating habits start in the earliest
        years. That’s why we’ve created a <b>thoughtfully balanced menu</b>,
        designed to support both development and enjoyment at mealtimes.
      </p>
      <p className="text-base sm:text-lg text-[#434642] mb-14 text-center max-w-2xl mx-auto leading-relaxed">
        To best meet the needs of growing children, we’ve carefully{" "}
        <b>split our food menu into two age groups</b>:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Column: 3–12 Months */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[370px]">
          <h4 className="text-lg sm:text-xl font-bold text-[#262925] mb-4 flex items-center gap-2">
            <span>👶</span> 3–12 Months
          </h4>
          <p className="text-base sm:text-lg text-[#434642] mb-8 leading-relaxed">
            For babies who are weaning, our meals are prepared in appropriate
            textures — from purées and mashed foods to soft finger foods as they
            become more confident eaters. Each meal is gentle on tiny tummies
            and free from added salt or sugar.
          </p>
          <div className="mt-auto w-full flex justify-center">
            <Image
              src={AnimatedBottlesImg}
              alt="Animated Bottles"
              className="w-full max-w-md h-auto object-contain rounded-xl"
              placeholder="blur"
            />
          </div>
        </div>
        {/* Right Column: 1–3 Years */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col justify-between min-h-[370px]">
          <div className="mb-8 flex justify-center">
            <Image
              src={BottlesImg}
              alt="Bottles"
              className="w-full max-w-xs h-auto object-contain rounded-xl"
              placeholder="blur"
            />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#262925] mb-4 flex items-center gap-2">
            <span>👧</span> 1–3 Years
          </h4>
          <p className="text-base sm:text-lg text-[#434642] leading-relaxed">
            As children become more independent, we serve nutritious,
            family-style meals that encourage self-feeding, develop confidence,
            and expose little ones to a wide range of tastes and textures.
          </p>
        </div>
      </div>
      {/* Food Values Section */}
      <div className="mt-20 pt-10 border-t border-[#e0e0c0]">
        <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-6 text-[#262925]">
          <span role="img" aria-label="leaf">
            🌱
          </span>{" "}
          Our Food Values
        </h3>
        <ul className="list-disc list-inside space-y-4 text-base sm:text-lg text-[#434642] mb-8 pl-4">
          <li>
            <b>No added sugar or salt</b> — we use natural sweeteners like fruit
            and dates when needed
          </li>
          <li>
            <b>Freshly prepared</b> on site every day
          </li>
          <li>
            <b>Vegetarian options</b> available with every meal
          </li>
          <li>
            We are <b>allergy-aware</b> and will always adapt meals for dietary
            requirements
          </li>
          <li>
            We <b>partner with parents</b> — your preferences and routines are
            respected and valued
          </li>
        </ul>
        <p className="text-base sm:text-lg text-[#434642] text-center max-w-2xl mx-auto leading-relaxed">
          At BabyGrow, mealtimes are more than just food — they’re a time for
          connection, learning, and love. We are proud to nourish children’s
          bodies while supporting healthy habits that will last a lifetime.
        </p>
      </div>
    </section>
  );
}
