import React from "react";

import Image from "@/assets/images/Bun bo hue.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TourDetailMain = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TourDetailMain;
