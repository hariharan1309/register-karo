import Stats from "../assets/GoogleStats.png";

const HeroGoogle = () => {
  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] pb-4 sm:pb-6 lg:pb-8">
      {/* Google Rating */}
      <div className="flex flex-row flex-wrap gap-1 items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_10_36968)">
            <path
              d="M19.921 6.97317H12.314L9.96381 -0.219727L7.60702 6.97317L0 6.9659L6.1603 11.4165L3.80351 18.6014L9.96381 14.1588L16.1168 18.6014L13.7673 11.4158L19.921 6.97317Z"
              fill="#F2C94C"
            />
            <path
              d="M14.3088 13.379L13.7801 11.752L9.97656 14.4949L14.3088 13.379Z"
              fill="#F2994A"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_36968">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-[#181617] font-inter text-sm sm:text-base">Google Rating</p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((item) => (
            <HeroStar key={item} />
          ))}
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-wrap font-inter font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#010101] leading-[38px] sm:leading-[50px] lg:leading-[60px]">
        Your Trusted Partner For{" "}
        <span className="text-[#FFA229]">Compliance</span> needs
      </h1>

      {/* Divider */}
      <div className="bg-[#F60014] h-[1px] w-10"></div>

      {/* Description */}
      <p className="text-base sm:text-lg lg:text-xl leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#4F4F4F]">
        An online business compliance platform that helps entrepreneurs and
        other individuals with various <b> registrations</b>
        <b>, tax filings,</b> and other
        <b> legal matters</b>.
      </p>

      {/* Stats */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[45%] sm:right-[180px] lg:right-[240px] mt-1 sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
        >
          <path
            d="M19.1635 41.253C18.2271 41.253 17.3282 40.8971 16.654 40.2417L4.73377 30.8403H1.87778C1.31595 30.8403 0.857117 30.3815 0.857117 29.8196V11.6162C0.857117 11.532 0.866481 11.4383 0.894572 11.354C1.00694 10.9046 1.41895 10.5956 1.87778 10.5956C1.96206 10.5956 2.04633 10.6049 2.13997 10.633L6.75637 11.8129L6.85937 11.7473C8.31077 10.839 12.0938 8.72282 15.6802 8.72282C16.5416 8.72282 17.3469 8.84456 18.0679 9.09738L18.2084 9.1442L18.3208 9.05992C20.1655 7.74898 22.2442 7.09351 24.5009 7.09351C26.0834 7.09351 27.7877 7.42124 29.5668 8.05799C32.9284 9.50003 38.8839 11.7942 40.7754 11.8972L45.8506 10.6049C45.9255 10.5862 46.0098 10.5768 46.0941 10.5768C46.3282 10.5768 46.5529 10.6518 46.7308 10.7922C46.993 10.9889 47.1428 11.2885 47.1428 11.6069V29.8196C47.1428 30.3815 46.684 30.8403 46.1222 30.8403H42.4047L39.3333 31.8048V32.0202C39.3614 32.685 39.1929 33.3405 38.8745 33.9117C38.2378 35.0353 37.0298 35.7376 35.7282 35.7376C35.1102 35.7376 34.4922 35.5784 33.9491 35.2694L33.6776 35.1102L33.5558 35.4005C32.9846 36.7302 31.683 37.5823 30.2316 37.5917C29.6043 37.5917 28.9862 37.4231 28.4338 37.1047L28.1622 36.9456L28.0405 37.2358C27.4693 38.5655 26.1584 39.427 24.7163 39.427C24.0889 39.427 23.4615 39.2584 22.9184 38.9401L22.6469 38.7809L22.5252 39.0712C22.3566 39.4738 22.1131 39.8296 21.8135 40.1387C21.1206 40.8503 20.1936 41.253 19.201 41.253H19.1635ZM15.5959 10.7829C12.3653 10.7829 8.70406 12.9834 8.00177 13.4328L7.8894 13.5077L6.17581 29.3795L17.9837 38.6685C17.9837 38.6685 18.0399 38.7153 18.0679 38.7434C18.377 39.0431 18.7796 39.2023 19.1916 39.2023C19.6036 39.2023 20.0063 39.0431 20.3059 38.7622C20.9239 38.1348 20.9239 37.1328 20.3059 36.5148L16.6259 32.8348C16.4386 32.6475 16.3263 32.3853 16.3263 32.1138C16.3263 31.8422 16.4293 31.5801 16.6259 31.4021C16.8226 31.2055 17.0754 31.1025 17.3469 31.1025C17.6185 31.1025 17.8713 31.2055 18.0679 31.4021L23.5646 36.9175C23.8923 37.2358 24.2856 37.395 24.6976 37.395C25.1096 37.395 25.531 37.2265 25.8306 36.9175C26.1209 36.6085 26.2801 36.2152 26.2801 35.7938C26.2801 35.3724 26.1022 34.9791 25.8025 34.6795L20.2685 29.1642C19.8658 28.7709 19.8658 28.1154 20.2685 27.7221C20.4651 27.5255 20.7179 27.4225 20.9895 27.4225C21.261 27.4225 21.5232 27.5255 21.7105 27.7221L29.0892 35.0821C29.3889 35.3724 29.7822 35.5316 30.1942 35.5316C30.6062 35.5316 30.9995 35.3724 31.2898 35.0915C31.9171 34.4829 31.9359 33.4809 31.3272 32.8535L23.9672 25.4748C23.6301 25.1002 23.6395 24.5103 23.9859 24.1264C24.1826 23.911 24.4541 23.7893 24.7444 23.7893C24.9972 23.7893 25.2407 23.8829 25.428 24.0515L34.6139 33.2375C34.923 33.5277 35.3162 33.6963 35.7376 33.6963C36.159 33.6963 36.5523 33.5371 36.8519 33.2468C37.4606 32.6288 37.4606 31.6175 36.8519 31.0089L24.2949 18.4612L24.0983 18.6298C22.3004 20.1748 20.5026 20.9614 18.7328 20.9614C17.4593 20.9614 16.2326 20.5588 15.0809 19.7722C13.2736 18.5268 12.7305 16.0734 13.8448 14.1819C14.4535 13.1519 15.1558 12.1781 15.9423 11.2698L16.3356 10.8109H15.6146L15.5959 10.7829ZM26.6734 13.0864C26.9168 13.0864 27.1509 13.1706 27.3382 13.3298C27.7596 13.695 27.8158 14.3411 27.4412 14.7719C26.9356 15.5023 26.4112 16.1671 25.8774 16.7757L25.6995 16.9724L38.2659 29.5387C38.3314 29.6043 38.3876 29.6698 38.4438 29.7447L38.5655 29.8946L41.1499 29.0893L39.9701 13.8355L39.7641 13.798C36.7021 13.2081 31.1212 10.9233 28.8645 9.96822C27.2914 9.40639 25.8306 9.12547 24.5009 9.12547C22.4877 9.12547 20.6524 9.77158 19.0605 11.045C19.0137 11.0919 18.9856 11.1106 18.9482 11.1387C17.5904 12.2998 16.4761 13.6669 15.6146 15.2026C15.0434 16.1577 15.3056 17.4125 16.2139 18.068C17.0005 18.6111 17.8432 18.8826 18.7047 18.8826C20.9333 18.8826 23.3117 17.1128 25.7651 13.6295C25.8119 13.5546 25.8493 13.4984 25.8868 13.4516C26.0834 13.2268 26.3644 13.0957 26.664 13.0957L26.6734 13.0864ZM41.974 13.6857L43.1445 28.7896H45.0828V12.9178L41.9833 13.695L41.974 13.6857ZM2.89845 28.8083H4.1813L5.81062 13.6669L2.89845 12.9178V28.8083Z"
            fill="#4F4F4F"
          />
        </svg>
        <p className="absolute left-[15px] sm:left-[40px] lg:left-[60px] w-fit font-extrabold text-base sm:text-xl lg:text-[22px] text-transparent bg-clip-text bg-[linear-gradient(127.81deg,#FFA229_10%,#1C4670_68%)]">
          4.5+
        </p>
        <p className="absolute left-[140px] sm:left-[210px] lg:left-[270px] w-fit font-extrabold text-base sm:text-xl lg:text-[22px] text-transparent bg-clip-text bg-[linear-gradient(127.81deg,#FFA229_10%,#1C4670_68%)]">
          20,000+
        </p>
        <p className="absolute left-[270px] sm:left-[370px] lg:left-[470px] w-fit font-extrabold text-base sm:text-xl lg:text-[22px] text-transparent bg-clip-text bg-[linear-gradient(127.81deg,#FFA229_10%,#1C4670_68%)]">
          99.8%+
        </p>
        <img src={Stats} alt="Google Statistics" className="w-full sm:w-[450px] lg:w-[584px]" />
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button className="font-inter text-sm sm:text-base p-3 sm:p-4 px-4 sm:px-6 flex items-center justify-center font-bold text-white bg-[#1C4670] rounded w-full sm:w-auto">
          Get Started For Free
        </button>
        <div className="flex flex-row items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="12"
              fill="url(#paint0_linear_10_36961)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.516 8.5739C9.98929 8.2387 9.29999 8.61708 9.29999 9.24145V15.2207C9.29999 15.845 9.98929 16.2234 10.516 15.8882L15.214 12.8986C15.7026 12.5877 15.7026 11.8744 15.214 11.5635L10.516 8.5739Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10_36961"
                x1="14.0107"
                y1="33.9893"
                x2="-9.98928"
                y2="9.98928"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FB432C" />
                <stop offset="1" stopColor="#FF591E" />
              </linearGradient>
            </defs>
          </svg>

          <p className="text-[#282828] font-inter font-semibold text-sm sm:text-base">
            See how it works
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroGoogle;

const HeroStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.951813 15.3527H15.434V0.889648H0.951813V15.3527Z"
      fill="#F2C94C"
    />
    <path
      d="M0.951813 15.3527H8.19291V0.889648H0.951813V15.3527Z"
      fill="#F2C94C"
    />
    <path
      d="M13.2973 7.0426L5.08342 13.0018L6.28177 9.31878L3.1442 7.0426H7.0224L8.22075 3.35938L9.4191 7.0426H13.2973ZM8.22105 10.7258L10.4643 10.2546L11.3581 13.0018L8.22105 10.7258Z"
      fill="white"
    />
  </svg>
);