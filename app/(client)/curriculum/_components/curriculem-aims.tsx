import ReadingImage from "@/public/images/baby-power-01.png";
import PlaygroundImage from "@/public/images/baby-power-02.png";

export default function CurriculumAims() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-[250px] space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[32px] leading-11 font-normal text-[#262925]">
          Our curriculum also supports 3 additional aims that<br className="hidden sm:block" />
          we feel very passionate about
        </h2>
      </div>

      {/* Section 1: Top content with image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div>
            <h3 className="font-medium leading-8 text-base sm:text-lg text-[#262925]">The power of words</h3>
            <p className="text-sm sm:text-base leading-6 text-[#262925]">
              What we speak becomes a reflection of what we are. We understand to speak with intention, kindness and
              awareness because every word has the potential to heal or to harm.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-base sm:text-lg text-[#262925]">Love for books</h3>
            <p className="text-sm sm:text-base text-[#262925]">
              What we speak becomes a reflection of what we are. We understand to speak with intention, kindness and
              awareness because every word has the potential to heal or to harm.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={ReadingImage.src}
            alt="Reading Kids"
            className="w-full max-w-md h-auto object-contain rounded-md"
          />
        </div>
      </div>

      {/* Section 2: Bottom image + positive role models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={PlaygroundImage.src}
            alt="Playground Kids"
            className="w-full max-w-md h-auto object-contain rounded-md"
          />
        </div>

        {/* Text */}
        <div className="space-y-6 order-2 md:order-1">
          <div>
            <h3 className="font-medium text-base sm:text-lg text-[#262925]">Positive role models</h3>
            <p className="text-sm sm:text-base text-[#262925]">
              Children learn by watching the adults around them. Modeling kindness, respect, curiosity and perseverance
              sets a powerful example.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-base sm:text-lg text-[#262925]">Extra curriculum activities we offer</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-[#262925] space-y-1">
              <li>Sing and Sign</li>
              <li>Music and Movement</li>
              <li>Kindergarten</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
