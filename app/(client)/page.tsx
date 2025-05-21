import Image from "next/image";
import Link from "next/link";
import BabyGrow from '@/public/images/baby-grow.png'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Cloud decorations */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full opacity-50" />
        <div className="absolute top-20 right-20 w-24 h-14 bg-white rounded-full opacity-50" />
        <div className="absolute bottom-40 left-1/4 w-16 h-10 bg-white rounded-full opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-20 h-12 bg-white rounded-full opacity-50" />
      </div> */}

      {/* Main content */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Logo */}
        <div className="w-32 h-32 relative mb-8">
          <div className="rounded-full bg-white p-4 shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src={BabyGrow}
                alt="Baby Grow Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-3xl md:text-4xl font-medium text-green-500 mb-4 max-w-2xl">
          We are a day nursery caring for babies 3 months- 24 months.
        </h1>

        <p className="text-lg text-green-600 mb-8">
          Planting big dreams in little hearts
        </p>

        {/* Contact button */}
        <Link
          href="/contact-us"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors text-lg"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
