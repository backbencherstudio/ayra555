import Image from "next/image";
import EyfsImageLeft from "@/public/images/curriculumLeft.png";
import EyfsImageRight from "@/public/images/curriculumRight.png";
import ThreeStarIcon from "@/public/icons/three-star-icon";

export default function CurriculumBanner() {
  return (
    <section className="bg-gradient-to-b py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-2">
            <ThreeStarIcon />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#578947] mb-2">
            Learning Through <br /> Play (EYFS)
          </h2>
          <p className="text-sm sm:text-base text-[#262925] mb-6">
            Learning is broad, interconnected and dynamic
          </p>
          <button className="inline-block rounded-lg mt-10 sm:mt-16 md:mt-24 border-2 border-[#62C544] bg-gradient-to-b text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 transition-colors text-sm sm:text-base md:text-lg cursor-pointer hover:bg-gradient-to-t from-[rgba(168,240,147,0.90)] to-[rgba(77,193,41,0.90)] focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50 duration-300">
            Contact Us
          </button>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center md:justify-end relative">
          {/* Left illustration - hidden on small screens */}
          <div className="absolute hidden md:block left-4 lg:left-14 top-10 lg:top-20 z-10">
            <Image
              src={EyfsImageLeft}
              alt="Child Drawing"
              className="w-40 sm:w-48 lg:w-60 h-auto object-contain "
              placeholder="blur"
            />
          </div>

          {/* Right illustration */}
          <div className="relative ">
            <Image
              src={EyfsImageRight}
              alt="Child Playing"
              className="w-64 sm:w-72 lg:w-96 h-auto object-contain"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
