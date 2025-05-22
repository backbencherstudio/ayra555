
export default function Register() {
    return (
        <div>

            <section className="relative py-12 mt-20 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Wave Image */}
                <div
                    className="absolute inset-0 top-0 left-0 right-0 w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/register-img.png')`,
                        // opacity: 0.9
                    }}
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#578947] mb-4 leading-snug">
                        All Ofsted registered early years providers must follow the EYFS – <br />
                        <span className="block mt-1">Early Years Foundation Stage.</span>
                    </h2>

                    <p className="text-sm sm:text-base text-gray-700 mb-4 max-w-2xl mx-auto">
                        The framework outlines what children should learn and develop, how they should be cared for, <br />
                        and how they should be kept safe.
                    </p>

                    <a
                        href="https://www.gov.eyfs.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#578947] font-medium underline text-sm sm:text-base"
                    >
                        www.gov.eyfs.co.uk
                    </a>
                </div>
            </section>
        </div>
    );
}
