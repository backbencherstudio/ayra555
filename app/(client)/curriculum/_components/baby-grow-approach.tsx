import ImgPrime from "@/public/images/baby-01.png";
import ImgSpecific from "@/public/images/baby-02.png";
import ImgPlayful from "@/public/images/baby-03.png";

export default function BabyGrowApproach() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-16">
      {/* Section 1: Prime Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={ImgPrime.src}
            alt="Prime Areas"
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-8 text-[#262925] mb-4">
            At Baby Grow, we focus on the 3 prime areas
          </h3>
          <ul className="list-disc list-inside space-y-1 text-base sm:text-base text-[#262925] mb-4">
            <li>Personal, social and emotional development</li>
            <li>Communication and language</li>
            <li>Physical development</li>
          </ul>
          <p className="text-sm sm:text-base text-[#262925]">
            The three prime areas describe universal core aspects of child
            development. They are time-sensitive because of biological factors
            that enable rapid brain connections, particularly in the first few
            years of life.
            <br />
            <br />
            Developmental steps missed at this crucial stage are much harder to
            address later on.
          </p>
        </div>
      </div>

      {/* Section 2: Specific Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-8 text-[#262925] mb-4">
            Once the 3 prime areas are well established, children can then begin
            to explore and develop in the 4 specific areas
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[#262925]">
            <li>Literacy</li>
            <li>Mathematics</li>
            <li>Understanding the world</li>
            <li>Expressive arts and design</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={ImgSpecific.src}
            alt="Specific Areas"
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
      </div>

      {/* Section 3: Playful Approaches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={ImgPlayful.src}
            alt="Playful Approaches"
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-8 text-[#262925] mb-4">
            Playful approaches we use at Baby Grow
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#262925]">
            <div>
              <p className="font-medium">Unstructured play</p>
              <p>Play and explore without any adult support</p>
            </div>
            <div>
              <p className="font-medium">Child-initiated play</p>
              <p>
                Adult support for an enabling environment and sensitive
                interaction
              </p>
            </div>
            <div>
              <p className="font-medium">Focused learning</p>
              <p>Adult-guided, playful experiential activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
