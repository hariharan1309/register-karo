import Video from "../assets/VideoImg.png";
import Yt from "../assets/YT.png";

const ViewSection = () => {
  return (
    <div className="bg-[#1C4670] p-6 sm:p-8 md:p-12 lg:p-16 *:font-inter">
      {/* Grid container that changes from 1 column on small screens to 2 columns on lg screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* Left content section */}
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 py-2 max-w-full lg:max-w-[572px] mb-8 lg:mb-0">
          {/* Heading and description */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <h1 className="font-bold text-3xl md:text-4xl leading-9 md:leading-10 text-white">
              0ur Video Introductions
            </h1>
            <p className="text-sm md:text-base text-[#AAB5CD]">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {/* Feature 1 */}
            <div className="flex flex-row items-start gap-2">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
              >
                <g filter="url(#filter0_d_19910_27)">
                  <path
                    d="M2 29C2 13.536 14.536 1 30 1C45.464 1 58 13.536 58 29C58 44.464 45.464 57 30 57C14.536 57 2 44.464 2 29Z"
                    fill="#FFA229"
                    shapeRendering="crispEdges"
                  />
                  <g filter="url(#filter1_d_19910_27)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30 17C24.8454 17 20.6667 21.1787 20.6667 26.3333C20.6667 29.7392 22.491 32.719 25.2157 34.3488C25.3265 34.3386 25.44 34.3333 25.5556 34.3333H28.6667V30.3333H27.3334C26.597 30.3333 26 29.7364 26 29C26 28.2636 26.597 27.6667 27.3334 27.6667H30H32.6667C33.4031 27.6667 34 28.2636 34 29C34 29.7364 33.4031 30.3333 32.6667 30.3333H31.3334V34.3333H34.4445C34.56 34.3333 34.6735 34.3386 34.7843 34.3488C37.5091 32.719 39.3334 29.7392 39.3334 26.3333C39.3334 21.1787 35.1547 17 30 17ZM26 38.3333L26 37L34 37V38.3333C34 39.8061 32.8061 41 31.3334 41H28.6667C27.1939 41 26 39.8061 26 38.3333Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_19910_27"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_19910_27"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_19910_27"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_19910_27"
                    x="18.6667"
                    y="16"
                    width="22.6667"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_19910_27"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_19910_27"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col gap-1 md:gap-2">
                <h5 className="text-white text-xl md:text-2xl font-bold">
                  Explore ideas together
                </h5>
                <p className="text-sm md:text-base text-[#AAB5CD]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-row items-start gap-2">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
              >
                <g filter="url(#filter0_d_19910_39)">
                  <path
                    d="M2 29C2 13.536 14.536 1 30 1C45.464 1 58 13.536 58 29C58 44.464 45.464 57 30 57C14.536 57 2 44.464 2 29Z"
                    fill="#FFA229"
                    shapeRendering="crispEdges"
                  />
                  <g filter="url(#filter1_d_19910_39)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 21.2667C18 19.7732 18 19.0265 18.2906 18.456C18.5463 17.9543 18.9543 17.5463 19.456 17.2906C20.0265 17 20.7732 17 22.2667 17H37.7333C39.2268 17 39.9735 17 40.544 17.2906C41.0457 17.5463 41.4537 17.9543 41.7094 18.456C42 19.0265 42 19.7732 42 21.2667V32.7333C42 34.2268 42 34.9735 41.7094 35.544C41.4537 36.0457 41.0457 36.4537 40.544 36.7094C39.9735 37 39.2268 37 37.7333 37H31.8855L34.9428 40.0573C35.4635 40.578 35.4635 41.4222 34.9428 41.9429C34.4221 42.4636 33.5779 42.4636 33.0572 41.9429L30 38.8857L26.9428 41.9429C26.4221 42.4636 25.5779 42.4636 25.0572 41.9429C24.5365 41.4222 24.5365 40.578 25.0572 40.0573L28.1145 37H22.2667C20.7732 37 20.0265 37 19.456 36.7094C18.9543 36.4537 18.5463 36.0457 18.2906 35.544C18 34.9735 18 34.2268 18 32.7333V21.2667ZM36.1311 22.5984C36.7211 23.0389 36.8423 23.8744 36.4017 24.4645L32.9148 29.1344C32.4807 29.7159 31.6866 29.8924 31.047 29.5498L28.4969 28.1837L25.6414 31.2432C25.139 31.7815 24.2952 31.8106 23.7569 31.3082C23.2186 30.8057 23.1895 29.962 23.6919 29.4237L27.1775 25.6891C27.6314 25.2028 28.3559 25.0829 28.9423 25.397L31.3959 26.7115L34.265 22.869C34.7055 22.279 35.541 22.1578 36.1311 22.5984Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_19910_39"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_19910_39"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_19910_39"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_19910_39"
                    x="16"
                    y="16"
                    width="28"
                    height="29.3334"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_19910_39"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_19910_39"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col gap-1 md:gap-2">
                <h5 className="text-white text-xl md:text-2xl font-bold">
                  Bring those ideas to life
                </h5>
                <p className="text-sm md:text-base text-[#AAB5CD]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video container - full width on mobile, half width on lg screens */}
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
          <img
            src={Video}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <img
            src={Yt}
            alt="YouTube play button"
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[154px]"
          />
          <div className="absolute w-full h-full inset-0 rounded-t-xl bg-gradient-to-b from-[rgba(20,120,241,0.35)] from-[45.74%] to-black to-[92.94%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewSection;
