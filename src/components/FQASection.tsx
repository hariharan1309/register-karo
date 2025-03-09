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
    <div className="py-16 px-4 max-w-6xl mx-auto">
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
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
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

            {openIndex === index && (
              <div className="p-5 pt-0 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#1D4E89] text-white py-3 px-6 rounded-lg flex items-center hover:bg-[#153a67] transition-colors duration-300">
          Show more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
