import React from "react";
import Image from "next/image";
import AppImg1 from "@/public/images/mobile.png";

export default function Connected() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl leading-16 font-normal text-[#262925] mb-4">
                        Stay Connected
                    </h2>
                    <p className="text-sm sm:text-base text-[#262925] mb-6 leading-relaxed max-w-xl">
                        We use an app called TeachKloud. Parents are able to communicate
                        with key workers through this system. Parents will have access to
                        their child’s daily records, view pictures of their child, have
                        access to the developmental reports, and see monthly invoices.
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base text-[#262925] space-y-2 mb-6">
                        <li>View photos</li>
                        <li>Access reports</li>
                        <li>Receive invoices</li>
                        <li>Communicate with key workers</li>
                        <li>Report their child’s attendance/absence</li>
                        <li>View and complete accident/incident forms</li>
                    </ul>

                    <button className="bg-black/80 text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-gray-800 transition cursor-pointer">
                        Download App
                    </button>
                </div>

                {/* Right Images */}
                <div className="flex justify-center md:justify-end gap-4">
                    <div className=" ">
                        <Image
                            src={AppImg1}
                            alt="TeachKloud App Screen 1"
                            className="w-full h-auto object-contain"
                            placeholder="blur"
                        />
                    </div>
                    {/* <div className="w-[45%] sm:w-[40%]">
            <Image
              src={AppImg2}
              alt="TeachKloud App Screen 2"
              className="w-full h-auto object-contain"
              placeholder="blur"
            />
          </div> */}
                </div>
            </div>
        </section>
    );
}
