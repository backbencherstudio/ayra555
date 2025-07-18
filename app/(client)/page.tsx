// import Image from "next/image";
import Link from "next/link";
// import BabyGrow from "@/public/images/baby-grow.png";
import LeftTopCloud from "@/public/icons/left-top-cloude";
import LeftBottomCloud from "@/public/icons/left-bottom-cloude";
import RightTopCloud from "@/public/icons/right-top-cloude";
import RightBottomCloud from "@/public/icons/right-bottom-cloude";
import ContactUs from "./_components/contact-us";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FBC4D0] to-[#FEE8ED]">
      {/* Cloud decoration */}
      <div className="hidden md:block absolute top-0 left-40 z-0">
        <LeftTopCloud />
      </div>
      <div className="hidden md:block absolute top-28 left-[350px] z-0">
        <LeftBottomCloud />
      </div>
      <div className="hidden md:block absolute top-8 right-[650px] z-0">
        <RightBottomCloud />
      </div>
      <div className="hidden md:block absolute -top-0 right-40 z-0">
        <RightTopCloud />
      </div>

      {/* Main content */}
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 py-8 md:py-0">
        {/* Logo */}
        <div className="w-[242px] h-[242px] md:w-[242px] md:h-[242px] relative mb-6 md:mb-8 mt-4 md:mt-6">
          {/* <div className="rounded-full bg-white p-4 shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src={BabyGrow}
                alt="Baby Grow Logo"
                width={242}
                height={242}
                className="object-contain"
                priority
              />
            </div>
          </div> */}
        </div>

        {/* Text content */}
        <h1 className="text-xl md:text-[48px] font-medium text-[#7CC466] mb-4 leading-tight">
          {/* We are now looking after <br /> 3 months- 36 months. */}
          We are a day nursery caring <br /> for babies from 3 months.
        </h1>

        <p className="text-base md:text-lg text-green-600 px-4">
          Planting big dreams in little hearts
        </p>

        {/* Contact button */}
        <Link
          href="/"
          className="inline-block rounded-lg mt-8 md:mt-[60px] border-2 border-[#62C544] bg-gradient-to-b from-[rgba(168,240,147,0.90)] to-[rgba(77,193,41,0.90)] text-white px-6 md:px-8 py-2 md:py-3 transition-colors text-base md:text-lg"
        >
          Contact Us
        </Link>
      </div>

      <div className="mt-[20px] md:mt-[100px] lg:mt-[150px] xl:mt-[236px]">
        <ContactUs />
      </div>
      <Footer quote="A baby is the beginning of everything-hope, dreams and endless love." />
    </main>
  );
}
