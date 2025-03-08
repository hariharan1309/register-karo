import HeroImage from "../assets/hero-bg.png";
import HeroGoogle from "./HeroGoogle";
import HeroImage2 from "../assets/person-table.png";
import Arch from "../assets/archery.png";

const Hero = () => {
  return (
    <div
      className="min-w-full bg-cover bg-center h-auto w-full "
      style={{
        backgroundImage: `linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%), url(${HeroImage})`,
      }}
    >
      <div className="p-16 flex flex-row items-start pb-0 justify-between relative overflow-hidden">
        <HeroGoogle />
        <img src={HeroImage2} alt="" className="w-[600px]" />
        <img
          src={Arch}
          alt=""
          className="w-[230px] absolute right-4 bottom-0"
        />
        <div className="flex flex-col absolute top-8 gap-6 -right-2">
          <button className="px-6 py-4 rounded-lg text-start shadow bg-white">
            Annual Compliance
          </button>
          <button className="px-6 py-4 rounded-lg text-start shadow bg-white">
            Payroll Services
          </button>
          <button className="px-6 py-4 rounded-lg text-start shadow bg-white">
            Company Formation
          </button>
          <button className="px-6 py-4 rounded-lg text-start shadow bg-white">
            Annual Compliance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
