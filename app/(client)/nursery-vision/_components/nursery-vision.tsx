import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import StarIcon from '@/public/icons/star-icon';
import InclusionIcon from '@/public/icons/inclusion-icon';
import FamilyFocusedIcon from '@/public/icons/family-focused-icon';
import SafetyIcon from '@/public/icons/safety-icon';
import PlayToLearnIcon from '@/public/icons/play-to-learn-icon';

interface VisionCard {
    title: string;
    description: string;
    Icon?: React.ComponentType; // Changed from icon?: React.ReactNode
}

const visionCards: VisionCard[] = [
    {
        Icon: StarIcon,
        title: "Quality educators",
        description: "With a wealth of experience in infant care, our compassionate team are devoted to nurturing young children's growth and development."
    },
    {
        Icon: InclusionIcon,
        title: "Inclusion",
        description: "We embrace diversity, ensuring every child feels valued. We celebrate each child's unique identity and create a space for all."
    },
    {
        Icon: PlayToLearnIcon,
        title: "Play to learn",
        description: "Play gives children a chance to practice what they are learning. Play is not frivolous, it is brain building. Play is the highest form of research."
    },
    {
        Icon: SafetyIcon,
        title: "Safety and security",
        description: "Safety is our highest priority. We carry out a thorough and strict recruitment process to ensure every team member meets the highest safeguarding standards including DBS checks, reference verification, medical risk assessments, and regular training in safeguarding and child protection."
    },
    {
        Icon: FamilyFocusedIcon,
        title: "Family Focused",
        description: "We believe in working hand-in-hand with parents to create a smooth and supportive learning journey for every child. By building strong home-nursery connections, we ensure that each child's experience feels consistent and nurturing across both settings. Our flexible approach is designed to meet the diverse needs of families, making it simple for parents to stay involved and informed so as of the"
    }
];

export default function NurseryVisionSection() {
    return (
        <section className="px-4 py-8 sm:py-12 md:py-16 relative min-h-screen">
            {/* Background Pattern */}
            <div
                className="absolute top-0 left-0 right-0 w-full h-[1120px] bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/nursery-section-bg.png')`,
                    backgroundSize: 'cover',
                    opacity: 0.9
                }}
            />

            <div className='container mx-auto py-20 sm:py-28 md:py-40'>
                <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-[2]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-medium text-[#434642] mb-4">Nursery Vision</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-[2]">
                    {visionCards.map((card, index) => (
                        <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="flex-shrink-0">
                                    {card.Icon && <card.Icon />}
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-[#262925]">{card.title}</h3>
                            </div>
                            <Separator className="bg-[#7CC466]/20" />
                            <p className="text-sm sm:text-base text-[#5E615D] leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
