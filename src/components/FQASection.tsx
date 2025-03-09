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
    <div className="py-10 px-4 max-w-7xl mx-auto bg-[#FAFAFA]">
      <div className="text-center mb-12">
        <p className="text-[#F5921E] font-medium mb-2">FAQ</p>
        <h2 className="text-4xl font-bold text-[#3A2A0E]">
          Frequent Ask Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
          >
            <div
              className="flex items-center flex-row min-w-full "
              onClick={() => toggleFAQ(index)}
            >
              <svg
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
                    <stop stop-color="#FFA229" />
                    <stop offset="0.848958" stop-color="#1C4670" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between items-center p-5 cursor-pointer w-full">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <div
                  className={`transition-transform duration-300 ${
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
                    <g clip-path="url(#clip0_1_22278)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
              <div className="p-5 pt-0 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-center w-full mt-4">
        <button className="font-inter text-base p-3 px-4 my-2 text-white bg-[#1C4670] rounded ">
          <div className="flex flex-row gap-3 items-center">
            <p className=" text-base font-semibold text-white">Show More</p>
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
                stroke-width="1.67"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
