import { useState } from "react";
import Logo from "../assets/logo.png";
import hatLogo from "../assets/hat.png";

const StickyHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-15 py-3 sm:py-4 lg:py-5 flex flex-row justify-between items-center relative">
      <div className="relative">
        <img 
          src={Logo} 
          alt="logo" 
          className="w-[150px] sm:w-[170px] md:w-[180px] lg:w-[200px] h-auto" 
        />
        <img
          src={hatLogo}
          alt=""
          className="size-[30px] sm:size-[35px] md:size-[40px] lg:size-[44px] left-[-15px] top-[-15px] sm:left-[-18px] sm:top-[-18px] md:left-[-20px] md:top-[-20px] lg:left-[-20px] lg:top-[-20px] absolute"
        />
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="lg:hidden focus:outline-none" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 12H21M3 6H21M3 18H21" 
            stroke="#272D37" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {/* Desktop navigation */}
      <div className="hidden lg:flex flex-row items-center gap-8 *:font-open-sans">
        <a href="#home" className="text-[#272D37] font-semibold text-base">
          Home
        </a>
        <a href="#home" className="text-[#272D37] font-semibold text-base">
          <div className="flex flex-row gap-2 items-center">
            <p>Our Services</p>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1L5 6L10 1L9 0L5 4L1 0L0 1Z"
                fill="#272D37"
              />
            </svg>
          </div>
        </a>
        <a href="#home" className="text-[#272D37] font-semibold text-base">
          Blog
        </a>
        <a href="#home" className="text-[#272D37] font-semibold text-base">
          Contact Us
        </a>
        <a href="#home" className="text-[#272D37] font-semibold text-base">
          About Us
        </a>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
              stroke="#212121"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className="w-[156px] h-[46px] flex items-center justify-center text-base font-bold text-white bg-[#FFA229] rounded">
          Talk An Expert
        </button>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
          <div className="flex flex-col gap-4 *:font-open-sans">
            <a href="#home" className="text-[#272D37] font-semibold text-base py-2">
              Home
            </a>
            <a href="#home" className="text-[#272D37] font-semibold text-base py-2">
              <div className="flex flex-row gap-2 items-center">
                <p>Our Services</p>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1L5 6L10 1L9 0L5 4L1 0L0 1Z"
                    fill="#272D37"
                  />
                </svg>
              </div>
            </a>
            <a href="#home" className="text-[#272D37] font-semibold text-base py-2">
              Blog
            </a>
            <a href="#home" className="text-[#272D37] font-semibold text-base py-2">
              Contact Us
            </a>
            <a href="#home" className="text-[#272D37] font-semibold text-base py-2">
              About Us
            </a>
            <div className="flex items-center justify-between py-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button className="w-full sm:w-[156px] h-[40px] sm:h-[46px] mt-2 flex items-center justify-center text-sm sm:text-base font-bold text-white bg-[#FFA229] rounded">
                Talk An Expert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyHeader;