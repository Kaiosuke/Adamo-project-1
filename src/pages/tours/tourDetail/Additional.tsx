import AccordionCom from "@/components/AccordionCom";
import { FaMapMarkerAlt } from "react-icons/fa";

const Additional = () => {
  return (
    <>
      <div>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-secondary">
          <li>Confirmation will be received at time of booking </li>
          <li>Not recommended for travelers with back problems </li>
          <li>Not recommended for pregnant travelers Infant seats available</li>
          <li>Not wheelchair accessible </li>
          <li>Children must be accompanied by an adult </li>
          <li>
            Vegetarian option is available, please advise at time of booking if
            required
          </li>
          <li>Minimum numbers apply. </li>
          <li>
            There is a possibility of cancellation after confirmation if the
            meteorological
          </li>
          <li>Conditions do not allow it </li>
          <li>Stroller accessible </li>
          <li>Service animals allowed </li>
          <li>Near public transportation </li>
          <li>Most travelers can participate </li>
          <li>Service animals allowed </li>
          <li>This tour/activity will have a maximum of 17 travelers </li>
        </ul>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">FAQs</h4>
          <div className="flex flex-col gap-4 mt-4">
            <AccordionCom
              title="What is the maximum group size during 2 Days 1 Night To Zagora Desert From Marrakech?"
              type="faqs"
              contents={[
                {
                  des: "This activity will have a maximum of 17 travelers.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
            <AccordionCom
              title="When and where does the tour start?"
              type="faqs"
              contents={[
                {
                  des: "This activity will have a maximum of 17 travelers.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
            <AccordionCom
              title="Do you arrange airport transfers?"
              type="faqs"
              contents={[
                {
                  des: "This activity will have a maximum of 17 travelers.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Additional;
