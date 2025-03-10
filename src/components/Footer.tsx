import React from "react";
// import { Facebook, Instagram } from "react-feather";

interface FooterLinkProps {
  title: string;
  links: string[];
}

const FooterLinkSection: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="mb-8 md:mb-0 *:font-medium">
      <h3 className="text-[#FFA229] text-base font-bold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-3">
            <a
              href="#"
              className="text-[#AAB5CD] hover:text-amber-300 font-medium text-base transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "START A BUSINESS",
      links: [
        "Features",
        "Solutions",
        "Integrations",
        "Enterprise",
        "Solutions",
      ],
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    {
      title: "COMPLIANCE & TAX",
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    {
      title: "BIS & CDSCO",
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  ];

  return (
    <footer className="bg-[#00205C] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-24 *:font-inter">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <p className="text-[#AAB5CD] text-base font-medium mb-4">
                Design outstanding interfaces with advanced Figma features in a
                matter of minutes.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7628 12.2758C23.7628 11.46 23.6966 10.6399 23.5555 9.8374H12.2368V14.4584H18.7185C18.4495 15.9487 17.5853 17.2671 16.3198 18.1049V21.1032H20.1868C22.4576 19.0132 23.7628 15.9267 23.7628 12.2758Z"
                      fill="white"
                    />
                    <path
                      d="M12.2372 24.0001C15.4737 24.0001 18.2031 22.9374 20.1917 21.1032L16.3247 18.1048C15.2488 18.8368 13.8599 19.2512 12.2416 19.2512C9.11102 19.2512 6.4566 17.1392 5.50418 14.2996H1.51373V17.3905C3.55085 21.4427 7.70003 24.0001 12.2372 24.0001Z"
                      fill="white"
                    />
                    <path
                      d="M5.49972 14.3C4.99706 12.8096 4.99706 11.1958 5.49972 9.70544V6.6145H1.51368C-0.188318 10.0053 -0.188318 14.0001 1.51368 17.3909L5.49972 14.3Z"
                      fill="white"
                    />
                    <path
                      d="M12.2373 4.74942C13.9481 4.72296 15.6016 5.36672 16.8406 6.54842L20.2667 3.12237C18.0973 1.08526 15.218 -0.0347101 12.2373 0.000564525C7.70009 0.000564525 3.55091 2.55798 1.51379 6.61456L5.49983 9.70551C6.44784 6.86149 9.10667 4.74942 12.2373 4.74942Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6841 18.7033C20.3212 19.5418 19.8916 20.3136 19.3938 21.0232C18.7153 21.9906 18.1598 22.6602 17.7316 23.032C17.068 23.6424 16.3569 23.955 15.5954 23.9728C15.0488 23.9728 14.3895 23.8172 13.6221 23.5017C12.8522 23.1876 12.1447 23.032 11.4978 23.032C10.8193 23.032 10.0916 23.1876 9.31324 23.5017C8.53371 23.8172 7.90573 23.9816 7.4256 23.9979C6.6954 24.0291 5.96757 23.7076 5.24108 23.032C4.77739 22.6276 4.19741 21.9343 3.50262 20.9521C2.75716 19.9033 2.14429 18.687 1.66416 17.3004C1.14995 15.8026 0.892181 14.3523 0.892181 12.9482C0.892181 11.3398 1.23973 9.95259 1.93585 8.79011C2.48294 7.85636 3.21077 7.11979 4.12171 6.57906C5.03264 6.03834 6.01691 5.76279 7.07687 5.74516C7.65685 5.74516 8.41742 5.92456 9.36258 6.27715C10.3051 6.63091 10.9102 6.81032 11.1756 6.81032C11.3739 6.81032 12.0462 6.60054 13.1859 6.18233C14.2636 5.79449 15.1732 5.63391 15.9184 5.69716C17.9376 5.86012 19.4545 6.6561 20.4634 8.09013C18.6575 9.18432 17.7642 10.7169 17.782 12.6829C17.7983 14.2142 18.3538 15.4886 19.4457 16.5004C19.9405 16.97 20.493 17.333 21.1078 17.5907C20.9745 17.9774 20.8338 18.3477 20.6841 18.7033ZM16.0532 0.480137C16.0532 1.68041 15.6147 2.8011 14.7406 3.8384C13.6858 5.07155 12.41 5.78412 11.0265 5.67168C11.0089 5.52769 10.9987 5.37614 10.9987 5.21688C10.9987 4.06462 11.5003 2.83147 12.3911 1.82321C12.8358 1.3127 13.4014 0.888228 14.0873 0.549615C14.7717 0.216055 15.4191 0.031589 16.028 0C16.0458 0.160458 16.0532 0.320926 16.0532 0.480121V0.480137Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-amber-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_20094_424)">
                      <path
                        d="M16.8503 0H7.14973C3.20735 0 0 3.20735 0 7.14973V16.8503C0 20.7926 3.20735 24 7.14973 24H16.8503C20.7926 24 24 20.7926 24 16.8503V7.14973C24 3.20735 20.7926 0 16.8503 0ZM21.5856 16.8503C21.5856 19.4655 19.4655 21.5856 16.8503 21.5856H7.14973C4.5345 21.5856 2.4144 19.4655 2.4144 16.8503V7.14973C2.4144 4.53446 4.5345 2.4144 7.14973 2.4144H16.8503C19.4655 2.4144 21.5856 4.53446 21.5856 7.14973V16.8503Z"
                        fill="white"
                      />
                      <path
                        d="M12 5.79272C8.57729 5.79272 5.79272 8.57729 5.79272 11.9999C5.79272 15.4226 8.57729 18.2072 12 18.2072C15.4227 18.2072 18.2072 15.4226 18.2072 11.9999C18.2072 8.57725 15.4227 5.79272 12 5.79272ZM12 15.7928C9.90523 15.7928 8.20712 14.0947 8.20712 12C8.20712 9.90523 9.90527 8.20712 12 8.20712C14.0947 8.20712 15.7928 9.90523 15.7928 12C15.7928 14.0947 14.0947 15.7928 12 15.7928Z"
                        fill="white"
                      />
                      <path
                        d="M18.219 7.32673C19.0405 7.32673 19.7064 6.66083 19.7064 5.83939C19.7064 5.01796 19.0405 4.35205 18.219 4.35205C17.3976 4.35205 16.7317 5.01796 16.7317 5.83939C16.7317 6.66083 17.3976 7.32673 18.219 7.32673Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20094_424">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <FooterLinkSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="mt-8 lg:mt-10 pt-4 lg:pt-6 flex flex-col justify-center items-center">
          <a href="#" className="p-3 rounded-full transition-colors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 56 56"
              fill="none"
              className="sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#FFA229" />
              <path
                d="M28 37.3331L28 19.9998M20 26.6665L27.0572 19.6093C27.5779 19.0886 28.4221 19.0886 28.9428 19.6093L36 26.6665"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
          <p className="text-sm sm:text-base text-[#AAB5CD] font-medium text-center mt-3 mb-4 md:mb-0">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
