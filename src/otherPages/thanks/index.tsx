import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/redux-toolkit/index'
import { deleteBooking, deleteBookingHotel } from '@/redux-toolkit/slices/bookingSlice'
import { useEffect } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'

const ThankYou = () => {
  const { t } = useTranslation('thanks')

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(deleteBooking())
    dispatch(deleteBookingHotel())
  }, [dispatch])

  return (
    <div
      className={
        'w-[100%] h-screen bg-[url("@/assets/images/hero.png")] flex justify-center items-center bg-center bg-cover'
      }
    >
      <div className="max-w-[854px] lg:w-full md:w-[80%] w-[90%] h-[529px] bg-third/90 flex items-center justify-center sm:px-0 px-4">
        <div className="max-w-[584px] w-full flex flex-col gap-10 justify-center text-center">
          <h1 className="text-primary text-size-6xl">{t('title')}</h1>
          <p>
            <Trans ns="thanks" i18nKey={'description'} />
          </p>
          <Link to={'/'}>
            <Button className="max-w-[293px] w-full">{t('button')}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
