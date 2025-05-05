import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  image: string
  title?: string
  des: string
  Tour?: React.ReactNode
}

const HeroSectionCom = ({ image, title, des, Tour }: Props) => {
  const { t } = useTranslation('others')

  return (
    <section className="w-full max-w-[1600px] m-auto">
      <div className="relative flex">
        <img src={image} fetchPriority="high" alt="hero-image" className="w-full h-[730px] object-cover" />
        <div className="flex gap-2 absolute lg:top-[20%] top-[50%] lg:-translate-y-[0] -translate-y-[50%] w-full">
          <div className="lg:pt-20 md:pt-12 pt-6 sub-container">
            <p className="text-size-xl text-banner">{title}</p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[45%] md:w-[90%] w-[80%] bg-animate">{des}</h1>
          </div>
        </div>
        <div className="absolute -bottom-1 w-full items-end lg:flex hidden">
          <div className="bg-third w-full lg:h-[98px] h-0" />
          {Tour}
        </div>
      </div>

      <div className="lg:hidden block main-container">
        <Dialog>
          <DialogTrigger className="px-6 py-3 text-third bg-primary mt-8">{t('openSearch')}</DialogTrigger>
          <DialogContent className="bg-third/60">
            <DialogHeader>
              <DialogTitle>{Tour}</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default HeroSectionCom
