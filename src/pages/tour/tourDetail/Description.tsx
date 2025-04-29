import Video from '@assets/videos/dog.mp4'
import AccordionCom from '@components/AccordionCom'
import Map from '@components/MapCom'
import Viewer360 from '@components/Viewer360'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Description = () => {
  const { tour } = useSelector(tourSelector)
  const { t } = useTranslation('detail')
  return (
    <>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.overview')}</h4>
        <p className="mt-4 text-secondary">{tour?.description.overview.title}</p>
        <ul className="list-disc list-inside mt-6 flex flex-col gap-2 text-secondary">
          {tour?.description.overview.list.map((v: string, index: number) => (
            <li className="" key={index}>
              {v}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.include')}</h4>
        <ul className="flex  flex-col gap-2 mt-6 text-secondary">
          {tour?.description.included.map((v: string, index: number) => (
            <li className="flex items-center gap-2" key={index}>
              <IoCheckmarkSharp className="text-[#28B554]" />
              {v}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.include')}</h4>
        <div className="text-four mt-3">
          <span className="font-semibold">Departure Point</span>
          <ul className="mt-2 flex flex-col gap-2 list-decimal ml-2.5">
            {tour?.description.departureReturn.point.map((v: string, index: number) => <li key={index}>{v}</li>)}
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-four mt-3">
          <span className="font-semibold">Departure Time</span>
          <span>{tour?.description.departureReturn.time}</span>
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.departure')}</h4>
        <div className="flex flex-col gap-4 mt-4">
          {tour?.description.itineraries.map((itinerary, index) => <AccordionCom content={itinerary} key={index} />)}
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.map')}</h4>
        <div className="mt-4">
          <Map coordinates={tour?.description.maps} />
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div className="h-full">
        <h4 className="text-size-xl font-semibold text-secondary">{t('tour.description.media')}</h4>
        <div className="mt-4 h-[400px]">
          <Viewer360 url={tour?.description.image360} />
        </div>
        <div className="mt-8 h-[400px] w-full">
          <iframe className="aspect-video md:aspect-square w-full h-full" src={Video} />
        </div>
      </div>
    </>
  )
}

export default memo(Description)
