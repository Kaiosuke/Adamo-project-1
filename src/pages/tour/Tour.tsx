import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";
import { Skeleton } from "@/components/ui/skeleton";
import { ITour } from "@/interfaces/tour";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";

const TourList = ({ tour }: { tour: ITour }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full ">
      <div className="relative">
        <Link to={`/tour-detail/${tour.id}`}>
          {!isLoaded && (
            <div className="">
              <Skeleton className="w-[372px] h-[209.25px]" />
            </div>
          )}
          <img
            src="https://picsum.photos/1920/1080"
            onLoad={() => setIsLoaded(true)}
            alt={tour.title}
            className={`object-cover w-full ${isLoaded ? "block" : "hidden"}`}
          />
        </Link>
        {isLoaded && (
          <>
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
          </>
        )}
      </div>
      <div>
        <div className="pt-4 flex items-center gap-2">
          <CiLocationOn className="text-size-xl text-primary" />
          <span className="text-four">{tour.location}</span>
        </div>
        <h5 className="text-size-lg font-medium pt-2 hover:underline">
          <a href="#">{tour.title}</a>
        </h5>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1">
            <MdCalendarMonth className="text-primary text-size-lg" />
            <span className="text-four">{tour.time}</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-four">from</span>
            <span className="text-secondary text-size-xl font-bold">
              ${tour.price}.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
