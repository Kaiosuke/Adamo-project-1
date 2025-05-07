import { memo, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cropper from 'react-easy-crop'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import LoadedImage from '../LoadingList/LoadedImage'

const SwiperCom = ({ images }: { images?: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((v, index) => (
          <SwiperSlide key={index}>
            {/* <LoadedImage alt="image" thumbnail={v} /> */}
            <Cropper image={v} crop={crop} zoom={zoom} aspect={4 / 3} onCropChange={setCrop} onZoomChange={setZoom} />
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
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        className="mySwiper mt-3 cursor-pointer"
      >
        {images?.map((v, index) => (
          <SwiperSlide key={index}>
            <LoadedImage alt="image" thumbnail={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default memo(SwiperCom)
