import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software allows you to recover deleted files from your desktop. The recovery process scans your storage device for deleted files and helps restore them to their original state or to a location of your choice.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software allows you to recover deleted files from your desktop. The recovery process scans your storage device for deleted files and helps restore them to their original state or to a location of your choice.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software allows you to recover deleted files from your desktop. The recovery process scans your storage device for deleted files and helps restore them to their original state or to a location of your choice.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software allows you to recover deleted files from your desktop. The recovery process scans your storage device for deleted files and helps restore them to their original state or to a location of your choice.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software allows you to recover deleted files from your desktop. The recovery process scans your storage device for deleted files and helps restore them to their original state or to a location of your choice.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-6 sm:py-8 lg:py-10 px-3 sm:px-4 max-w-7xl mx-auto bg-[#FAFAFA]">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <p className="text-[#F5921E] font-medium mb-1 sm:mb-2">FAQ</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A2A0E]">
          Frequent Ask Questions
        </h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
          >
            <div
              className="flex items-center flex-row min-w-full"
              onClick={() => toggleFAQ(index)}
            >
              {/* Left colored bar - hidden on mobile, visible on sm and up */}
              <svg
                className="hidden sm:block"
                width="7"
                height="69"
                viewBox="0 0 7 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.8"
                  x="-3.5"
                  width="10"
                  height="69"
                  fill="url(#paint0_linear_1_22262)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_22262"
                    x1="1.5"
                    y1="0"
                    x2="1.5"
                    y2="69"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFA229" />
                    <stop offset="0.848958" stopColor="#1C4670" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Mobile-friendly colored indicator */}
              <div className="block sm:hidden w-1 h-full bg-gradient-to-b from-[#FFA229] to-[#1C4670]"></div>
              <div className="flex justify-between items-center p-3 sm:p-4 lg:p-5 cursor-pointer w-full">
                <h3 className="text-base sm:text-lg font-medium text-gray-800 pr-2">
                  {faq.question}
                </h3>
                <div
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 12 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_22278)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9 9L10.9 8L3.90002 1H2.90002L1.90002 2V4L7.90002 9L1.90002 15V16L2.90002 17H3.90002L10.9 10L11.9 9Z"
                        fill="#555555"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_22278">
                        <rect
                          width="11"
                          height="18"
                          fill="white"
                          transform="translate(0.900024)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {openIndex === index && (
              <div className="p-3 sm:p-4 lg:p-5 pt-0 border-t border-gray-200 bg-gray-50">
                <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center w-full mt-4 sm:mt-6">
        <button className="font-inter text-sm sm:text-base p-2 sm:p-3 px-3 sm:px-4 my-2 text-white bg-[#1C4670] rounded">
          <div className="flex flex-row gap-2 sm:gap-3 items-center">
            <p className="text-sm sm:text-base font-semibold text-white">Show More</p>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66667 6H12.5M8.33333 1L12.7441 5.41074C13.0695 5.73618 13.0695 6.26382 12.7441 6.58926L8.33333 11"
                stroke="white"
                strokeWidth="1.67"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;