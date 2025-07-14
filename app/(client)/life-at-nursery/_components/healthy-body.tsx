import React from "react";
import Image from "next/image";
import BottlesImg from "@/public/images/MilkChars-01.png";
import AnimatedBottlesImg from "@/public/images/MilkChars-02.png";

export default function HealthyBody() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center text-[#434642] mb-4">
        Healthy Body, Healthy Brain
      </h2>
      <p className="text-center text-[#434642] mx-auto text-sm sm:text-base mb-12 max-w-2xl">
        Nutrition plays a key role in brain development, especially before age
        3. We ensure all meals are healthy, <br className="hidden sm:block" />
        balanced, and provided as part of our care. <br />
        At baby grow, we believe that healthy eating habits start early.
      </p>

      <h3 className="text-lg sm:text-xl font-medium text-[#262925] mb-4">
        Mondays Menu
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-[#262925] mb-2">
            6 months–1 years food menu
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#434642]">
            <li>
              Pancakes with chopped banana/blueberries/strawberries. (Can use
              vegan & nut free milk alternative).
            </li>
            <li>
              Butternut, pear & banana puree/cooked butternut, banana & pear
              pieces.
            </li>
            <li>
              Jacket potato with chicken mayo/hummus & salad. *Can swap for
              vegan mayo.
            </li>
            <li>
              Homemade flapjack, made with sunflower seeds, coconut sugar &
              raisins. (Can swap to gluten free oats).
            </li>
            <li>Mushroom omelet & salad.</li>
          </ul>

          <div className="mt-8">
            <Image
              src={AnimatedBottlesImg}
              alt="Animated Bottles"
              className="w-full max-w-md h-auto object-contain mx-auto"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="mb-6 flex justify-center">
            <Image
              src={BottlesImg}
              alt="Bottles"
              className="w-full max-w-xs h-auto object-contain"
              placeholder="blur"
            />
          </div>
          <h4 className="text-sm sm:text-base font-semibold text-[#262925] mb-2">
            1–2 years food menu
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#434642]">
            <li>
              Scrambled egg, with low sugar baked beans & fried thinly chopped
              mushrooms.
            </li>
            <li>Apple & Banana.</li>
            <li>
              Shepherd’s pie/cottage pie. (Vegan butter for mash & gluten free
              gravy).
            </li>
            <li>Blueberries & Strawberries.</li>
            <li>
              Pitta, hummus & cucumber & carrot sticks. (Can swap pitta for
              gluten free version.)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
