import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@components/ui/accordion'
import { useState } from 'react'
import { FaMapMarkerAlt, FaRegQuestionCircle } from 'react-icons/fa'

interface Props {
  title: string
  type?: string
  description?: string
  locations?: {
    title: string
    des: string
    duration?: string
  }[]
}

const AccordionCom: React.FC<{ content: Props }> = ({ content }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => {
        setIsSelected(value === 'title')
      }}
      className={`w-full bg-five rounded-lg tran-slow border ${
        isSelected ? 'bg-five px-4 border-transparent' : 'bg-third border-four px-4'
      }`}
    >
      <AccordionItem value="title">
        <AccordionTrigger
          className={`cursor-pointer text-lg font-semibold ${isSelected ? 'text-eight' : 'text-secondary'}`}
        >
          {content.type && content.type ? (
            <>{content.title}</>
          ) : (
            <div className="flex gap-2">
              <div className="text-size-xl pt-2">
                <FaRegQuestionCircle />
              </div>
              {content.title}
            </div>
          )}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            {content.locations ? (
              content.locations.map((v, index) => (
                <div key={index} className="flex gap-2 ">
                  {v.duration ? (
                    <div className="pt-1 text-eight text-lg">{<FaMapMarkerAlt />}</div>
                  ) : (
                    <div className="ml-4" />
                  )}
                  <div>
                    {v.duration ? <h5 className="text-eight text-base font-semibold">{v.title}</h5> : null}

                    <div className="text-four flex flex-col gap-8">
                      <p>{v.des}</p>
                      {v.duration && (
                        <div>
                          <div>
                            <span className="font-semibold">Duration</span>: {v.duration}
                          </div>
                          <div>Admission Ticket Free</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="ml-6">{content.description}</div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionCom
