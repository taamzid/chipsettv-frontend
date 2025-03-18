import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const MovieTrailers = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/5lzoxHSn0C0?si=fEhKHjD_yL1fblZs",
      type: "youtube",
    },
    {
      url: "https://www.youtube.com/embed/NQwDGFjGU7s?si=riJFFELzgrZaeJAS",
      type: "youtube",
    },
    // {
    //   url: "https://www.w3schools.com/html/movie.mp4",
    //   type: "video",
    // },
    {
      url: "https://www.youtube.com/embed/NOhDyUmT9z0?si=FMaOr018NwtcrbiY",
      type: "youtube",
    },
  ];

  // Ensure Swiper recognizes the custom navigation elements
  useEffect(() => {
    const swiperEl = document.querySelector(".mySwiper");
    if (swiperEl?.swiper) {
      swiperEl.swiper.params.navigation.prevEl = ".custom-prev";
      swiperEl.swiper.params.navigation.nextEl = ".custom-next";
      swiperEl.swiper.navigation.init();
      swiperEl.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="mx-6 md:mx-24 mb-6 mt-10 md:mt-14">
      {/* heading */}
      <h1 className="text-[32px] md:text-[55px] font-[700] uppercase leading-[43px] md:leading-[74px] text-center mb-5 md:mb-9 lg:mb-16">
        Movie <span className="text-[#E8682B]">Trailers</span>
      </h1>

      {/* main */}
      <section className="max-w-[100%] h-[200px] md:h-[400px] lg:h-[600px] xl:h-[800px] overflow-hidden relative ">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper h-full px-20"
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center h-full relative "
            >
              {/* Video container*/}
              <div className="relative w-[90%] md:w-[95%] xl:w-[90%] mx-auto h-full">
                {video.type === "video" ? (
                  <video
                    controls
                    className="rounded-lg lg:rounded-3xl xl:rounded-[50px] w-full h-full object-cover"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="rounded-lg lg:rounded-3xl xl:rounded-[50px] w-full h-full"
                    src={video.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*button for large devices */}

        {/* right button */}
        <div className="hidden custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-[2] bg-[#E8682B] w-[56px] h-[56px] rounded-full lg:flex items-center justify-center">
          <HiArrowLongRight className="text-2xl cursor-pointer" />
        </div>

        {/* left button */}
        <div className="hidden custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-[2] bg-[#D9D9D9] w-[56px] h-[56px] rounded-full lg:flex items-center justify-center">
          <HiArrowLongLeft className="text-2xl text-[#000000] cursor-pointer" />
        </div>

        {/* button for small devices */}
        {/* right button */}
        <div className="lg:hidden custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-[2] bg-[#E8682B] w-[37px] h-[37px] rounded-full flex items-center justify-center cursor-pointer">
          <HiArrowLongRight className="" />
        </div>

        {/* left button */}
        <div className="lg:hidden custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-[2] bg-[#D9D9D9] w-[37px] h-[37px] rounded-full flex items-center justify-center cursor-pointer">
          <HiArrowLongLeft className=" text-[#000000]" />
        </div>
      </section>
    </div>
  );
};

export default MovieTrailers;
