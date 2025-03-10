import WhyCard from "./WhyCard";

const WhySection = () => {
  const reasons = [
    {
      icon: (
        <svg
          width="38"
          height="41"
          viewBox="0 0 38 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.3763 6.5625C36.7825 7.1875 37.72 8.51562 37.72 10C37.72 27.3438 27.095 36.9531 20.3763 39.7656C19.4388 40.1562 18.4231 40.1562 17.4856 39.7656C9.12625 36.25 0.220001 25.5469 0.220001 10C0.220001 8.51562 1.07938 7.1875 2.48563 6.5625L17.4856 0.3125C17.9544 0.15625 18.4231 0.078125 18.97 0.078125C19.4388 0.078125 19.9075 0.15625 20.3763 0.3125L35.3763 6.5625ZM18.97 34.9219C26.2356 31.25 32.4075 22.6562 32.6419 10.8594L18.97 5.15625V34.9219Z"
            fill="#F45C20"
          />
        </svg>
      ),
      color: "#FEF3EF",
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.395 20C39.395 30.7031 30.645 39.375 20.02 39.375C9.31689 39.375 0.64502 30.7031 0.64502 20C0.64502 9.375 9.31689 0.625 20.02 0.625C30.645 0.625 39.395 9.375 39.395 20ZM17.7544 30.3125L32.1294 15.9375C32.5981 15.4688 32.5981 14.6094 32.1294 14.1406L30.3325 12.4219C29.8638 11.875 29.0825 11.875 28.6138 12.4219L16.895 24.1406L11.3481 18.6719C10.8794 18.125 10.0981 18.125 9.62939 18.6719L7.83252 20.3906C7.36377 20.8594 7.36377 21.7188 7.83252 22.1875L15.9575 30.3125C16.4263 30.7812 17.2856 30.7812 17.7544 30.3125Z"
            fill="#3DCD5C"
          />
        </svg>
      ),
      color: "#F1FBF3",
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.985 0.625C30.6881 0.625 39.36 9.29688 39.36 20C39.36 30.7031 30.6881 39.375 19.985 39.375C9.28189 39.375 0.610016 30.7031 0.610016 20C0.610016 9.29688 9.28189 0.625 19.985 0.625ZM26.235 13.75C24.8288 13.75 23.735 14.9219 23.735 16.25C23.735 17.6562 24.8288 18.75 26.235 18.75C27.5631 18.75 28.735 17.6562 28.735 16.25C28.735 14.9219 27.5631 13.75 26.235 13.75ZM13.735 13.75C12.3288 13.75 11.235 14.9219 11.235 16.25C11.235 17.6562 12.3288 18.75 13.735 18.75C15.0631 18.75 16.235 17.6562 16.235 16.25C16.235 14.9219 15.0631 13.75 13.735 13.75ZM28.8913 27.1094C29.985 25.7812 28.0319 24.2188 27.0163 25.4688C25.2194 27.5781 22.7194 28.75 19.985 28.75C17.2506 28.75 14.6725 27.5781 12.8756 25.4688C11.86 24.2188 9.90689 25.7812 11.0006 27.1094C13.1881 29.7656 16.4694 31.25 19.985 31.25C23.4225 31.25 26.7038 29.7656 28.8913 27.1094Z"
            fill="#2F6AE1"
          />
        </svg>
      ),
      title: "Guaranteed Satisfaction",
      color: "#EDF3FF",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
    },
    {
      color: "#FBF1FB",
      icon: (
        <svg
          width="36"
          height="40"
          viewBox="0 0 36 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.97 20C12.4231 20 7.97 15.5469 7.97 10C7.97 4.53125 12.4231 0 17.97 0C23.4388 0 27.97 4.53125 27.97 10C27.97 15.5469 23.4388 20 17.97 20ZM25.3919 22.5781C31.0169 22.8125 35.47 27.4219 35.47 33.0469V36.25C35.47 38.3594 33.7513 40 31.72 40H4.22C2.11063 40 0.470001 38.3594 0.470001 36.25V33.0469C0.470001 27.4219 4.845 22.8125 10.47 22.5781L14.22 37.5L16.72 26.875L14.22 22.5H21.72L19.22 26.875L21.72 37.5L25.3919 22.5781Z"
            fill="#D5414F"
          />
        </svg>
      ),
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
    },
    {
      icon: (
        <svg
          width="38"
          height="41"
          viewBox="0 0 38 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.4261 6.5625C36.8323 7.1875 37.7698 8.51562 37.7698 10C37.7698 27.3438 27.1448 36.9531 20.4261 39.7656C19.4886 40.1562 18.473 40.1562 17.5355 39.7656C9.17609 36.25 0.269836 25.5469 0.269836 10C0.269836 8.51562 1.12921 7.1875 2.53546 6.5625L17.5355 0.3125C18.0042 0.15625 18.473 0.078125 19.0198 0.078125C19.4886 0.078125 19.9573 0.15625 20.4261 0.3125L35.4261 6.5625ZM19.0198 34.9219C26.2855 31.25 32.4573 22.6562 32.6917 10.8594L19.0198 5.15625V34.9219Z"
            fill="#F45C20"
          />
        </svg>
      ),
      color: "#FFFFFF",
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
  ];
  return (
    <div className="p-4 sm:p-8 lg:p-16 *:font-inter relative">
      {/* Header Section - Full width on all screens */}
      <div className="w-full mb-8 lg:mb-0 lg:col-span-2 flex flex-col gap-3">
        <p className="text-[#EB8D15] font-inter tracking-[1.5px]">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h3 className="text-[28px] lg:text-[32px] font-bold text-[#272D37]">
          Why Choose Register Karo{" "}
        </h3>
        <p className="text-[14px] lg:text-[15px] text-[#0D1216] leading-[22px] max-w-[590px]">
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </p>
      </div>

      {/* Cards Section - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-6">
        {/* First row on large screens */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          <WhyCard params={reasons[0]} key={reasons[0].title} />
          <WhyCard params={reasons[1]} key={reasons[1].title} />
        </div>

        {/* Second row on large screens */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          <div className="lg:col-start-1">
            <WhyCard params={reasons[2]} key={reasons[2].title} />
          </div>
          <WhyCard params={reasons[3]} key={reasons[3].title} />
        </div>

        {/* Third row - only shows the fifth card in center on small/medium screens */}
        <div className="sm:col-span-2 lg:col-span-4 flex justify-center lg:justify-start">
          <div className="max-w-xs sm:max-w-sm lg:max-w-none lg:w-1/4">
            <WhyCard params={reasons[4]} key={reasons[4].title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
