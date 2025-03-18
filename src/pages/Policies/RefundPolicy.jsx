import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RefundPolicy = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "subscription", title: "1. Subscription Refunds" },
    { id: "cancellation", title: "2. Cancellation Policy" },
    { id: "non-refundable", title: "3. Non-Refundable Situation" },
    { id: "request", title: "4. How to Request a Refund" },
  ];

  return (
    <div>
      <div
        className="w-full pt-8 text-center px-6"
        style={{
          background:
            "linear-gradient(180deg, #9C3200 9.34%, rgba(0, 0, 0, 0.00) 113.86%)",
        }}
      >
        <h1 className="text-[32px] md:text-[50px] font-[700] font-[Satoshi] uppercase leading-[43px] md:leading-[74px] text-center mb-6 text-white">
          Refund <span className="text-[#E8682B]">Policy</span>
        </h1>
        <hr className="w-[164px] mx-auto" />
      </div>

      <div className="text-white mt-6 md:mt-12 px-6">
        <p className="hidden md:block text-[24px] text-center">
          <span className="text-[#E8682B] ">ChipsetTV</span> aims to offer you
          the best viewing experience throughout your subscription. If you are
          unsatisfied and comfortable <br />
          with the subscription, you always have other options.
        </p>
        <p className="md:hidden text-[18px] text-center">
          <span className="text-[#E8682B]">ChipsetTV</span> aims to offer you
          the best viewing experience throughout your subscription. If you are
          unsatisfied and comfortable with the subscription, you always have
          other options.
        </p>
        <hr className="w-[300px] md:w-[546px] mx-auto my-6" />
      </div>

      <div className="px-6 md:px-24 py-8 ">
        {/* Tabs */}

        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 6,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="custom-swiper flex justify-between "
        >
          {/* Rendering Films */}
          {tabs.map((tab, i) => (
            <SwiperSlide key={i}>
              <div className="w-full">
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={` text-sm md:text-[20px] font-[700] transition-colors text-[#E8682B] pb-2 ${
                    activeTab === tab.id ? "border-b " : "text-[#E8682B]"
                  }`}
                >
                  {tab.title}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="space-y-16 text-white mt-10 md:mt-16 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "subscription" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              1. Subscription Refunds
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "subscription" ? "font-[700]" : ""
              }`}
            >
              <h3 className="font-[500]">Monthly Subscription</h3>

              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Eligibility</li>
              </ul>
              <p>
                You can apply for subscriptions in the first seven days of your
                subscription.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Process</li>
              </ul>
              <p>
                if you want to get a refund, email all your details and refund
                reason to ChipsetTV’s support team.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Conditions</li>
              </ul>
              <p>
                Users can only get a refund if they apply within the first seven
                days and they didn’t use the account excessively.
              </p>
              <h3 className="font-[500]">Quarterly and Annual Subscriptions</h3>

              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Eligibility</li>
              </ul>
              <p>
                For Quarter or Annual Subscriptions, you get a refund if you
                apply within the first 14 days. 
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Process</li>
              </ul>
              <p>
                to request a refund, email all your details and refund reasons
                to support@ChipsetTV.com.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Conditions</li>
              </ul>
              <p>
                Users only get a refund if they make the request within the
                first 14 days of subscription with minimal use of the service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B]  ${
                activeTab === "cancellation" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              2. Cancellation Policy
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "cancellation" ? "font-[700]" : ""
              }`}
            >
              <h3 className="font-[500]">
                ChipsetTV allows you to cancel the subscription easily at any
                time. Once you cancel the subscription:
              </h3>

              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Monthly Subscribers:</li>
              </ul>
              <p>
                You continue to have access to the account until the last date
                of your current billing period.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Quarterly and Annual Subscribers:</li>
              </ul>
              <p>
                Users continue to have access to their yearly or quarterly
                subscription plan until the last date of their current billing
                time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B]  ${
                activeTab === "non-refundable" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              3. Non-Refundable Situations
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "non-refundable" ? "font-[700]" : ""
              }`}
            >
              <h3 className="font-[500]">
                Users can not get a refund in situations like:
              </h3>

              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Partial Usage:</li>
              </ul>
              <p>
                In a situation where you have utilized your subscription for a
                significant time.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Expired Refund Window:</li>
              </ul>
              <p>
                If you request a refund after the eligibility period, you will
                not get the refund. The eligibility period for a monthly
                subscription is the first 7 days, and a yearly or quarterly
                subscription is 14 days.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Promotional Offers:</li>
              </ul>
              <p>
                If you purchased a subscription through a third-party discount
                code or promotion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B]  ${
                activeTab === "request" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              3. How to Request a Refund
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "request" ? "font-[700]" : ""
              }`}
            >
              <h3 className="font-[500]">
                If you want to request a refund, kindly following these:
              </h3>

              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Contact Support:</li>
              </ul>
              <p>Write an Email with a clear subject line “Request Refund.”</p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Provide Details:</li>
              </ul>
              <p>
                Don’t forget to mention your account details, purchase date,
                subscription plan name, and a valid reason for the subscription
                refund.
              </p>
              <ul className="list-disc pl-8 font-[500] mt-5">
                <li>Review Process:</li>
              </ul>
              <p>
                The ChipsetTV support team will review the emails and respond to
                you back within 5-7 working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
