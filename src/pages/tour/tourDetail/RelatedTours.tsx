import Tour from '@components/Tour'
import { ITour } from '@interfaces/tour'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const RelatedTours = () => {
  const { tours } = useSelector(tourSelector)

  const { t } = useTranslation('detail')

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">{t('tour.relatedTours')}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-10 lg:mt-10 mt-8">
        {tours.map((tour: ITour) => (
          <Tour tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  )
}

export default memo(RelatedTours)
