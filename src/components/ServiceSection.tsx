import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const services = [
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
    },
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
    },
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
    },
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
    },
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
    },
    {
      icon: "/images/icons/registration.svg",
      title: "Company Registration",
      description:
        "Register your company with us and get your certificate in 2 days.",
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
      <div className="grid grid-cols-3">
        {/* ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard params={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
