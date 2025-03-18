import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", title: "1. Information We Collect" },
    { id: "use", title: "2. How We Use Your Information" },
    { id: "share", title: "3. How We Share Your Information" },
    { id: "cookies", title: "4. Cookies and Tracking Technologies" },
    { id: "security", title: "5. Data Security" },
    { id: "rights", title: "6. Your Rights" },
    { id: "children", title: "7. Children's Privacy" },
    { id: "confidentiality", title: "8. Basic Confidentiality Policy" },
    { id: "errors", title: "9. Availability - Errors -Inaccuracies" },
    { id: "accounts", title: "10. Accounts" },
    { id: "changes", title: "11. Changes to This Privacy Policy" },
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
          Privacy <span className="text-[#E8682B]">Policy</span>
        </h1>
        <hr className="w-[164px] mx-auto" />
      </div>

      <div className="text-white mt-6 md:mt-12 px-6">
        <p className="hidden md:block text-[24px] text-center">
          <span className="text-[#E8682B]">CHIPSETTV.COM</span> is committed to
          maintaining your trust, values your privacy, and recognizes the
          sensitivity of your personal information. We work toward protecting
          the privacy of users on our website. We have carefully crafted this
          Privacy Policy to address concerns you might have and to assure you
          that if you give us personal information, we will treat it carefully
          and appropriately. <br />
          <br />
          BY USING <span className="text-[#E8682B]">ChipSetTV.COM</span>, YOU
          CONSENT TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY AND TO OUR
          PROCESSING OF PERSONAL INFORMATION FOR THE PURPOSES STATED BELOW. IF
          YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY,
          PLEASE DO NOT USE <span className="text-[#E8682B]">ChipSetTV</span>.
        </p>
        <p className="md:hidden text-[18px] text-center">
          <span className="text-[#E8682B]">CHIPSETTV.COM</span> is committed to
          maintaining your trust, values your privacy, and recognizes the
          sensitivity of your personal information. We work toward protecting
          the privacy of users on our website. We have carefully crafted this
          Privacy Policy to address concerns you might have and to assure you
          that if you give us personal information, we will treat it carefully
          and appropriately. <br />
          <br />
          BY USING <span className="text-[#E8682B]">ChipSetTV.COM</span>, YOU
          CONSENT TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY AND TO OUR
          PROCESSING OF PERSONAL INFORMATION FOR THE PURPOSES STATED BELOW. IF
          YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY,
          PLEASE DO NOT USE <span className="text-[#E8682B]">ChipSetTV</span>.
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
              slidesPerView: 4.5,
              spaceBetween: 5,
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
        <div className="space-y-10 text-white mt-10 md:mt-16 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "info" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              1. Information We Collect
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "info" ? "font-[700]" : ""
              }`}
            >
              <h3 className="font-[500]">Personal Information</h3>
              <p className="mt-5 mb-8 ">
                When you make an account on ChipsetTV, we collect some of your
                personal data, which includes:
              </p>
              <ul className="list-disc pl-8">
                <li>Name</li>
                <li>Email Address</li>
                <li>Password</li>
                <li>
                  Payment Information (processed securely by our payment
                  partners)Contact Information (phone number, address)
                </li>
              </ul>
              <h3 className="font-[500]">Non Personal Information</h3>
              <p className=" mb-8">
                We also use your non-personal data to improve your user
                experience. The non-personal information includes:
              </p>
              <ul className="list-disc pl-8">
                <li>Device Information (type, operating system, browser)</li>
                <li>
                  Usage Data (pages visited, time spent on pages, interactions)
                </li>
                <li>IP Address</li>
                <li>Cookies and Tracking Technologies</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "use" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              2. How We Use Your Information
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "accounts" ? "font-[700]" : ""
              }`}
            >
              <p className=" mb-8">
                At ChipsetTV, We use your information, both personal and
                non-personal, for different purposes, such as:
              </p>
              <h3 className="font-[500]">Providing Services:</h3>
              <p className=" mb-8">
                We use it for your Sign-up, account management, payment process,
                and content delivery.
              </p>
              <h3 className="font-[500]">Providing Services:</h3>
              <p className=" mb-8">
                We use it for your Sign-up, account management, payment process,
                and content delivery.
              </p>
              <h3 className="font-[500]">Personalization:</h3>
              <p className=" mb-8">
                You can recommend your content depending on your viewing
                interests and habits.
              </p>
              <h3 className="font-[500]">Improving Our Service:</h3>
              <p className=" mb-8">
                The data is also used to evaluate your usage behavior and
                improve your user experience and platform performance.
              </p>
              <h3 className="font-[500]">Communication:</h3>
              <p className=" mb-8">
                Your information enables us to communicate with you. Through
                your data, we are able to send you emails, responses, and
                newsletters.
              </p>
              <h3 className="font-[500]">Security:</h3>
              <p className=" mb-8">
                Your data is also used to protect you from security breaches and
                scams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "share" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              3. How We Share Your Information
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "accounts" ? "font-[700]" : ""
              }`}
            >
              <p className=" mb-8">
                We sometimes share your personal and non-personal data:
              </p>
              <h3 className="font-[500]">With Service Providers:</h3>
              <p className=" mb-8">
                Hosting providers and payment processors are our third-party
                partners. We have a secured partnership with them. They are
                obliged to safeguard your data and only use them to provide our
                services.
              </p>
              <h3 className="font-[500]">Legal Requirements:</h3>
              <p className=" mb-8">
                We may disclose or use your personal and non-personal
                information during legal requirements to comply with law
                requirements.
              </p>
              <h3 className="font-[500]">Business Transfers:</h3>
              <p className=" mb-8">
                Your information may also be transferred or shared with other
                owners during mergers, asset sales, or acquisitions, following
                this Privacy Policy.
              </p>
              <h3 className="font-[500]">With Your Concent:</h3>
              <p className=" mb-8">
                Only when you give us consent to use your information and data
                with a third party will we share your information.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold pr-2 ${
                activeTab === "cookies" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              4. Cookies and Tracking Technologies
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "cookies" ? "font-[700]" : ""
              }`}
            >
              <p className=" mb-8">
                We at ChipsetTV use tracking and cookies to elevate your
                streaming experience, identify user behavior, and evaluate
                website traffic. Users can always change the cookies settings
                through their web- browser Settings. If you disable them, it may
                cause coaches and affect the efficiency of the ChipsetTV
                services.
              </p>
              <h3 className="font-[500]">Types of Cookies We Use:</h3>
              <p className=" mb-8">
                Essential Cookies: A set of cookies that are necessary to
                operate the Website.
              </p>
              <h3 className="font-[500]">Performance Cookies:</h3>
              <p className=" mb-8">
                We use cookies to understand the intersection pattern of users
                with our site.
              </p>
              <h3 className="font-[500]">Functional Cookies:</h3>
              <p className=" mb-8">
                They are for remembering your account settings and preferences.
                Advertising Cookies: This special set of cookies shows you
                advertisements based on your needs and interests
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B] font-semibold ${
                activeTab === "security" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              5. Data Security
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "security" ? "font-[700]" : ""
              }`}
            >
              We use a highly secured security system to protect your personal
              and non-personal data. We safeguard your data from destruction,
              unauthorized access, or disclosure. These practices include highly
              secure servers, regular security evaluation, and encryption.
              Remember that no security measure on the internet gives 100%
              security, so we cannot give an absolute guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] text-[#E8682B] font-semibold ${
                activeTab === "rights" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              6. Your Rights
            </h2>

            <div
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "accounts" ? "font-[700]" : ""
              }`}
            >
              <p className=" mb-8">
                We give the following rights to our users regarding their
                personal information based on their locations:
              </p>
              <h3 className="font-[500]">Access:</h3>
              <p className=" mb-8">
                You can request a detailed copy of your personal data that we
                possess.
              </p>
              <h3 className="font-[500]">Correction:</h3>
              <p className=" mb-8">
                You have the right to request corrections for any incomplete or
                inaccurate data on our server.
              </p>
              <h3 className="font-[500]">Deletion:</h3>
              <p className=" mb-8">Request for any data deletion.</p>
              <h3 className="font-[500]">Restriction:</h3>
              <p className=" mb-8">
                Allows you to request restriction for your personal information.
              </p>
              <h3 className="font-[500]">Portability:</h3>
              <p className=" mb-8">
                You can always ask to transfer your personal data from one
                service provider to another.
              </p>
              <h3 className="font-[500]">Objection:</h3>
              <p>Users can also object for the use of their personal data.</p>
              <p className=" mb-8">
                To exercise your rights, kindly contact our support team.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "children" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              7. Children’s Privacy
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "children" ? "font-[700]" : ""
              }`}
            >
              We ensure to protect the privacy of individuals under the age of
              13. We do not and will never intentionally collect your personal
              data. If we ever detect any data of children in our system, we
              quickly take action and delete them from our server.
            </p>
          </div>
          {/* confidentiality */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "confidentiality" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              8. Basic Confidentiality Policy
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "confidentiality" ? "font-[700]" : ""
              }`}
            >
              Where personal information is required to use or interact with
              CHIPSETTV.COM, it is our policy that this information - such as
              your name, postal or email address, or telephone number - is
              private and confidential. The personal information you provide to
              ChipSet TV is stored in a secure location, accessible only by
              appropriate staff, and is used for the purposes set forth in this
              policy, such as to process your order, reply to a question, or
              send requested materials information collected.
            </p>
          </div>

          {/* Availability - Errors -Inaccuracies */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "errors" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              9. Availability - Errors - Inaccuracies
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "errors" ? "font-[700]" : ""
              }`}
            >
              We are continually updating the offerings of products and
              services. We may experience delays in updating information on a
              product/service and in advertising on other websites. Therefore,
              some of the information found on a product/service may contain
              errors or inaccuracies and may not be complete or current products
              or services may be mispriced, described inaccurately, or
              unavailable. We, therefore, reserve the right to change or update
              information and to correct errors, inaccuracies, or omissions at
              any time without prior notice.
            </p>
          </div>
          {/* accounts */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "accounts" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              10. Accounts
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "accounts" ? "font-[700]" : ""
              }`}
            >
              When you create an account with us, you guarantee that you are
              above the age of 18 and that the information you provide us is
              accurate, complete, and current at all times. Inaccurate,
              incomplete, or obsolete information may result in the immediate
              termination of your account on the Service. You are responsible
              for maintaining the confidentiality of your account and password,
              including but not limited to the restriction of access to your
              computer as well as the account. You agree to accept
              responsibility for any activities or actions that occur under your
              account or password, whether your password is with our service or
              a third-party service. You must notify us immediately upon
              becoming aware of any breach of security or unauthorized use of
              your account. You may not use as a username the name of another
              person or entity or that is not lawfully available for use, a name
              or trademark that is subject to any rights of another person or
              entity other than you, without appropriate authorization. You may
              not use it as a username, any name that is offensive, vulgar, or
              obscene. We reserve the right to refuse service, terminate
              accounts, remove or edit content, or cancel orders at our sole
              discretion.
            </p>
          </div>
          {/* changes */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-[3fr,9fr] items-start">
            <h2
              className={`text-lg pb-1 md:text-[24px] font-semibold text-[#E8682B]  ${
                activeTab === "changes" ? "border-b" : ""
              }`}
              style={{ display: "inline-block", width: "fit-content" }}
            >
              11. Changes to This Privacy Policy
            </h2>

            <p
              className={`text-lg md:text-[20px] mb-2 font-[400] ${
                activeTab === "changes" ? "font-[700]" : ""
              }`}
            >
              We are continuously looking for better and more secure options to
              increase your security and privacy. Therefore, we may change or
              update our Privacy Policy altogether with time. We will notify you
              whenever we update or modify our Privacy Policy. You get a
              notification at the top of the screen stating “Latest Updates.” We
              request you always review the Privacy Policy occasionally to stay
              updated on how we protect your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
