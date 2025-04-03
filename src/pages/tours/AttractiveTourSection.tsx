import ButtonFeature from "@/components/ButtonFeature";
import TourList from "./TourList";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const AttractiveTourSection = () => {
  const tourList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];

  return (
    <section className="main-container">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">
          Attractive tour and interesting <br /> experiences
        </h2>
        <div>
          <ButtonFeature content="Filter" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-16 md:pt-10 pt-6">
        {tourList.map((tour, index) => (
          <div key={index}>
            <TourList tour={tour} />
          </div>
        ))}
      </div>

      <div className="lg:pt-16 md:pt-10 pt-6 flex items-center justify-end">
        <div className="flex md:w-2/3 justify-between w-full sm:flex-row flex-col items-center">
          <div className="flex items-center gap-4 text-four">
            <span>Showing</span>
            <span>1/2</span>
          </div>
          <div className="flex gap-4 sm:pt-0 pt-4">
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              <GoArrowLeft />
            </div>
            <div className="w-10 h-10 bg-secondary flex items-center justify-center text-third font-semibold cursor-pointer">
              1
            </div>
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              2
            </div>
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractiveTourSection;
