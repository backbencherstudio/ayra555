import Image from "next/image";
import CommunicationIcon from "@/public/images/icon-01.png";
import CreativityIcon from "@/public/images/icon-02.png";
import EmotionalIcon from "@/public/images/icon-03.png";
import ImaginationIcon from "@/public/images/icon-04.png";
import ProblemSolvingIcon from "@/public/images/icon-05.png";

export default function ImportanceOfPlay() {
  const items = [
    {
      icon: CommunicationIcon,
      label: "Encourages communication",
      bg: "bg-[#FA6C5F]",
    },
    {
      icon: CreativityIcon,
      label: "Boosts confidence & creativity",
      bg: "bg-[#24D3C5]",
    },
    {
      icon: EmotionalIcon,
      label: "Teaches emotional regulation",
      bg: "bg-[#A4DE00]",
    },
    {
      icon: ImaginationIcon,
      label: "Promotes imagination & relationships",
      bg: "bg-[#F87272]",
    },
    {
      icon: ProblemSolvingIcon,
      label: "Fosters problem-solving and resilience",
      bg: "bg-white border border-gray-300",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-top z-10"
        style={{
          backgroundImage: `url('/images/play-bg.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#2E2E2E] mb-12">
          Importance of Play
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[240px]"
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  className=" w-20 h-20 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-[#2E2E2E]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
