import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";

import { handleFormatMoney } from "@/helper";
import { ITour } from "@/interfaces/tour";
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth, MdOutlineStar } from "react-icons/md";
import { Link } from "react-router";
import LoadedImage from "./LoadingList/LoadedImage";
import { StringParam, useQueryParams } from "use-query-params";
import { useAppDispatch } from "@/redux";
import { changeFavoriteTour } from "@/api/tourRequest";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";

const Tour = ({ tour }: { tour: ITour }) => {
  const [query] = useQueryParams({
    from: StringParam,
  });

  const from = query.from || "";

  const dispatch = useAppDispatch();

  const handleChangeFavorite = useDebouncedCallback(async () => {
    try {
      const data = {
        favorite: !tour.favorite,
      };
      await dispatch(changeFavoriteTour({ id: tour.id, data: data })).unwrap();
      toast.success("Successfully", {
        style: {
          backgroundColor: "#4caf50",
          color: "#ffffff",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }, 300);

  return (
    <>
      {tour && (
        <div className="w-full ">
          <div className="relative">
            <Link
              to={`/tour-detail/${tour.id}?from=${from}&duration=${tour.duration}`}
            >
              <LoadedImage thumbnail={tour.thumbnail} alt={tour.title} />
            </Link>
            <div
              className={`w-[32px] absolute top-[-1px] right-10 cursor-pointer ${
                tour.favorite ? "animate-jump" : ""
              }`}
              onClick={handleChangeFavorite}
            >
              {tour.favorite ? (
                <img
                  src={Shape}
                  alt="shape"
                  className={`object-cover w-full `}
                />
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
              <Link
                to={`/tour-detail/${tour.id}?from=${from}&duration=${tour.duration}`}
              >
                {tour.title}
              </Link>
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
