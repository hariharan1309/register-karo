import React, { useState } from "react";
// import { CheckCircle } from "react-feather";

const CTASection: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  const features = [
    "Instant results",
    "User-friendly interface",
    "Personalized customization",
  ];

  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute *:font-inter inset-0 bg-[linear-gradient(96.22deg,#FFA229_9%,#1C4670_59.37%)] z-0"></div>

      <div className="relative z-10 py-10 md:py-12 lg:py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">1% OF THE INDUSTRY</p>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold px-2">
            Welcome to your new digital reality. Now.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6 md:mb-8 flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-grow py-2 md:py-3 px-4 bg-white rounded-md sm:rounded-r-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 md:py-3 px-6 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 text-white">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-4 justify-center">
              <svg
                width="18" 
                height="18"
                className="md:w-[21px] md:h-[20px]"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z"
                  fill="white"
                />
                <path
                  d="M14.4999 7.5L9.35346 12.6464C9.1582 12.8417 8.84162 12.8417 8.64636 12.6464L6.49991 10.5"
                  stroke="#1C4670"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-sm md:text-base font-medium leading-5 md:leading-6">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;