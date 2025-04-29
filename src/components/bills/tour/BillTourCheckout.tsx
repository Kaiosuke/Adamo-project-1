import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'

import LoadingPage from '@/components/LoadingList/LoadingPage'
import { handleFormatMoney } from '@/helper/index'
import { IBooking } from '@/interfaces/booking'
import { ITour } from '@/interfaces/tour'

import { memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Code from '../../Code'
import { authSelector } from '@/redux-toolkit/selectors/authSelector'

interface Props {
  tour: ITour
  booking: IBooking
  discount?: number
  setDiscount: (_v: number) => void
}

const BillTourCheckout = ({ booking, tour, setDiscount, discount }: Props) => {
  const { currentUser } = useSelector(authSelector)
  const handleGetDay = (v: string) => {
    const time = new Date(v)
    return time.toLocaleDateString('vi-VN')
  }

  const handleDisCount = useMemo(() => {
    return discount ? booking.totalPrice - booking.totalPrice * discount : booking.totalPrice
  }, [discount, booking])
  const navigate = useNavigate()

  const { t } = useTranslation('bill')

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  if (!currentUser) {
    return <LoadingPage />
  }

  return (
    <>
      <div className="bg-seven w-[380px]">
        <div className="lg:p-8 p-4 flex flex-col gap-6">
          <p className="text-secondary font-semibold">{tour.title}</p>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-primary text-xl" />
            <span className="text-four text-sm">{tour.location}</span>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-four">{t('billCheckOutTour.duration')}:</div>
              <div className="font-semibold text-secondary">{tour.time}</div>
            </div>
            <div>
              <div className="text-four">{t('billCheckOutTour.tourType')}:</div>
              <div className="font-semibold text-secondary">{tour.type}</div>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <FaCalendarAlt className="text-primary text-xl" />
            <div className="text-secondary flex items-center gap-1">
              <span>{handleGetDay(booking.duration.from)}</span>
              <span>-</span>
              <span>{handleGetDay(booking.duration.to)}</span>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <GoPeople className="text-primary text-xl" />
            <div className="text-secondary">{booking.guests}</div>
          </div>
          <Code setDiscount={setDiscount} />
        </div>
        <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
          <span>{t('billCheckOutTour.total')}</span>
          <span>{handleFormatMoney(handleDisCount)}</span>
        </div>
      </div>
    </>
  )
}

export default memo(BillTourCheckout)
