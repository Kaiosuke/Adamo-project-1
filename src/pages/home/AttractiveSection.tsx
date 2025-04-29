import ButtonFeature from '@components/ButtonFeature'
import Tour from '@components/Tour'
import { ITour } from '@interfaces/tour'

import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const AttractiveSection = ({ data }: { data: ITour[] }) => {
  const { t } = useTranslation('others')

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
    </section>
  )
}

export default AttractiveSection
