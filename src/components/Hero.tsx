import HeroImage from "../assets/hero-bg.png";
import HeroGoogle from "./HeroGoogle";

const Hero = () => {
  return (
    <div
      className="min-w-full bg-cover bg-center h-[586px] w-full "
      style={{
        backgroundImage: `linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%), url(${HeroImage})`,
      }}
    >
      <div className="p-16">
        <HeroGoogle />
      </div>
    </div>
  );
};

export default Hero;
