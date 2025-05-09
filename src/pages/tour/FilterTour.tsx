import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@components/ui/dropdown-menu'

import SliderCom from '@components/sliders/SliderCom'
import { StyledLikeButton } from '@components/styled/likeButton/LikeButton'
import { toastSuccess } from '@lib/toasts'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { filterByDuration, filterByPrice, filterByType } from '@redux-toolkit/slices/toursSlice'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'
import TourBtn from './TourBtn'
import TourDuration from './TourDuration'
import TourType from './TourType'

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
    toastSuccess({ content: 'Filter' })
    localStorage.setItem('currentPageTour', '0')
  }, 1000)

  const handleResetFilter = () => {
    toastSuccess({ content: 'Reset' })
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
        <StyledLikeButton>{t('filter')}</StyledLikeButton>
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
          <div className="mt-10">
            <SliderCom prices={prices} max={300} onValueChange={handleOnValueChange} />
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
