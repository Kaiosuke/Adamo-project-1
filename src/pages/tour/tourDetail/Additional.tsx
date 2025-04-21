import AccordionCom from "@/components/AccordionCom";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";

const Additional = () => {
  const { tour } = useSelector(tourSelector);

  return (
    <>
      <div>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-secondary">
          {tour?.additionalInfo.list.map((v, index) => (
            <li key={index}> {v}</li>
          ))}
        </ul>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">FAQs</h4>
          <div className="flex flex-col gap-4 mt-4">
            {tour?.additionalInfo.faqs.map((v, index) => (
              <Fragment key={index}>
                <AccordionCom content={v} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Additional;
