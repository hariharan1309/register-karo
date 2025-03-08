import Oracle from "../assets/trusted/oracle.png";
import Samsung from "../assets/trusted/samsung.png";
import Morpheus from "../assets/trusted/morpheus.png";
import Monday from "../assets/trusted/monday.png";
import Segment from "../assets/trusted/segment.png";

const TrustedBusiness = () => {
  return (
    <div className="m-16 mx-auto  flex flex-col gap-10 items-center justify-center h-[100px]">
      <p className="font-inter font-bold text-[22px]">
        Trusted By Over 100+ Startups and freelance business
      </p>
      <div className="flex flex-row gap-12 items-center h-7">
        <img src={Oracle} alt="" className="w-[138px]" />
        <img src={Morpheus} alt="" className="w-[138px]" />
        <img src={Morpheus} alt="" className="w-[138px]" />
        <img src={Samsung} alt="" className="w-[138px]" />
        <img src={Monday} alt="" className="w-[138px]" />
        <img src={Segment} alt="" className="w-[138px]" />
      </div>
    </div>
  );
};

export default TrustedBusiness;
