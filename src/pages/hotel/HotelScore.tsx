import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group'

import { Label } from '@components/ui/label'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@i18n/i18n'

const scoreListEN = [
  {
    title: 'Wonderful : 9.5+',
    score: '9.5'
  },
  {
    title: 'Very Good : 9+',
    score: '9'
  },
  {
    title: 'Good : 8+',
    score: '8'
  },
  {
    title: 'Pleasant : 7+',
    score: '7'
  }
]

const scoreListVI = [
  {
    title: 'Tuyệt vời : 9.5+',
    score: '9.5'
  },
  {
    title: 'Rất tốt : 9+',
    score: '9'
  },
  {
    title: 'Tốt : 8+',
    score: '8'
  },
  {
    title: 'Hài lòng : 7+',
    score: '7'
  }
]

interface Props {
  score: string
  onValueChange: (_v: string) => void
}

const HotelScore = ({ score, onValueChange }: Props) => {
  const { t } = useTranslation('others')

  const currentLanguage = i18n.language

  const handleLanguage = () => {
    if (currentLanguage === 'en') {
      return scoreListEN
    } else {
      return scoreListVI
    }
  }

  return (
    <>
      <span className="text-secondary font-bold">{t('reviewScore')}</span>
      <div className="mt-4">
        <RadioGroup value={score} onValueChange={onValueChange}>
          {handleLanguage().map((v, index) => (
            <div className="mt-4 flex items-center gap-2" key={index}>
              <RadioGroupItem value={v.score} id={v.title} className="rounded-sm" />

              <Label
                htmlFor={v.title}
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {v.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  )
}

export default memo(HotelScore)
