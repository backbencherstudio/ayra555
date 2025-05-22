import React from 'react'
import FirstTimeAtNurseImg from '@/public/images/first-time-bg.png'
import Image from 'next/image'

export default function FirstTimeAtNursery() {
    return (
        <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[750px]">
            <Image
                src={FirstTimeAtNurseImg}
                alt="First Time at Nursery Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0" />

            <div className="relative container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[750px]">
                <div className="mx-auto text-center text-white max-w-[280px] sm:max-w-[540px] md:max-w-[900px]">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl leading-normal sm:leading-relaxed md:leading-16 font-medium mb-4 sm:mb-5 md:mb-8">
                        First Time at Nursery
                    </h2>
                    <p className="text-base sm:text-xl md:text-[32px] leading-normal sm:leading-relaxed md:leading-11">
                        Starting nursery is a big moment and we are here to make that journey as gentle as possible for both your little one and you. We offer settles to ensure a smooth transition to help both baby and parent to feel comfortable, confident and supported every step of the way.
                    </p>
                </div>
            </div>
        </div>
    )
}
