import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useSelector } from "react-redux";
import { hotelSelector } from "@/redux/selectors/hotelSelector";

const SwiperCom = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { hotel } = useSelector(hotelSelector);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {hotel?.images.map((v, index) => (
          <SwiperSlide key={index}>
            <img src={v} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper mt-3"
      >
        {hotel?.images.map((v, index) => (
          <SwiperSlide key={index}>
            <img src={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCom;
