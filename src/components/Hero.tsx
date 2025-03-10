import HeroImage from "../assets/hero-bg.png";
import HeroGoogle from "./HeroGoogle";
import HeroImage2 from "../assets/person-table.png";
import Arch from "../assets/archery.png";

const Hero = () => {
  return (
    <div
      className="min-w-full bg-cover bg-center h-auto w-full"
      style={{
        backgroundImage: `linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%), url(${HeroImage})`,
      }}
    >
      <div className="px-4 py-8 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center md:items-start pb-10 md:pb-0 justify-between relative overflow-hidden">
        {/* Hero Google component */}
        <div className="z-10 mb-8 md:mb-0">
          <HeroGoogle />
        </div>

        {/* Main image - hidden on mobile, visible from sm up */}
        <img 
          src={HeroImage2} 
          alt="Person at table" 
          className="hidden sm:block w-full max-w-[300px] md:max-w-[450px] lg:max-w-[550px] xl:w-[600px] z-0 mt-8 md:mt-0" 
        />

        {/* Archery image - hidden on mobile, visible from md up */}
        <img
          src={Arch}
          alt="Archery"
          className="hidden md:block w-[120px] lg:w-[180px] xl:w-[230px] absolute right-2 lg:right-4 bottom-0 z-0"
        />

        {/* Service buttons */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 md:absolute md:top-8 md:-right-2 z-20 w-full sm:w-auto">
          <button className="px-4 py-3 lg:px-6 lg:py-4 rounded-lg text-start shadow bg-white text-sm sm:text-base">
            Annual Compliance
          </button>
          <button className="px-4 py-3 lg:px-6 lg:py-4 rounded-lg text-start shadow bg-white text-sm sm:text-base">
            Payroll Services
          </button>
          <button className="px-4 py-3 lg:px-6 lg:py-4 rounded-lg text-start shadow bg-white text-sm sm:text-base">
            Company Formation
          </button>
          <button className="px-4 py-3 lg:px-6 lg:py-4 rounded-lg text-start shadow bg-white text-sm sm:text-base">
            Annual Compliance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;