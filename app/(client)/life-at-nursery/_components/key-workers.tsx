import React from 'react'
import KeyWorkersOne from '@/public/images/worker-01.png'
import KeyWorkersTwo from '@/public/images/worker-02.png'
import KeyWorkersThree from '@/public/images/worker-03.png'

export default function KeyWorkers() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
      <div className="flex flex-col items-center lg:flex-row gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#262925] mb-4 sm:mb-6">
            Key workers
          </h2>
          <p className="text-base sm:text-lg md:text-base text-[#262925] leading-6">
            Through our key person approach, we promote stability and trust by assigning a consistent educator to support each child&apos;s individual needs, serving as the primary contact for families.
          </p>
        </div>

        {/* Right Images Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-6">
          {/* Left Large Image - Full Height */}
          <div className="relative h-full min-h-[600px]">
            <img
              src={KeyWorkersOne.src}
              alt="Key Worker Teaching"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              
            />
          </div>
          
          {/* Right Two Images - Equal Height */}
          <div className="grid grid-rows-2 gap-6 h-full">
            <div className="relative h-full">
              <img
                src={KeyWorkersTwo.src}
                alt="Key Worker Activities"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative h-full">
              <img
                src={KeyWorkersThree.src}
                alt="Key Worker Teaching"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
