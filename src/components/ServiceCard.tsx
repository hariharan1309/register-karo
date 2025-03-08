const ServiceCard = ({ params }: { params: any }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 p-6 *:font-inter">
      <img src={params.icon} alt="icon" className="size-[60px]" />
      <h3 className=" font-extrabold text-[20px]">{params.title}</h3>
      <p className=" font-inter text-center max-w-[280px]">
        {params.description}
      </p>
      <button>
        <div className="flex flex-row gap-4">
          <p className="font-semibold text-base text-[#001038]">Learn More</p>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1899 8.44043C16.1899 12.7217 12.7211 16.1904 8.43988 16.1904C4.15863 16.1904 0.689878 12.7217 0.689878 8.44043C0.689878 4.15918 4.15863 0.69043 8.43988 0.69043C12.7211 0.69043 16.1899 4.15918 16.1899 8.44043ZM2.18988 8.44043C2.18988 11.9092 4.97113 14.6904 8.43988 14.6904C11.8774 14.6904 14.6899 11.9092 14.6899 8.44043C14.6899 5.00293 11.8774 2.19043 8.43988 2.19043C4.97113 2.19043 2.18988 5.00293 2.18988 8.44043ZM4.43988 9.06543V7.81543C4.43988 7.62793 4.59613 7.44043 4.81488 7.44043H8.43988V5.34668C8.43988 5.03418 8.81488 4.84668 9.06488 5.09668L12.1586 8.19043C12.3149 8.34668 12.3149 8.56543 12.1586 8.72168L9.06488 11.8154C8.81488 12.0654 8.43988 11.8779 8.43988 11.5342V9.44043H4.81488C4.59613 9.44043 4.43988 9.28418 4.43988 9.06543Z"
              fill="#001038"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ServiceCard;
