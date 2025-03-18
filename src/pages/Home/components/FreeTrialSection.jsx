import PrimaryButton from "../../../components/Button/PrimaryButton";
import arrowIcon from "../../../assets/icons/arrow.png";
import { useEffect, useState } from "react";
import mobileBg from "../../../assets/images/trialmobile.png";
import deskBg from "../../../assets/images/trial.png";

const FreeTrialSection = () => {
  const [bgImageDesc, setBgImageDesc] = useState(
    window.innerWidth >= 768 ? deskBg : ""
  );
  const [bgImage, setBgImage] = useState(
    window.innerWidth >= 768 ? "" : mobileBg
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImageDesc(window.innerWidth >= 768 ? deskBg : "");
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 768 ? "" : mobileBg);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className=" flex flex-col 2xl:flex-row my-12 items-center justify-between mb-6 gap-5 2xl:gap-20"
      style={{
        backgroundImage: `url(${bgImageDesc})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="w-full text-center md:text-left py-8 px-6 md:px-12 lg:px-32"
        style={{
          backgroundImage:
            window.innerWidth < 768
              ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`
              : `url(${bgImage})`,

          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          className="text-[32px] md:text-[50px] font-[700] font-[Satoshi] uppercase leading-[43px] md:leading-[74px] text-center 2xl:text-start"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Get a <span className="text-[#E8682B]">Free Trial</span>
        </h1>
        <p className=" text-sm md:text-[20px] leading-[30px] mb-0 lg:mb-8 mt-4 md:w-[90%] text-white font-inter text-center 2xl:text-start mx-auto 2xl:mx-0">
          Interested in our TV service but would like to try it out first? No
          worries, we offer a free 36 hour trial of our live cable premium TV
          service. No commitments, no strings attached! Gain access to 16,000
          channels, plus all your favorite networks & sports teams. Get on our
          list & sign up for your free 36 hour trial today!
        </p>
      </div>
      <div className="w-full px-6 md:px-12 lg:px-32 mb-4">
        <div className="flex 2xl:block flex-col items-center justify-center ">
          <a
            href="https://client.chipsettv.com/store/ip-tv-service/36-hours-trial"
            target="_blank"
          >
            <button className="flex items-center justify-center bg-[#E8682B] gap-4 text-[14px] md:text-[20px] h-[40px] md:h-[50px] rounded-full  md:w-[500px] mx-auto md:mx-0 px-6">
              Get Started
              <img src={arrowIcon} alt="" className="w-[20px] md:w-[45px]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialSection;
