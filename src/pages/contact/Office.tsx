import OurOffice from '@assets/images/our office.png'
import { useTranslation } from 'react-i18next'
import { IoHomeOutline } from 'react-icons/io5'

const Office = () => {
  const { t } = useTranslation('contact')

  return (
    <div className="flex-[0_0_60%] max-w-[543px] relative">
      <img src={OurOffice} alt="our office" className="w-full h-full object-cover" />
      <div className="md:absolute md:mt-0 mt-6 bottom-0 md:max-w-[422px] max-w-full md:max-h-[324px] max-h-full w-full h-full bg-secondary">
        <div className="lg:p-10 md:p-8 p-6 h-full flex flex-col justify-between">
          <h3 className="text-size-4xl text-third">{t('contact.ourOffice')}</h3>
          <div className="flex flex-col h-full justify-between text-primary mt-6 md:gap-0 gap-8">
            <div className="flex gap-2 items-center">
              <div>
                <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                  <IoHomeOutline />
                </div>
              </div>
              <div>
                <span className="text-size-lg">Address</span>
                <div className="text-third text-sm">27 Old Gloucester Street, London, WC1N 3AX</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                  <IoHomeOutline />
                </div>
              </div>
              <div>
                <span className="text-size-lg">Address</span>
                <div className="text-third text-sm">27 Old Gloucester Street, London, WC1N 3AX</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                  <IoHomeOutline />
                </div>
              </div>
              <div>
                <span className="text-size-lg">Address</span>
                <div className="text-third text-sm">27 Old Gloucester Street, London, WC1N 3AX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Office
