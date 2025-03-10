import React, { useState } from "react";
import Image from "../assets/Testimonial.png";
// Define the testimonial type
interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialSection: React.FC = () => {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4,
    },
    {
      id: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 5,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Dynamic max index based on screen size
  const getMaxIndex = () => {
    // We'll use window.innerWidth in a real implementation
    // For this example, we're basing it on a className check that would be added by Tailwind's responsive classes
    const isMobile = window.innerWidth < 768; // md breakpoint
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // lg breakpoint
    
    if (isMobile) {
      return testimonials.length - 1; // Show 1 card on mobile
    } else if (isTablet) {
      return testimonials.length - 1.5; // Show 1.5 cards on tablet
    } else {
      return testimonials.length - 2.5; // Original: show 2.5 cards on desktop
    }
  };

  const maxIndex = getMaxIndex();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex > maxIndex ? maxIndex : slideIndex);
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    // Add empty stars to make up 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  // Function to get the correct width percentage based on screen size
  const getCardWidth = () => {
    return {
      xs: "w-full", // 100% on small screens
      sm: "w-[85%]", // 85% on small-medium screens
      md: "w-[70%]", // 70% on medium screens
      lg: "w-[40%]", // 40% on large screens (original)
    };
  };

  // Function to get translation percentage based on screen size
  const getTranslationPercentage = () => {
    if (window.innerWidth < 640) { // sm breakpoint
      return currentIndex * 100; // Full card width
    } else if (window.innerWidth < 768) { // md breakpoint
      return currentIndex * 85; // 85% card width
    } else if (window.innerWidth < 1024) { // lg breakpoint
      return currentIndex * 70; // 70% card width
    } else {
      return currentIndex * (100 / 2.5); // Original desktop calculation
    }
  };

  return (
    <div className="bg-[#1C4670] py-8 sm:py-10 md:py-12 px-4 md:px-8 pr-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-0">
            What peoples says about us
          </h2>
          <div className="flex flex-row items-center gap-2">
            <button
              onClick={goToPrevious}
              className="bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="bg-orange-500 rounded-full p-1.5 sm:p-2 shadow-md hover:bg-orange-600 focus:outline-none"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${getTranslationPercentage()}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`${getCardWidth().xs} sm:${getCardWidth().sm} md:${getCardWidth().md} lg:${getCardWidth().lg} flex-shrink-0 px-1 sm:px-2`}
                >
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md min-h-[250px] sm:min-h-[300px] flex flex-col">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <span className="text-gray-500 text-2xl sm:text-3xl font-serif">
                        "
                      </span>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow line-clamp-5 sm:line-clamp-none">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                        <img
                          src={Image}
                          alt={testimonial.author}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                currentIndex === index ? "bg-orange-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;