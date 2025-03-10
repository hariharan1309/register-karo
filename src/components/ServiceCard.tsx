const ServiceCard = ({ params, index }: { params: any; index: number }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-7 p-4 sm:p-5 lg:p-6 *:font-inter 
      ${index % 3 !== 0 ? "lg:border-l-[1px] lg:border-[#E5E2DF]" : ""}
      ${index % 2 !== 0 ? "sm:border-l-[1px] md:border-l-[1px] sm:border-[#E5E2DF] md:border-[#E5E2DF] lg:border-l-0" : ""}
      ${index > 1 ? "border-t-[1px] border-[#E5E2DF] sm:border-t-0" : ""}
      `}
    >
      <img 
        src={params.icon} 
        alt="icon" 
        className="size-[40px] sm:size-[50px] lg:size-[60px]" 
      />
      <h3 className="font-extrabold text-base sm:text-lg lg:text-[20px] text-center">
        {params.title}
      </h3>
      <p className="font-inter text-center text-sm sm:text-base lg:text-lg text-[#282728] max-w-full sm:max-w-[240px] lg:max-w-[280px] leading-5 sm:leading-6 font-light">
        {params.description}
      </p>
      <button>
        <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 items-center">
          <p className="font-semibold text-sm sm:text-base text-[#001038]">Learn More</p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[15px] sm:h-[15px] lg:w-[17px] lg:h-[17px]"
          >
            <path
              d="M16.1899 8.44043C16.1899 12.7217 12.7211 16.1904 8.43988 16.1904C4.15863 16.1904 0.689878 12.7217 0.689878 8.44043C0.689878 4.15918 4.15863 0.69043 8.43988 0.69043C12.7211 0.69043 16.1899 4.15918 16.1899 8.44043ZM2.18988 8.44043C2.18988 11.9092 4.97113 14.6904 8.43988 14.6904C11.8774 14.6904 14.6899 11.9092 14.6899 8.44043C14.6899 5.00293 11.8774 2.19043 8.43988 2.19043C4.97113 2.19043 2.18988 5.00293 2.18988 8.44043ZM4.43988 9.06543V7.81543C4.43988 7.62793 4.59613 7.44043 4.81488 7.44043H8.43988V5.34668C8.43988 5.03418 8.81488 4.84668 9.06488 5.09668L12.1586 8.19043C12.3149 8.34668 12.3149 8.56543 12.1586 8.72168L9.06488 11.8154C8.81488 12.0654 8.43988 11.8779 8.43988 11.5342V9.44043H4.81488C4.59613 9.44043 4.43988 9.28418 4.43988 9.06543Z"
              fill="#001038"
            />
          </svg>
        </div>
      </button>
      {index % 3 !== 0 && (
        <div
          className={`absolute bg-[#BB162B] h-5 w-1 left-[-2px] hidden lg:block ${
            index % 3 == 1 ? "top-1/4" : "top-3/4"
          }`}
        ></div>
      )}
      {index % 2 !== 0 && (
        <div
          className={`absolute bg-[#BB162B] h-5 w-1 left-[-2px] hidden md:block lg:hidden ${
            index % 2 == 1 ? "top-1/3" : "top-2/3"
          }`}
        ></div>
      )}
    </div>
  );
};

export default ServiceCard;