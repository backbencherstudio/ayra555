import React from 'react';
import Image from 'next/image';
import operateOne from '@/public/images/ope-01.png'
import operateTwo from '@/public/images/ope-02.png'
import operateThree from '@/public/images/ope-03.png'
import operateFour from '@/public/images/ope-04.png'
import operateFive from '@/public/images/ope-05.png'
import operateSix from '@/public/images/ope-06.png'

interface OperateCard {
    title: string;
    description: string;
    image: string;
}

const operateCards: OperateCard[] = [
    {
        title: "Early Years Educators",
        description: "Baby Grow is formed of outstanding early years educators who live by to \"teaching through play\" philosophy.",
        image: operateOne.src
    },
    {
        title: "First Aid Training",
        description: "All our educators have pediatric first aid training.",
        image: operateTwo.src
    },
    {
        title: "Level 3 Childcare",
        description: "All our educators hold a level 3 in childcare.",
        image: operateThree.src
    },
    {
        title: "Fun Activities",
        description: "Our Team will create days full of fun and educational activities.",
        image: operateFour.src
    },
    {
        title: "Key Worker System",
        description: "We implement a strict key worker system so we can build strong relationships with each child allowing us to tailor activities to their interest's and developmental stage.",
        image: operateFive.src
    },
    {
        title: "Continuous Training",
        description: "All our educators have completed the necessary baby training courses and are continuously training to ensure the highest standard of care.",
        image: operateSix.src
    }
];

export default function Operate() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl leading-16 font-medium text-[#434642] text-center mb-16">
                    How We Operate
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {operateCards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <p className="text-[#262925] pr-8 text-base leading-6">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
