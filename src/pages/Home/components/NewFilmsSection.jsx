import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { tvShowsData } from "../../../data/tvShowsData";

const NewFilmsSection = () => {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);

  // const API_KEY = "25ed9982ab81cb1036c2efd2648ab7c9";
  // const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data?.results || []);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);

  useEffect(() => {
    setData(tvShowsData);
  }, []);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Access the Swiper instance correctly
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Access the Swiper instance correctly
    }
  };

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pl-6 md:pl-12 lg:pl-32 relative">
      {/* Section Title */}
      {/* big screen */}
      <h1
        className="hidden lg:block text-[50px] xl:text-[55px] font-[700] font-[Satoshi] uppercase"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        New & Upcoming <span className="text-[#E8682B]">Films</span>
      </h1>
      {/* small screen */}
      <h1
        className="lg:hidden text-[32px] font-[700] font-[Satoshi] uppercase"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        New & Upcoming <br />
        <span className="text-[#E8682B]">Films</span>
      </h1>

      {/* Slider Section */}
      <div className="my-6 rounded-lg swiper-container w-full relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-[-70px] md:top-[-85px] xl:top-[-93px] right-6 md:right-24 flex gap-4 z-10">
          <button
            onClick={handlePrevClick}
            className="text-white border flex items-center justify-center p-2 rounded-full w-[50px] h-[50px]"
            aria-label="Previous"
          >
            <BsArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-[#E8682B] text-white p-2 rounded-full w-[50px] h-[50px]"
            aria-label="Next"
          >
            <BsArrowRight className="text-2xl" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5.5}
          ref={swiperRef} // Attach the Swiper instance to the ref
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4.1,
              spaceBetween: 15,
            },
            1440: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
          className="custom-swiper"
        >
          {/* Rendering Films */}
          {data.map((film, i) => (
            <SwiperSlide key={i}>
              <div>
                <img
                  src={film.image}
                  alt={film.name}
                  className="w-[148px] md:w-[290px] h-[219px] md:h-[430px] rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewFilmsSection;
