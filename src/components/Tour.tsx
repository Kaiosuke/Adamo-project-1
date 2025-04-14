import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";

import { handleFormatMoney } from "@/helper";
import { ITour } from "@/interfaces/tour";
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";
import LoadedImage from "./LoadingList/LoadedImage";

const Tour = ({ tour }: { tour: ITour }) => {
  return (
    <>
      {tour && (
        <div className="w-full ">
          <div className="relative">
            <Link to={`/tour-detail/${tour.id}`}>
              <LoadedImage thumbnail={tour.thumbnail} alt={tour.title} />
            </Link>
            <div className="w-[32px] absolute top-[-1px] right-10">
              {Number(tour) % 2 === 0 ? (
                <img src={Shape} alt="shape" className="object-cover w-full" />
              ) : (
                <img src={Shape2} alt="shape" className="object-cover w-full" />
              )}
            </div>
            <div className="text-third px-4 py-1.5 bg-primary w-fit flex items-center gap-1 absolute left-0 bottom-8">
              <MdOutlineStar />
              {tour.score}
            </div>
          </div>
          <div>
            <div className="pt-4 flex items-center gap-2">
              <CiLocationOn className="text-size-xl text-primary" />
              <span className="text-four">{tour.location}</span>
            </div>
            <h5 className="text-size-lg font-medium pt-2 hover:underline h-[40px] leading-1">
              <Link to={`/tour-detail/${tour.id}`}>{tour.title}</Link>
            </h5>
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-1">
                <MdCalendarMonth className="text-primary text-size-lg" />
                <span className="text-four">{tour.time}</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-four">from</span>
                <span className="text-secondary text-size-xl font-bold">
                  {handleFormatMoney(tour.price)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
