import ServiceCard from "./ServiceCard";
import icon1 from "../assets/services/CF.png";
import icon2 from "../assets/services/CSS.png";
import icon3 from "../assets/services/VOA.png";
import icon4 from "../assets/services/ACS.png";
import icon5 from "../assets/services/PS.png";
import icon6 from "../assets/services/BS.png";

const ServiceSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Company Registration",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: icon2,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: icon3,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: icon4,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: icon5,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: icon6,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
    },
  ];
  return (
    <div className="py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-18 bg-[#FAFAFA] grid grid-cols-1">
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        <p className="text-[#EB8D15] font-inter place-self-center m-1 tracking-[1.5px] text-sm sm:text-base">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h2 className="text-[#272D37] font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] place-self-center tracking-[.16px] text-center px-4">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-y-6 lg:gap-6 lg:gap-y-8 p-2 sm:p-3 lg:p-4">
          {/* ServiceCard */}
          {services.map((service, index) => (
            <ServiceCard params={service} key={index} index={index} />
          ))}
        </div>
      </div>
      <button className="font-inter text-sm sm:text-base p-2 sm:p-3 px-4 sm:px-5 flex items-center justify-center place-self-center font-medium text-white bg-[#1C4670] rounded mt-6 sm:mt-8 lg:mt-10">
        See All Services
      </button>
    </div>
  );
};

export default ServiceSection;