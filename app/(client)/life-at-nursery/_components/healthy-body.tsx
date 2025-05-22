import React from "react";
import Image from "next/image";
import BottlesImg from "@/public/images/MilkChars-01.png";
import AnimatedBottlesImg from "@/public/images/MilkChars-02.png";

export default function HealthyBody() {
    return (
        <section className="container py-16 px-4 sm:px-8 lg:px-16  mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-normal leading-16 text-center text-[#434642] mb-2">
                Healthy Body, Healthy Brain
            </h2>
            <p className="text-center text-[#434642]  mx-auto text-sm sm:text-base mb-12">
                Nutrition plays a key role in brain development, especially before age 3. We ensure all meals are healthy, <br />
                balanced, and provided as part of our care.
            </p>

            <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-4">Mondays Menu</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left side: 6 months - 1 year */}
                <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                        6 months–1 years food menu
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                        <li>Pancakes with chopped banana/blueberries/strawberries. (Can use vegan & nut free milk alternative).</li>
                        <li>Butternut, pear & banana puree/cooked butternut, banana & pear pieces.</li>
                        <li>Jacket potato with chicken mayo/hummus & salad. *Can swap for vegan mayo.</li>
                        <li>Homemade flapjack, made with sunflower seeds, coconut sugar & raisins. (Can swap to gluten free oats).</li>
                        <li>Mushroom omelet & salad.</li>
                    </ul>

                    <div className="mt-8">
                        <Image
                            src={AnimatedBottlesImg}
                            alt="Animated Bottles"
                            className="rounded-xl w-full max-w-md"
                        />
                    </div>
                </div>

                {/* Right side: 1-2 years */}
                <div>
                    <div className="mb-6">
                        <Image
                            src={BottlesImg}
                            alt="Bottles"
                            className="mx-auto w-[80%] max-w-xs"
                        />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                        1–2 years food menu
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                        <li>Scrambled egg, with low sugar baked beans & fried thinly chopped mushrooms.</li>
                        <li>Apple & Banana.</li>
                        <li>Shepherd’s pie/cottage pie. (Vegan butter for mash & gluten free gravy).</li>
                        <li>Blueberries & Strawberries.</li>
                        <li>Pitta, hummus & cucumber & carrot sticks. (Can swap pitta for gluten free version.)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
