import React, { useState, useEffect, useRef } from "react";
import desktopBg from "../../../assets/images/image.png";
import streamImg from "../../../assets/images/stream.png";
import video from "../../../assets/video/video.mp4";

const OurPartnerSection = () => {
  const [bgImage, setBgImage] = useState(
    window.innerWidth >= 768 ? desktopBg : streamImg
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 768 ? desktopBg : streamImg);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoRef = useRef(null);

  const handlePlayTrailer = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      // Check if fullscreen is active
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      if (!isFullscreen) {
        // Enter fullscreen mode
        const requestFullscreen =
          videoElement.requestFullscreen ||
          videoElement.mozRequestFullScreen ||
          videoElement.webkitRequestFullscreen ||
          videoElement.msRequestFullscreen;

        if (requestFullscreen) {
          requestFullscreen.call(videoElement);
        }
      } else {
        // Exit fullscreen mode
        const exitFullscreen =
          document.exitFullscreen ||
          document.mozCancelFullScreen ||
          document.webkitExitFullscreen ||
          document.msExitFullscreen;

        if (exitFullscreen) {
          exitFullscreen.call(document);
        }
      }

      // Play the video
      videoElement.play();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        console.log("Exited fullscreen");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-full overflow-hidden">
      {/* Partner Section */}
      <div className="mx-6 md:mx-12 lg:mx-32 flex flex-col xl:flex-row-reverse md:gap-8 lg:gap-10 xl:gap-[80px] 2xl:gap-[120px] items-center mb-6 xl:mt-8">
        <div className="text-center xl:text-left ">
          <h1 className="text-[32px] md:text-[40px] lg:text-[55px] font-[700] font-Satoshi">
            NEVER MISS <span className="text-[#E8682B]">A GAME!!</span>
          </h1>
          <p className="text-sm md:text-base lg:text-[20px] mt-3 !leading-8 mb-3.5 lg:mb-0 font-inter">
            The NFL ticket, NBA league pass, Premier Soccer Leagues, MLB pass
            and more is included in your subscription for free. Never miss your
            favorite NCAA college team, WNBA team, NHL team, PPV Boxing match,
            UFC fight, Golf tournament or NASCAR race again.
          </p>
        </div>

        <div className="w-[95%] mx-auto lg:min-w-[700px] 2xl:w-[1100px] h-[230px] md:h-[450px] lg:h-[476px]">
          <video
            ref={videoRef}
            className="w-full h-full rounded-lg"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default OurPartnerSection;
