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
    <div className="py-10 px-18 bg-[#FAFAFA] grid grid-cols-1 gap-4">
      <p className="text-[#EB8D15] font-inter place-self-center">
        WELCOME TO REGISTERKARO.IN
      </p>
      <h2 className="text-[#272D37] font-bold text-[32px] place-self-center">
        Explore Our Services
      </h2>
      <div className="grid grid-cols-3 p-4">
        {/* ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard params={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
