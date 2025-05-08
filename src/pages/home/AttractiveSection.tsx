import ButtonFeature from '@components/ButtonFeature'

import Tour from '@components/Tour'
import { ITour } from '@interfaces/tour'
import { useRef } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GrLinkNext } from 'react-icons/gr'

const AttractiveSection = ({ data }: { data: ITour[] }) => {
  const { t } = useTranslation('others')

  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="main-container animate-fade-down">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          <Trans i18nKey={'attractive.title'} ns="home" />
        </h3>
        <div className="ml-auto">
          <Link to="/tours">
            <ButtonFeature content={t('viewAll')} />
          </Link>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={12}
          className="mySwiper2 mt-4"
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {data?.map((v: ITour) => (
            <SwiperSlide key={v.id}>
              <Tour tour={v} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/3 -right-10 z-50 md:block hidden cursor-pointer"
        >
          <GrLinkNext className="text-secondary" />
        </button>
      </div>
    </section>
  )
}

export default AttractiveSection
