import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-extrabold mb-1 sm:mb-2 font-montserrat relative">
        <span
          className={
            Number(number) === 12
              ? "bg-[linear-gradient(152.74deg,#F53843_10%,#2F5795_68%)] bg-clip-text text-transparent"
              : "bg-[linear-gradient(151.01deg,#FFA229_10%,#1C4670_68%)] bg-clip-text text-transparent"
          }
        >
          {number}
          <span className="absolute top-3 sm:top-4 md:top-4 lg:top-5">
            <svg
              width="10"
              height="10"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[13px] lg:h-[13px]"
            >
              <path
                d="M4.72052 12.5682V0.573025H8.60132V12.5682H4.72052ZM0.43652 8.41022V4.73102H12.8601V8.41022H0.43652Z"
                fill="url(#paint0_linear_1_22371)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_22371"
                  x1="-2.6632"
                  y1="-7.60625"
                  x2="15.3305"
                  y2="20.7922"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.1" stopColor="#FFA229" />
                  <stop offset="0.68" stopColor="#2F5795" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      </h3>
      <p className="text-[#181617] *:font-inter font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { number: "1M", label: "CUSTOMERS" },
    { number: "12", label: "YEARS OF EXCELLENCE" },
    { number: "41", label: "R&D ENGINEERS" },
    { number: "78", label: "COUNTRIES" },
    { number: "3287", label: "PARTNERS" },
    { number: "41", label: "AWARDS RECEIVED" },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#F5921E] text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2">
          WHY REGISTER KARO
        </p>
        <h2 className="text-[#3A2A0E] text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          Some Numbers are important
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;