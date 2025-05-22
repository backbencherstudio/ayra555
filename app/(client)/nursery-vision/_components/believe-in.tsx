import React from 'react';
import { Separator } from '@/components/ui/separator';
import PepoleIcon from '@/public/icons/pepole-icon';
import IdentificationIcon from '@/public/icons/identification-icon';
import SupportIcon from '@/public/icons/support-icon';

interface AimCard {
  Icon?: React.ComponentType; // Changed from icon: React.ReactNode
  title: string;
  description: string;
}

const aimCards: AimCard[] = [
  {
    Icon: PepoleIcon, // Changed from icon to Icon
    title: "Support Parents",
    description: "To support and guide parents with tools and knowledge in order for them to become confident and enjoy parenthood."
  },
  {
    Icon: SupportIcon,
    title: "Support Development",
    description: "To help support babies with key developmental milestones."
  },
  {
    Icon: IdentificationIcon,
    title: "Early Identification",
    description: "Assist in the early identification of developmental challenges in babies."
  }
];

export default function BelieveIn() {
  return (
    <section className='bg-gradient-to-b from-[#FFFAF4] to-[#FFEAD0]  py-20'>
      <div className="container mx-auto px-4 py-16">
        {/* What We Believe In Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl leading-16 font-medium text-[#434642] mb-6">What We Believe In</h2>
        <p className="text-[#262925] text-base leading-6 ">
          We believe the early years are foundational to a child's lifelong health and development. Children learn best through purposeful, educational play that engages their curiosity and imagination. We recognize that repetition is essential for building strong developmental foundations. Through positive language consistent encouragement and recognition of their efforts, children can build confidence, resilience and great character.
        </p>
      </div>

      {/* What We Aim For Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-medium text-[#434642] text-center mb-12">What We Aim For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aimCards.map((card, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <p className='border border-[#434642] p-3 rounded-full'>

                {card.Icon && <card.Icon />}
                </p>
                <h3 className="text-xl font-medium text-[#434642]">{card.title}</h3>
              </div>
              <Separator className="bg-[#7CC466]/20" />
              <p className="text-[#434642] leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
