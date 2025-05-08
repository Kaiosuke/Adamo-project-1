import ButtonFeature from '@components/ButtonFeature'

import Tour from '@components/Tour'
import { ITour } from '@interfaces/tour'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { GrLinkNext } from 'react-icons/gr'
import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

const TraditionalSection = ({ data }: { data: ITour[] }) => {
  const { t } = useTranslation('others')

  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="main-container animate-fade-down">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          <Trans i18nKey={'traditional.title'} />
        </h3>
        <div className="ml-auto">
          <Link to="/tours">
            <ButtonFeature content={t('viewAll')} />
          </Link>
        </div>
      </div>
      <div className="relative">
        <Swiper
          spaceBetween={12}
          className="mySwiper2 opacity-none mt-4"
          breakpoints={{
            640: {
              slidesPerView: 2
            },

            1024: {
              slidesPerView: 3
            }
          }}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper
          }}
        >
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6 opacity-none">
            {data?.length &&
              data.map((v) => (
                <SwiperSlide key={v.id}>
                  <Tour tour={v} />
                </SwiperSlide>
              ))}
          </div>
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

export default TraditionalSection
