import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", title: "Acceptance of Terms" },
    { id: "service", title: "Description of Service" },
    { id: "accounts", title: "User Accounts" },
    { id: "payment", title: "Subscription and Payment" },
    { id: "usage", title: "Content Usage" },
    { id: "general", title: "General" },
    { id: "property", title: "Intellectual Property" },
    { id: "conduct", title: "User Conduct" },
    { id: "termination", title: "Termination" },
    { id: "warranty", title: "Disclaimer of Warranties" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "law", title: "Governing Law" },
    { id: "communications", title: "Communications" },
    { id: "changes", title: "Changes to Terms" },
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
          Terms and <span className="text-[#E8682B]">Conditions</span>
        </h1>

        <span className="text-[#E8682B80] border-t border-[#717171] pt-3 ">
          Last Updated: 01 - 01 - 2024
        </span>
      </div>

      <div className="text-white mt-6 md:mt-12 px-6 text-center">
        <p className="hidden md:block text-[24px]">
          Welcome to <span className="text-[#E8682B]">ChipsetTV!</span> Our
          Terms and Conditions highlight the rules for using our website{" "}
          <span className="text-[#E8682B]">chipsetv.com</span>. When{" "}
          <br />
          you access or use our Service, you automatically agree to comply with
          these Terms. Kindly give them a careful read.
        </p>
        <p className="md:hidden text-[18px] text-center">
          Welcome to <span className="text-[#E8682B]">ChipsetTV!</span> Our
          Terms and Conditions highlight the rules for using our website{" "}
          <span className="text-[#E8682B]">chipsetv.com</span> ("Service"). When{" "}
          <br />
          you access or use our Service, you automatically agree to comply with
          these Terms. Kindly give them a careful read.
        </p>
        <hr className="w-[300px] md:w-[546px] mx-auto my-6" />
      </div>

      <div className="px-6 md:px-24 py-8">
        {/* Tabs */}

        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5.5}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6.5,
              spaceBetween: 10,
            },
          }}
          className="custom-swiper flex justify-between"
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
        <div className="space-y-10 text-white mt-16 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "terms" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Acceptance of Terms
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "terms" ? "font-[700]" : ""
              }`}
            >
              If you access or use our platform ChipsetTV, you intentionally
              comply with our Terms and Privacy Policy. Users who think they do
              not agree with any part of our Terms cannot use our Service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "service" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Description of Service
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "service" ? "font-[700]" : ""
              }`}
            >
              ChipsetTV is a streaming platform. It offers a variety of movies,
              shows, original content, and live channels. You can access our
              platform through various devices, which include smartphones, TVs,
              tablets, computers, gaming consoles, and streaming devices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "accounts" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              User Accounts
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "accounts" ? "font-[700]" : ""
              }`}
            >
              <h3>3.1 Registration</h3>
              <p className="mt-5 mb-8">
                If you want to access features of our{" "}
                <span className="font-[700]">ChipsetTV</span>, then you must
                sign up. Create your account. During account creation, you agree
                to give only accurate, complete, and latest information during
                registration.
              </p>
              <h3>3.2 Account Security</h3>
              <p className="mt-5">
                You agree to be responsible for protecting your credentials on
                your own. Anything that happens under your account also comes
                under your responsibility. If you ever encounter any
                unauthorized access to your account, notify us quickly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "payment" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Subscription and Payment
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "payment" ? "font-[700]" : ""
              }`}
            >
              <h3>4.1 Subscription Plans</h3>
              <p className="mt-5 mb-8">
                If you want to access features of our{" "}
                <span className="font-[700]">ChipsetTV</span> presents multiple
                subscription plans, which include Monthly, Quarterly, and Annual
                plans. You can check out the details of each subscription plan
                on our Pricing Page.
                <br />
                <br />
                ChipSet TV guarantees that all the TV subscriptions codes
                purchased from our website will be activated for the agreed-on
                period, for any issue that comes to the servers, stopping or not
                working content contact us and we will do our best to fix the
                problems. ChipSet TV does not sell any internet cable boxes, it
                is the client's responsibility to obtain their own box or Fire
                Stick.
              </p>
              <h3>4.2 Payment</h3>
              <p className="mt-5 mb-8">
                All of your payments are securely processed through our trusted
                third-party payment managers. When you give us your payment
                information, you actually consent to us charging you the
                required fees through your selected payment method.
                <br />
                <br />
                Your payment is handled by credit card, PayPal or CashApp
                payment gateways. If the transaction failed, contact your bank
                and ask them to allow the transaction. For any inquiry about
                billing or support, please contact us by Email:
                Support@ChipSetTV.com. ChipSet TV has the right to cancel any
                payment if it turners out that it's not in fact paid or if the
                client applied credits to place his order, We don't support the
                "applied credits" payments. By accessing or using the service,
                you agree to be bounded by these entire terms/conditions. If you
                do not agree with any part, then, you do not have permission to
                access any part of our service.
              </p>
              <h3>4.3 Cancellation</h3>
              <p className="mt-5 mb-8">
                Please inform us if you plan to cancel your subscription or
                place it on hold.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "usage" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Content Usage
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "usage" ? "font-[700]" : ""
              }`}
            >
              <h3>5.1 License</h3>
              <p className="mt-5 mb-8">
                ChipsetTV gives you a limited license to access any content from
                its library for your personal use. The license is non-exclusive
                and non-transferable. You cannot use the content for
                commercials. All rights of content are reserved exclusively by
                ChipsetTV and its original licensors.
              </p>
              <h3>5.2 Restrictions</h3>
              <p className="mt-5">
                You agree not to:
                <ul className="list-disc pl-8">
                  <li>
                    Create, remake, modify, distribute, publicly display any
                    content that is available on our ChipsetTV.
                  </li>
                  <li>
                    Extract data or information from LeMTV through any software
                    or automated systems.
                  </li>
                  <li>
                    Extract data or information from LeMTV through any software
                    or automated systems.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* general */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "general" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              General
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "general" ? "font-[700]" : ""
              }`}
            >
              We Provide Cable TV Subscriptions. 1 Connection = 1 Device, you
              can't use more than one device per connection! any attempt to use
              more than 1 device at the same time exposes your subscription to
              get permanently terminated! Freezing, and buffering content is
              normal in any internet based cable TV industry, therefore you may
              find these issues, Channels & VOD in any package are subject to
              update, change, or removal at any time without prior notice. Your
              cable tv subscription credentials are usually sent to the client
              registered email within 1-2 business days after receiving a clear
              payment. The client is responsible for getting to understanding
              how internet cable works, there are also videos to help assist. We
              perform maintenance to our servers from time to time, this could
              happen anytime and the time frame is not estimated.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "property" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Intellectual Property
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "property" ? "font-[700]" : ""
              }`}
            >
              All tangible content on our Service is the legal property of
              ChipsetTV or its licensors. This content includes text, graphics,
              logos, images, and software. They all are rightfully protected by
              the state law of intellectual property. Any unauthorized use of
              our content is strictly prohibited.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "usage" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Content Usage
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "usage" ? "font-[700]" : ""
              }`}
            >
              <p className="mt-5">
                You comply to use our Service and content in a legal way. You
                also consent to not infringing any intellectual property on
                ChipsetTV. You are prohibited to but are not limited to:
                <ul className="list-disc pl-8">
                  <li>Participate in any illegal activities.</li>
                  <li>Displaying any offensive or harmful content.</li>
                  <li>Wrongfully interfere with the Service’ functionality.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "termination" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Termination
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "terms" ? "font-[700]" : ""
              }`}
            >
              You give consent to ChipsetTV to terminate or suspend your account
              at any time without notice, if you violate any of these Terms or
              try to harm us in any way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "warranty" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Disclaimer of Warranties
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "terms" ? "font-[700]" : ""
              }`}
            >
              ChipsetTV offers Service in its current state "as available"
              without any kind of warranty until it is expressed. We do not and
              will never guarantee that our Service will be error-free,
              uninterrupted, or 100% secured.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "liability" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Limitation of Liability
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "liability" ? "font-[700]" : ""
              }`}
            >
              To the fullest extent permitted by law, ChipsetTV shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your use of or inability to use
              the Service, even if we have been advised of the possibility of
              such damages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "indemnification" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Indemnification
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "indemnification" ? "font-[700]" : ""
              }`}
            >
              As a result of your use of the Service or breach of these Terms,
              you thus legally consent to defend, indemnify, and hold
              unaccountable ChipsetTV, its officers, affiliates, directors,
              agents, and employees against any kinds of claims, damages,
              losses, expenses, and liabilities which also includes legal fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "law" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Governing Law
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "terms" ? "font-[700]" : ""
              }`}
            >
              All of our Terms and Privacy Policy are governed and protected by
              State law. If any of our Services or Terms leads to any dispute
              later, you consent to submit the judgment from the state’s local
              court.
            </p>
          </div>
          {/* communications */}

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "communications" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Communications
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "communications" ? "font-[700]" : ""
              }`}
            >
             By creating an account on our website, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt-out of receiving any, or all of these communications by following the unsubscribe link or instructions provided in any of the emails we send or the support tickets on your registered account on this website.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "warranty" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Changes to Terms
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "terms" ? "font-[700]" : ""
              }`}
            >
              ChipsetTV holds the right to change and modify these Terms at any
              time. When we change our Terms, we will notify you. We will add
              the prompt "Last Updated"  with the date at the very top of this
              page. If you continue to use our Services even after the update,
              you automatically agree to our new Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
