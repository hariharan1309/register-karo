const WhyCard = ({ params }: { params: any }) => {
  return (
    <div
      className={`px-3 sm:px-4 md:px-5 py-5 sm:py-6 md:py-[30px] rounded-[10px] 
      flex flex-col border-[#FCDDEC] border-[1px] items-center 
      gap-3 sm:gap-4 md:gap-5 *:font-inter w-full h-full`}
      style={{ backgroundColor: params?.color || "" }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-auto md:h-auto flex items-center justify-center">
        {params.icon}
      </div>
      <h4 className="font-medium text-lg sm:text-xl leading-[26px] sm:leading-[30px] text-center">
        {params.title}
      </h4>
      <p className="text-[#666666] text-sm sm:text-[15px] text-center leading-[20px] sm:leading-[22px] font-rubik">
        {params.description}
      </p>
    </div>
  );
};

export default WhyCard;