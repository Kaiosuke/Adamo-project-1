import { Checkbox } from '@/components/ui/checkbox'
import { tourSelector } from '@/redux/selectors/tourSelector'
import { ITourState } from '@/redux/slices/toursSlice'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

interface Props {
  onCheckChangeType: (_checked: boolean, _v: string) => void
  typeTour: string[]
}

const TourType = ({ typeTour, onCheckChangeType }: Props) => {
  const { types }: ITourState = useSelector(tourSelector)

  const { t } = useTranslation('others')

  return (
    <div>
      <span className="text-secondary font-bold">{t('type')}</span>
      <div className="flex flex-col">
        {types.map((v, index) => (
          <div className="mt-4 flex items-center gap-2" key={index}>
            <Checkbox
              id={v}
              checked={typeTour.includes(v)}
              onCheckedChange={(checked) => onCheckChangeType(Boolean(checked), v)}
            />
            <label
              htmlFor={v}
              className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {v}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(TourType)
