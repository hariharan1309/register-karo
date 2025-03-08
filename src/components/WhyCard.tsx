const WhyCard = ({ params }: { params: any }) => {
  return (
    <div
      className={`px-5 py-[30px] rounded-[10px]  flex flex-col border-[#FCDDEC] border-[1px] items-center gap-5 *:font-inter`}
      style={{ backgroundColor: params?.color || "" }}
    >
      {params.icon}{" "}
      <h4 className="font-medium text-xl leading-[30px]">{params.title}</h4>
      <p className="text-[#666666] text-[15px] text-center leading-[22px] font-rubik">
        {params.description}
      </p>
    </div>
  );
};

export default WhyCard;
