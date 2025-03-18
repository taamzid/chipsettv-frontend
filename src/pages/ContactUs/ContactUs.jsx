import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "getInTouch", title: "Get in Touch with Us!" },
    { id: "support", title: "Customer Support" },
    { id: "inquiries", title: "General Inquiries" },
    { id: "partnership", title: "Partnerships & Media Inquiries" },
    { id: "follow", title: "Follow Us" },
    { id: "readyToHelp", title: "We're Ready to Help!" },
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
          Contact <span className="text-[#E8682B]">Us</span>
        </h1>
        <hr className="w-[164px] mx-auto" />
      </div>

      <div className="px-6 md:px-24 pt-20 ">
        {/* Tabs */}

        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={6}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
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
        <div className="space-y-12 md:space-y-16 text-white mt-10 md:mt-16 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "getInTouch" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Get in Touch with Us!
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "getInTouch" ? "font-[700]" : ""
              }`}
            >
              <p>
                We’re here to help! Whether you have questions about our
                service, need support, or want to provide feedback, feel free to
                reach out.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "support" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Customer Support
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "getInTouch" ? "font-[700]" : ""
              }`}
            >
              <p>
                Having trouble streaming or need assistance with your account?
                Our team is available 24/7 to help you get the best experience.
              </p>

              <div className="flex items-center gap-4 mt-5">
                <p className="font-[500]">Email:</p>
                <input
                  type="email"
                  className="md:w-[60%] bg-transparent focus:outline-none focus:border-b px-3"
                />
              </div>
              <div className="flex items-center gap-4 ">
                <p className="font-[500]">Phone:</p>
                <input
                  type="text"
                  className="md:w-[60%] bg-transparent focus:outline-none focus:border-b px-3"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "inquiries" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              General Inquiries
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "Inquiries" ? "font-[700]" : ""
              }`}
            >
              <p>
                Have questions about our services, pricing, or features? We’d
                love to chat!
              </p>

              <div className="flex items-center gap-4 mt-5">
                <p className="font-[500]">Email:</p>
                <input
                  type="email"
                  className="md:w-[60%] bg-transparent focus:outline-none focus:border-b px-3"
                />
              </div>
              <hr className="md:w-[70%] mt-12 md:mt-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "inquiries" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              <span className="hidden md:block">
                Partnerships & Media <br />
                Inquiries
              </span>
              <span className="md:hidden">Partnerships & Media Inquiries</span>
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "Inquiries" ? "font-[700]" : ""
              }`}
            >
              <p>
                Interested in partnerships or media opportunities? Get in touch
                with our team.
              </p>

              <div className="flex items-center gap-4 mt-5">
                <p className="font-[500]">Email:</p>
                <input
                  type="email"
                  className="md:w-[60%] bg-transparent focus:outline-none focus:border-b px-3"
                />
              </div>
              <hr className="md:w-[70%] mt-12 md:mt-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "follow" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              Follow Us
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "Inquiries" ? "font-[700]" : ""
              }`}
            >
              <p>
                Stay connected with us on social media for the latest updates,
                exclusive offers, and more.
              </p>

              <div className="flex items-center gap-2 md:gap-4 mt-5 text-[17px] md:text-[20px]">
                <Link className="font-[500]">Facebook</Link>
                <p className="font-[500]">|</p>
                <Link className="font-[500]">Twitter</Link>
                <p className="font-[500]">|</p>
                <Link className="font-[500]">Instagram</Link>
                <p className="font-[500]">|</p>
                <Link className="font-[500]">YouTube</Link>
              </div>
              <hr className="md:w-[70%] mt-12 md:mt-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "readyToHelp" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              We're Ready to Help!
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "readyToHelp" ? "font-[700]" : ""
              }`}
            >
              <p>
                Don’t hesitate to contact us — we’re committed to providing
                fast, reliable support.
              </p>

              <h1 className="text-[32px] font-[700] mt-12 leading-normal">
                Watch Live Now! <br />
                <span className="text-[#E8682B]">
                  Join the Stream Revolution!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
