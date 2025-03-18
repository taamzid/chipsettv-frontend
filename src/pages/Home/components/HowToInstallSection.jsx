import { Link } from "react-router-dom";
import arrowImg from "./../../../assets/icons/arrow.png";
import { useEffect } from "react";

const HowToInstallSection = () => {
  const videoTypeNormal = {
    url: "https://www.w3schools.com/html/movie.mp4",
  };

  const videoTypeYoutube = {
    url: "https://www.youtube.com/embed/NQwDGFjGU7s?si=riJFFELzgrZaeJAS",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-6 md:mx-24 mb-6 mt-16 lg:mt-28 overflow-hidden">
      {/* heading */}
      <h1 className="text-[32px] md:text-[52px] font-[700] uppercase leading-[43px] md:leading-[74px] text-center mb-4 md:mb-7">
        How To Install<br /> <span className="text-[#E8682B]">ChipSet TV</span>
      </h1>

      {/* description */}
      <p className="text-base leading-[28px] lg:text-xl text-center text-wrap font-inter text-gray-100 mb-2.5 px-0 md:px-5 lg:px-16">
        Here is a video explaining how to install ChipSet TV on our most
        recommended product for installation, which is a Fire Stick from Amazon.
        Below this video is a link, that will lead you to more videos,
        explaining how to install ChipSet TV on other devices, such as Smart
        Phones, Tablets, Laptops, and more. Please click the link below for more
        information.
      </p>

      {/* video */}
      <div className="h-[270px] md:h-[400px] lg:h-[600px] xl:h-[700px] mt-6 lg:mt-12 rounded-[50px] overflow-hidden">
        {/* if video url is a normal link */}
        {/* {videoTypeNormal && (
          <video controls className="rounded-lg w-full h-full object-cover">
            <source src={videoTypeNormal.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )} */}

        {/* if video url is from youtube */}
        {videoTypeYoutube && (
          <iframe
            className="w-full h-full"
            src={videoTypeYoutube.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* download button */}
      <div className="mt-6 lg:mt-12 xl:mt-14 flex justify-center items-center pb-3">
        <Link to="/installation">
          <button className="flex items-center justify-center h-[38px] lg:h-[45px] xl:h-[55px] rounded-full  bg-[#E8682B] hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)] transition-shadow duration-300 px-6">
            <span className="mr-2 text-sm lg:text-lg xl:text-xl">
              Know More
            </span>
            <img src={arrowImg} alt="arrow icon" className="w-6 lg:w-9" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowToInstallSection;
