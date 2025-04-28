import ButtonFeature from '@/components/ButtonFeature'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { tourSelector } from '@/redux/selectors/tourSelector'
import { filterByDuration, filterByPrice, filterByType } from '@/redux/slices/toursSlice'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'
import TourBtn from './TourBtn'
import TourDuration from './TourDuration'
import TourType from './TourType'
import SliderCom from '@/components/sliders/SliderCom'
import { useTranslation } from 'react-i18next'

const FilterTour = () => {
  const { filter } = useSelector(tourSelector)

  const { duration, type, price } = filter

  const [durationTour, setDurationTour] = useState(duration)
  const [prices, setPrices] = useState(price)
  const [typeTour, setTypeTour] = useState<string[]>(type)

  const dispatch = useDispatch()

  const handleFilter = useDebouncedCallback(() => {
    dispatch(filterByType(typeTour))
    dispatch(filterByDuration(durationTour))
    dispatch(filterByPrice(prices))
    toast.success('Filter successfully', {
      style: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      }
    })
    localStorage.setItem('currentPageTour', '0')
  }, 1000)

  const handleResetFilter = () => {
    toast.success('Reset successfully', {
      style: {
        backgroundColor: '#4caf50',
        color: '#ffffff'
      }
    })
    setDurationTour('')
    setPrices([0, 300])
    setTypeTour([])
  }

  useEffect(() => {
    setTypeTour(type)
  }, [type])

  const handleOnValueChange = useCallback((v: number[]) => {
    setPrices(v)
  }, [])

  const handleOnValueChangeDuration = useCallback((v: string) => {
    setDurationTour(v)
  }, [])

  const handleOnCheckChangeType = useCallback((checked: boolean, v: string) => {
    if (checked) {
      setTypeTour((prev) => [...prev, v])
    } else {
      setTypeTour((prev) => prev.filter((value) => value !== v))
    }
  }, [])

  const { t } = useTranslation('others')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ButtonFeature content={t('filter')} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 rounded-none w-[351px] py-4 px-4">
        <DropdownMenuLabel className="flex justify-between items-center px-0">
          <span className="text-[#03387D] text-size-lg font-semibold">{t('filter')}:</span>
          <span className="text-five cursor-pointer hover:underline" onClick={handleResetFilter}>
            {t('clear')}
          </span>
        </DropdownMenuLabel>
        <div>
          <span className="text-secondary font-bold"> {t('budget')}:</span>
          <div className="lg:mt-10 mt-6">
            <SliderCom prices={prices} max={600} onValueChange={handleOnValueChange} />
          </div>
        </div>
        <div className="str-line" />
        <TourDuration durationTour={durationTour} onValueChange={handleOnValueChangeDuration} />
        <div className="str-line" />
        <TourType onCheckChangeType={handleOnCheckChangeType} typeTour={typeTour} />
        <TourBtn onFilter={handleFilter} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(FilterTour)
