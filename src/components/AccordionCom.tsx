import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

interface Props {
  title: string;
  type: string;
  contents: {
    location?: string;
    des: string;
    icon: React.ElementType;
    duration?: string;
  }[];
}

function AccordionCom({ title, type, contents }: Props) {
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
        <AccordionTrigger
          className={`cursor-pointer text-lg font-semibold ${
            isSelected ? "text-eight" : "text-secondary"
          }`}
        >
          {type === "location" ? (
            title
          ) : (
            <div className="flex gap-2">
              <div className="text-size-xl pt-2">
                <FaRegQuestionCircle />
              </div>
              {title}
            </div>
          )}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            {contents.map((content, index) => (
              <div key={index} className="flex gap-2 ">
                {type === "location" ? (
                  <div className="pt-1 text-eight text-lg">
                    {<content.icon />}
                  </div>
                ) : (
                  <div className="ml-4" />
                )}
                <div>
                  {type === "location" ? (
                    <h5 className="text-eight text-base font-semibold">
                      Molo Beverello
                    </h5>
                  ) : null}

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
