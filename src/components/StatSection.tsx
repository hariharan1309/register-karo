import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-2">
        <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-gray-600 bg-clip-text text-transparent">
          {number}
        </span>
      </h3>
      <p className="text-gray-800 font-medium text-sm md:text-base tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { number: "1M+", label: "CUSTOMERS" },
    { number: "12+", label: "YEARS OF EXCELLENCE" },
    { number: "41+", label: "R&D ENGINEERS" },
    { number: "78+", label: "COUNTRIES" },
    { number: "3287+", label: "PARTNERS" },
    { number: "41+", label: "AWARDS RECEIVED" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#F5921E] text-lg font-medium mb-2">
          WHY REGISTER KARO
        </p>
        <h2 className="text-[#3A2A0E] text-4xl md:text-5xl font-bold mb-16">
          Some Numbers are important
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
