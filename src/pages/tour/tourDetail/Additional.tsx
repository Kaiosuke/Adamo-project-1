import AccordionCom from '@components/AccordionCom'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { memo } from 'react'
import { useSelector } from 'react-redux'

const Additional = () => {
  const { tour } = useSelector(tourSelector)

  return (
    <>
      <div>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-secondary">
          {tour?.additionalInfo.list.map((v, index) => <li key={index}> {v}</li>)}
        </ul>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">FAQs</h4>
          <div className="flex flex-col gap-4 mt-4">
            {tour?.additionalInfo.faqs.map((v, index) => <AccordionCom content={v} key={index} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Additional)
