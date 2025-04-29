import { Checkbox } from '@/components/ui/checkbox'
import { handleFormatMoney } from '@/helper/index'
import {
  changeBreakfast,
  changeExtraBed,
  deCreaseBreakfast,
  deCreaseExtraBed,
  IBreakfast,
  IExtraBed,
  inCreaseBreakfast,
  inCreaseExtraBed
} from '@/redux-toolkit/slices/roomsSlice'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

interface Props {
  breakfast: IBreakfast
  extraBed: IExtraBed
}

const AddOne = ({ breakfast, extraBed }: Props) => {
  const dispatch = useDispatch()

  const handleChangeBreakfast = () => {
    dispatch(changeBreakfast())
  }

  const handleDecreaseBreakfast = (breakfast: IBreakfast) => {
    if (breakfast.quantity < 1) {
      return toast.warning('Cannot decrease further', {
        style: {
          backgroundColor: '#FF0B55',
          color: '#ffffff'
        }
      })
    }
    dispatch(deCreaseBreakfast())
  }

  const handleIncreaseBreakfast = (breakfast: IBreakfast) => {
    if (breakfast.quantity > 6) {
      return toast.warning('Cannot increase further', {
        style: {
          backgroundColor: '#FF0B55',
          color: '#ffffff'
        }
      })
    }

    dispatch(inCreaseBreakfast())
  }

  const handleChangeExtraBed = () => {
    dispatch(changeExtraBed())
  }

  const handleDecreaseExtraBed = (extraBed: IExtraBed) => {
    if (extraBed.quantity < 1) {
      return toast.warning('Cannot decrease further', {
        style: {
          backgroundColor: '#FF0B55',
          color: '#ffffff'
        }
      })
    }

    dispatch(deCreaseExtraBed())
  }

  const handleIncreaseExtraBed = (extraBed: IExtraBed) => {
    if (extraBed.quantity > 6) {
      return toast.warning('Cannot increase further', {
        style: {
          backgroundColor: '#FF0B55',
          color: '#ffffff'
        }
      })
    }
    dispatch(inCreaseExtraBed())
  }

  const { t } = useTranslation('bill')

  return (
    <>
      <div className="font-bold text-secondary">{t('billDetailHotel.addOn')}:</div>
      <div className={'grid grid-cols-3 items-center mt-2'}>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="bg-third" checked={breakfast.status} />
          <label
            htmlFor="terms"
            onClick={handleChangeBreakfast}
            className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t('billDetailHotel.breakfast')}
          </label>
        </div>
        <div
          className={`flex w-full justify-between ml-auto col-span-2 ${
            breakfast.status ? '' : 'pointer-events-none opacity-35'
          }`}
        >
          <div className={'flex items-center justify-between gap-2 ml-[40px]'}>
            <FaCircleMinus
              className="text-four text-xl cursor-pointer hover:text-four/80"
              onClick={() => {
                if (breakfast.status) handleDecreaseBreakfast(breakfast)
              }}
            />
            <span className="w-[10px] text-center">{breakfast.quantity}</span>
            <FaCirclePlus
              className="text-four text-xl cursor-pointer hover:text-four/80"
              onClick={() => {
                if (breakfast.status) handleIncreaseBreakfast(breakfast)
              }}
            />
          </div>
          <div className="font-bold text-six ml-auto">{handleFormatMoney(breakfast.price * breakfast.quantity)}</div>
        </div>
      </div>
      <div className={'grid grid-cols-3 items-center mt-2'}>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="bg-third" checked={extraBed.status} />
          <label
            htmlFor="terms"
            onClick={handleChangeExtraBed}
            className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t('billDetailHotel.extraBed')}
          </label>
        </div>
        <div
          className={`flex w-full justify-between col-span-2 ${
            extraBed.status ? '' : 'pointer-events-none opacity-35'
          }`}
        >
          <div className={'flex items-center justify-between gap-2 ml-[40px]'}>
            <FaCircleMinus
              className="text-four text-xl cursor-pointer hover:text-four/80"
              onClick={() => {
                if (extraBed.status) handleDecreaseExtraBed(extraBed)
              }}
            />
            <span className="w-[10px] text-center">{extraBed.quantity}</span>
            <FaCirclePlus
              className="text-four text-xl cursor-pointer hover:text-four/80"
              onClick={() => {
                if (extraBed.status) handleIncreaseExtraBed(extraBed)
              }}
            />
          </div>
          <div className="font-bold text-six ml-auto">{handleFormatMoney(extraBed.price * extraBed.quantity)}</div>
        </div>
      </div>
    </>
  )
}

export default memo(AddOne)
