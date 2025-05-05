import { Checkbox } from '@components/ui/checkbox'
import { RadioGroup } from '@components/ui/radio-group'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { FaStar } from 'react-icons/fa6'

const starList = ['5', '4', '3', '2', '1']

interface Props {
  stars: string[]
  // eslint-disable-next-line no-unused-vars
  onCheckChange: ({ checked, v }: { checked: boolean; v: string }) => void
}

const HotelStar = ({ onCheckChange, stars }: Props) => {
  const { t } = useTranslation('others')

  return (
    <>
      <span className="text-secondary font-bold">{t('stars')}</span>
      <div className="mt-4">
        <RadioGroup defaultValue="option-one">
          {starList.map((v, index) => (
            <div className="mt-4 flex items-center gap-2" key={index}>
              <Checkbox
                id={v}
                checked={stars.includes(v)}
                onCheckedChange={(checked) => {
                  onCheckChange({ checked: Boolean(checked), v: v })
                }}
              />
              <label
                htmlFor={v}
                className="flex gap-2 text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {Array.from({ length: Number(v) }).map((_, index) => (
                  <FaStar className="text-nine" key={index} />
                ))}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  )
}

export default memo(HotelStar)
