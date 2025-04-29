import { getTourById } from '@api/tourRequest'

import BillTourCheckout from '@components/bills/tour/BillTourCheckout'
import LoadingPage from '@components/LoadingList/LoadingPage'
import PdMain from '@components/paddingList/PbMain'
import PdSub from '@components/paddingList/PbSub'
import { useAppDispatch } from '@redux-toolkit/index'
import { bookingSelector } from '@redux-toolkit/selectors/bookingSelector'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import FormInfoUser from './FormInfoUser'

const TourCheckOut = () => {
  const { booking } = useSelector(bookingSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (booking?.tourId) {
      ;(async () => {
        try {
          await dispatch(getTourById(booking?.tourId)).unwrap()
        } catch (error) {
          return error
        }
      })()
    }
  }, [dispatch, booking])

  const { t } = useTranslation('checkout')

  const { tour } = useSelector(tourSelector)

  const [discount, setDiscount] = useState<number>()

  const navigate = useNavigate()

  useEffect(() => {
    if (!booking) {
      navigate('/')
    }
  }, [booking, navigate])

  if (!booking) {
    return <LoadingPage />
  }

  return (
    <>
      <PdSub />
      <section className="main-container">
        <Link to="/" className="text-size-2xl text-primary flex items-center gap-2">
          <FaArrowLeftLong />
          {t('tour.home')}
        </Link>
        <h1 className="text-size-4xl text-secondary mt-4">{t('tour.title')}</h1>
        <div className="w-[70%]">
          <div className="str-line " />
        </div>
        <div className="flex 2xl:gap-20 gap-10 flex-wrap lg:flex-row md:flex-col-reverse">
          <div className="lg:flex-[1_1_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
            <>
              <h2 className="text-size-2xl">{t('tour.travel')}</h2>
              <p className="text-four">{t('tour.description')}</p>
            </>
            {booking ? (
              <FormInfoUser booking={booking} />
            ) : (
              <div className="text-size-4xl mt-4">Please Booking First</div>
            )}
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
            {tour && booking && (
              <BillTourCheckout booking={booking} tour={tour} setDiscount={setDiscount} discount={discount} />
            )}
          </div>
        </div>
      </section>
      <PdMain />
    </>
  )
}

export default TourCheckOut
