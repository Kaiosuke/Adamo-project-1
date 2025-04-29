import { getHotels } from '@api/hotelRequest'
import Hotel from '@components/Hotel'
import SkeletonData from '@components/LoadingList/SkeletonData'
import { IHotel } from '@interfaces/hotel'
import { useQuery } from '@tanstack/react-query'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Fragment } from 'react/jsx-runtime'

const RelatedHotels = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['hotels'],
    queryFn: () => getHotels({ _page: 1, _limit: 3 })
  })

  const { t } = useTranslation('detail')

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">{t('hotel.recommender')}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        {isLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonData key={index} />
            ))}
          </>
        ) : (
          <>
            {data?.data?.map((hotel: IHotel) => (
              <Fragment key={hotel.id}>
                <Hotel hotel={hotel} />
              </Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default memo(RelatedHotels)
