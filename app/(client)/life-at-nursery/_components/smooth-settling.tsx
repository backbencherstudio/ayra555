import React from 'react'
import bg from '@/public/images/workers-bg.png'
import Image from 'next/image'
import VisitImgOne from '@/public/images/visit-01.png'
import VisitImgTwo from '@/public/images/visit-02.png'
import VisitImgThree from '@/public/images/visit-03.png'
import VisitImgFour from '@/public/images/visit-04.png'
import BgLeft from '@/public/images/bg-left.png'
import BgRight from '@/public/images/bg-right.png'

interface VisitCard {
  image: string;
  title: string;
  description: string;
  bgColor: string;
}

const visitCards: VisitCard[] = [
  {
    image: VisitImgOne.src,
    title: "1st visit",
    description: "Parent & child attend together.",
    bgColor: "bg-[#7CC466]"
  },
  {
    image: VisitImgTwo.src,
    title: "2nd visit",
    description: "Parent may step out once the child is comfortable.",
    bgColor: "bg-[#FFB84C]"
  },
  {
    image: VisitImgThree.src,
    title: "3rd visit",
    description: "Your child may feel confident to explore independently",
    bgColor: "bg-[#FF8080]"
  },
  {
    image: VisitImgFour.src,
    title: "If not settled",
    description: "Arrange more settles No worries!",
    bgColor: "bg-[#FFB84C]"
  }
];

export default function SmoothSettling() {
  return (
    <>

      <section className="relative w-full py-16">
        <Image
          src={bg}
          alt="Smooth Settling"
          className="w-full object-cover"
        />
        <div className='py-24'>
          {/* Top Scalloped Edge */}
          <div className="absolute top-0 left-0 right-0 h-8">
            <svg width="100%" height="100%" viewBox="0 0 100 16" preserveAspectRatio="none">
              <path
                d="M0 16 C 20 16, 20 0, 40 0 C 60 0, 60 16, 80 16 C 100 16, 100 0, 100 0 L 100 16 L 0 16 Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute md:left-[150px] xl:left-[450px] top-72 hidden lg:block">
            <Image src={BgLeft} alt="Decorative Left" width={80} height={80} />
          </div>
          <div className="absolute md:right-[100px] xl:right-[300px] top-64  hidden lg:block">
            <Image src={BgRight} alt="Decorative Right" width={50} height={50} />
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#262925] mb-4">
                Smooth Settling
              </h2>
              <p className="text-base sm:text-lg text-[#262925] max-w-2xl mx-auto">
                We offer 3 settling-in sessions; however, we may need to increase the sessions depending on how your little one feels at nursery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-24 sm:mb-28 lg:mb-32">
              {visitCards.map((card, index) => (
                <div key={index} className="relative pb-24 sm:pb-28 lg:pb-32">
                  <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className={`${card.bgColor} absolute h-[150px] -bottom-[2px] left-[5%] right-[5%] p-4 sm:p-5 lg:p-6 text-center rounded-2xl shadow-lg`}>
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium text-white mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
