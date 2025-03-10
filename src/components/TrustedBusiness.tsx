import Oracle from "../assets/trusted/oracle.png";
import Samsung from "../assets/trusted/samsung.png";
import Morpheus from "../assets/trusted/morpheus.png";
import Monday from "../assets/trusted/monday.png";
import Segment from "../assets/trusted/segment.png";

const TrustedBusiness = () => {
  const logos = [
    { src: Oracle, alt: "Oracle" },
    { src: Morpheus, alt: "Morpheus" },
    { src: Morpheus, alt: "Morpheus" }, // Duplicate in original
    { src: Samsung, alt: "Samsung" },
    { src: Monday, alt: "Monday" },
    { src: Segment, alt: "Segment" },
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:m-16 mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center min-h-[100px]">
      <p className="font-inter font-bold text-center text-lg sm:text-xl md:text-[22px] px-2">
        Trusted By Over 100+ Startups and freelance business
      </p>
      
      {/* Mobile view (scrollable) */}
      <div className="flex lg:hidden w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 items-center h-7 px-4">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              loading="lazy"
              className="w-[100px] sm:w-[120px] md:w-[130px] flex-shrink-0" 
            />
          ))}
        </div>
      </div>
      
      {/* Desktop view (static) */}
      <div className="hidden lg:flex flex-row gap-12 items-center h-7">
        {logos.map((logo, index) => (
          <img 
            key={index} 
            src={logo.src} 
            alt={logo.alt} 
            className="w-[138px]" 
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBusiness;