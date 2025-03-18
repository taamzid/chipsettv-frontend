import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import img1 from "../../assets/images/detailsImg1.png";
import img2 from "../../assets/images/detailsImg2.png";
import img3 from "../../assets/images/detailsImg3.png";

const DetailsSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [img1, img2, img3];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Main Swiper */}
      <div className="flex justify-center items-center w-full max-w-[725px] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[725px] overflow-hidden bg-[#181818] rounded-xl">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-xl w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={img}
                  className="object-contain w-auto h-full max-w-full max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="w-full max-w-[725px] mt-4 flex items-center justify-center">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#181818] p-2 rounded-xl cursor-pointer w-[100px] h-[100px] md:w-[125px] md:h-[125px] flex items-center justify-center">
                <img
                  src={img}
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailsSwiper;
