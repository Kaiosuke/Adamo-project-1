import { handleFormatMoney } from '@/helper/index'
import { IHotel } from '@/interfaces/hotel'
import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'

import Code from '@/components/Code'
import { IBookingHotel } from '@/interfaces/booking'
import { Fragment, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { authSelector } from '@/redux-toolkit/selectors/authSelector'
import LoadingPage from '@/components/LoadingList/LoadingPage'
import { useNavigate } from 'react-router'

interface Props {
  data: IHotel
  bookingHotel: IBookingHotel
  setDiscount: (_v: number) => void
  discount?: number
}

const BillHotelCheckOut = ({ data, bookingHotel, discount, setDiscount }: Props) => {
  const handleGetDay = (v: string) => {
    const time = new Date(v)
    return time.toLocaleDateString('vi-VN')
  }

  const handleDisCount = useMemo(() => {
    return discount ? bookingHotel.totalPrice - bookingHotel.totalPrice * discount : bookingHotel.totalPrice
  }, [discount, bookingHotel])

  const { t } = useTranslation('bill')

  const { currentUser } = useSelector(authSelector)

  const navigate = useNavigate()

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
      {
        <div className="bg-seven w-[380px]">
          <div className="lg:p-8 p-4 flex flex-col gap-6">
            <p className="text-secondary font-semibold">{data.title}</p>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-primary text-xl" />
              <span className="text-four text-sm">{data.location}</span>
            </div>

            <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
              <FaCalendarAlt className="text-primary text-xl" />
              <div className="text-secondary flex items-center gap-1">
                <span>{handleGetDay(bookingHotel.duration.from)}</span>
                <span>-</span>
                <span>{handleGetDay(bookingHotel.duration.to)}</span>
              </div>
            </div>
            <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
              <GoPeople className="text-primary text-xl" />
              <div className="text-secondary">{bookingHotel.guests}</div>
            </div>
            <div>
              {bookingHotel.rooms.map((room, index) => (
                <Fragment key={index}>
                  {room.quantity > 0 && (
                    <div key={room.data.id} className="flex items-center justify-between font-bold">
                      <div className="flex items-center gap-0.5">
                        <div className="text-primary">{room.quantity}</div>
                        <div className="text-primary">x</div>
                        <div className="text-secondary">{room.data.type}</div>
                      </div>
                      <div>{handleFormatMoney(room.data.price * room.quantity)}</div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <div>
              <div className="text-four">{t('billCheckOutHotel.addOn')}:</div>
              <div>
                {bookingHotel.breakFast && (
                  <div className="flex items-center justify-between text-secondary font-bold">
                    <div className="flex items-center gap-0.5">
                      <div className="text-primary">{bookingHotel.breakFast.quantity}</div>
                      <div className="text-primary">x</div>
                      <div className="text-secondary">{t('billCheckOutHotel.breakfast')}</div>
                    </div>
                    <div>{handleFormatMoney(bookingHotel.breakFast.price)}</div>
                  </div>
                )}
              </div>
              <div>
                {bookingHotel.extraBed && (
                  <div className="flex items-center justify-between text-secondary font-bold">
                    <div className="flex items-center gap-0.5">
                      <div className="text-primary">{bookingHotel.extraBed.quantity}</div>
                      <div className="text-primary">x</div>
                      <div className="text-secondary">{t('billCheckOutHotel.extraBed')}</div>
                    </div>
                    <div>{handleFormatMoney(bookingHotel.extraBed.price)}</div>
                  </div>
                )}
              </div>
            </div>
            <Code setDiscount={setDiscount} />
          </div>
          <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
            <span>{t('billCheckOutHotel.total')}</span>
            <span>{handleFormatMoney(handleDisCount)}</span>
          </div>
        </div>
      }
    </>
  )
}

export default BillHotelCheckOut
