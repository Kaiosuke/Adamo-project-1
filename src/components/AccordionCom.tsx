import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  title: string;
  contents: {
    location: string;
    des: string;
    duration?: string;
  }[];
}

function AccordionCom({ title, contents }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(value) => {
        setIsSelected(value === "title");
      }}
      className={`w-full bg-five rounded-lg tran-slow border ${
        isSelected
          ? "bg-five px-4 border-transparent"
          : "bg-third border-four px-4"
      }`}
    >
      <AccordionItem value="title">
        <AccordionTrigger className="cursor-pointer text-lg text-eight font-semibold">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            {contents.map((content, index) => (
              <div key={index} className="flex gap-2 ">
                <div className="pt-1">
                  <FaMapMarkerAlt className="text-eight text-lg" />
                </div>
                <div>
                  <h5 className="text-eight text-base font-semibold">
                    Molo Beverello
                  </h5>
                  <div className="text-four flex flex-col gap-8">
                    <p>{content.des}</p>
                    {content.duration && (
                      <div>
                        <div>
                          <span className="font-semibold">Duration</span>:{" "}
                          {content.duration}
                        </div>
                        <div>Admission Ticket Free</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionCom;
