import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { faqData } from "../../../data/faqData";

const FaqSection = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(null);

  const handleBorderClick = (index) => {
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-6 md:mx-24 mb-6 mt-16 lg:mt-28 overflow-hidden">
      {/* heading */}
      <h1 className="text-[32px] md:text-[55px] font-[700] uppercase leading-[43px] md:leading-[74px] text-center mb-6 md:mb-9 lg:mb-16 text-[#E8682B]">
        Faq's
      </h1>

      {/* faqs main */}
      <div className="flex flex-col w-full text-white">
        {faqData?.map((faq, index) => (
          <article
            key={index}
            className="border-t border-[#FFFFFF4D] px-3 py-7"
          >
            <div
              className="flex gap-2 lg:gap-10 cursor-pointer items-center lg:items-start justify-between w-full"
              onClick={() => handleBorderClick(index)}
            >
              {/* question */}
              <h2 className="text-base lg:text-lg font-semibold lg:font-normal flex-1 lg:flex-none lg:w-1/4 text-wrap">
                {faq.question}
              </h2>
              {/* answer -> for large device*/}
              <div
                className={`hidden lg:grid transition-all duration-300 overflow-hidden ease-in-out flex-1 font-inter text-gray-100 ${
                  isAccordingOpen === index
                    ? "grid-rows-[1fr] opacity-100 "
                    : "grid-rows-[0fr] opacity-0 max-h-10"
                }`}
              >
                <p className=" text-base leading-[25px] overflow-hidden text-wrap">
                  {faq.answer}
                </p>
                {/* Details Section */}
                {faq?.details && (
                  <div
                    className={`space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                      isAccordingOpen === index
                        ? "max-h-[500px] opacity-100 mt-4 "
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {faq.details.map((detail, i) => (
                      <div key={i} className="p-1.5 pl-0">
                        <h3 className="font-medium text-lg">{detail.title}</h3>
                        <p className="text-sm mt-1.5">{detail.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Advantages Section (Optional) */}
                {faq?.advantages && (
                  <p
                    className={`text-sm ${
                      isAccordingOpen === index ? "mt-4" : "opacity-0 mt-0"
                    }`}
                  >
                    {faq.advantages}
                  </p>
                )}
              </div>

              {/* icon */}
              <p>
                <FaPlus
                  className={`text-lg transition-all duration-300 ${
                    isAccordingOpen === index && "rotate-[45deg]"
                  }`}
                />
              </p>
            </div>
            {/* answer for small devices */}
            <div
              className={`lg:hidden grid transition-all duration-300 overflow-hidden ease-in-out flex-1 font-inter text-gray-200 ${
                isAccordingOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-base lg:text-lg leading-[25px] overflow-hidden text-wrap">
                {faq.answer}
              </p>
              {/* Details Section */}
              {faq?.details && (
                <div
                  className={` space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    isAccordingOpen === index
                      ? "max-h-[500px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.details.map((detail, i) => (
                    <div key={i} className="p-1.5 pl-0">
                      <h3 className="font-medium text-lg">{detail.title}</h3>
                      <p className="text-sm mt-1.5">{detail.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Advantages Section (Optional) */}
              {faq?.advantages && (
                <p
                  className={`text-sm ${
                    isAccordingOpen === index
                      ? "max-h-[500px] opacity-100  mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.advantages}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;


