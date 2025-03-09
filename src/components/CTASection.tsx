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
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-blue-900 z-0"></div>

      <div className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-white text-sm font-medium mb-2">
            1% OF THE INDUSTRY
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Welcome to your new digital reality. Now.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8 flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-grow py-3 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-r-md transition-colors"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 text-white">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* <CheckCircle size={20} className="text-white" /> */}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
