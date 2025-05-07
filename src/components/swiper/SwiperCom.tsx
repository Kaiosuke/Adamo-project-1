import { memo, useState } from 'react'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import LoadedImage from '@components/LoadingList/LoadedImage'
import Magnifier from '@components/Magnifier'
import { CiCamera } from 'react-icons/ci'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const SwiperCom = ({ images }: { images?: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const [index, setIndex] = useState(-1)

  const photos = images?.map((image) => ({
    src: image,
    width: 800,
    height: 600
  }))

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
        {photos?.map((photo, index) => (
          <SwiperSlide key={index}>
            <Magnifier image={photo.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={4}
          className="mySwiper mt-3 cursor-pointer"
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {photos?.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full" onClick={() => setIndex(index)}>
                <LoadedImage alt="image" thumbnail={photo.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xl z-[50] font-bold select-none">
          <CiCamera className="text-2xl font-bold" /> {Number(photos?.length) - 4} +
        </div>
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

export default memo(SwiperCom)
