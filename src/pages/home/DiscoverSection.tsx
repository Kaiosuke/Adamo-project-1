import ButtonFeature from '@components/ButtonFeature'
import LoadedImage from '@components/LoadingList/LoadedImage'
import { ITour } from '@interfaces/tour'

import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'

const DiscoverSection = ({ data }: { data: ITour[] }) => {
  const { t } = useTranslation('others')

  return (
    <section className="main-container animate-fade-down">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          <Trans i18nKey={'discover.title'} />
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
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
          {data?.length &&
            data.map((v) => (
              <SwiperSlide key={v.id}>
                <div className="w-full">
                  <Link to={`/tour-detail/${v.id}`} className="w-full">
                    <div className="relative h-[291px]">
                      <LoadedImage thumbnail={v.thumbnail} alt={v.title} />
                    </div>
                  </Link>

                  <div className="pt-4 text-left">
                    <h4 className="text-size-xl text-secondary">
                      <Link to={`/tour-detail/${v.id}`}>{v.location}</Link>
                    </h4>
                    <span className="text-four text-base">24 experiences</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </section>
  )
}

export default DiscoverSection
