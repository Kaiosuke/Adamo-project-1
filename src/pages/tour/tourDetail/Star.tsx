import { IReviewTour } from '@/interfaces/review'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { FaStar } from 'react-icons/fa6'

const Star = ({ data, v }: { data: IReviewTour[]; v: number }) => {
  const handleFilterRate = (rate: number) => {
    if (data?.length) {
      return data.filter((v) => v.rate === rate).length
    }
    return 0
  }

  const handleCalculatePercent = (v: number): number => {
    if (data?.length) {
      return Math.floor((v / data.length) * 100)
    }
    return 0
  }

  const { t } = useTranslation('detail')

  return (
    <div className="flex items-center gap-2">
      <span className="w-[12px]">{v}</span>
      <FaStar className="text-four" />
      <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
        <div
          className="bg-nine rounded-l-l"
          style={{
            flex: `0 0 ${handleCalculatePercent(handleFilterRate(v))}%`
          }}
        />

        <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
      </div>
      <span>{`${handleFilterRate(v)} ${t('tour.review.review')} `}</span>
    </div>
  )
}

export default memo(Star)
