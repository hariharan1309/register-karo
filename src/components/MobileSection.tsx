import React from "react";
import Phone from "../assets/Phone1.png";
const MobileAppSection: React.FC = () => {
  return (
    <div className="bg-[#1C4670] py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="flex flex-row">
        <div className="max-w-[500px] mb-8">
          <h2 className="text-[32px] font-[750] leading-10 text-white mb-6">
            Manage Your Services by your Mobile Phone
          </h2>

          <p className="text-[#AAB5CD] mb-12 leading-[26px]">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>

          <div className="space-y-4">
            <h3 className="text-white text-[15px] font-medium mb-4">
              Get the App
            </h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center bg-white rounded border border-[#A5C937] p-4 py-3 transition"
              >
                <div className="mr-3">
                  <svg
                    width="24"
                    height="29"
                    viewBox="0 0 24 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2057 6.94967C12.1605 4.90565 13.2907 0.654085 18.173 0C18.7154 1.63522 17.088 6.8134 12.2057 6.94967Z"
                      fill="#A5C937"
                    />
                    <path
                      d="M7.8659 6.94967C3.37187 6.94967 0 10.7465 0 15.262C0 17.942 1.05784 24.2012 5.28914 27.7987C5.35973 27.8483 5.42923 27.8976 5.49784 27.9463C6.74744 28.8325 7.7076 29.5134 9.76457 28.48C10.6616 28.0294 11.4942 27.8582 12.5448 27.8798C13.5953 27.8582 14.428 28.0294 15.325 28.48C17.3819 29.5134 18.3421 28.8325 19.5917 27.9463C19.6313 27.9182 19.6711 27.89 19.7113 27.8615C19.7408 27.8407 19.7705 27.8197 19.8004 27.7987C21.8881 26.0237 23.2033 23.6007 24 21.2794C21.8345 20.217 20.3429 17.9827 20.3429 15.3983C20.3429 13.1107 21.5116 11.0974 23.2818 9.92839C21.8635 8.11763 19.7161 6.94967 17.2236 6.94967C16.7263 6.99509 15.5691 7.1677 14.9181 7.49475C14.1044 7.90355 12.9516 8.17609 12.5448 8.17609C12.1379 8.17609 10.9851 7.90355 10.1714 7.49475C9.52045 7.1677 8.36318 6.99509 7.8659 6.94967Z"
                      fill="#A5C937"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-sm font-bold text-gray-900">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center bg-white rounded border border-[#A5C937] p-4 py-3 transition"
              >
                <div className="mr-3">
                  <svg
                    width="24"
                    height="27"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6269 9.12414L15.6137 12.3828L4.07844 0.465517L18.6269 9.12414Z"
                      fill="#A5C937"
                    />
                    <path
                      d="M1.58484 26.7201C1.0041 27.3139 0 26.9002 0 26.0671V0.932943C0 0.101376 1.00095 -0.313096 1.58262 0.277613L13.9152 12.8018C14.2717 13.1638 14.2727 13.7469 13.9174 14.1102L1.58484 26.7201Z"
                      fill="#A5C937"
                    />
                    <path
                      d="M20.1791 9.96207L23.1923 11.731C24.2711 12.8412 24.2674 13.9689 23.1923 15.0828L20.1791 16.8207L16.7399 13.4379L20.1791 9.96207Z"
                      fill="#A5C937"
                    />
                    <path
                      d="M18.7486 17.8448L15.5833 14.5862L3.92626 26.4724L18.7486 17.8448Z"
                      fill="#A5C937"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-sm font-bold text-gray-900">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Phone}
        alt=""
        className="absolute top-1/5 w-[660px] h-[820px] left-2/5"
      />
      <img
        src={Phone}
        alt=""
        className="absolute -top-24 w-[650px] h-[820px] left-2/3"
      />
    </div>
  );
};

export default MobileAppSection;
