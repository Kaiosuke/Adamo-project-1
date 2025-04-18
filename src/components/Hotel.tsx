import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";
import { handleFormatMoney } from "@/helper";
import { IHotel } from "@/interfaces/hotel";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { StringParam, useQueryParams } from "use-query-params";
import LoadedImage from "./LoadingList/LoadedImage";

const Hotel = ({ hotel }: { hotel: IHotel }) => {
  const totalData = Number(localStorage.getItem("totalReviewHotel") || "0");

  const [query] = useQueryParams({
    guest: StringParam,
  });

  return (
    <div className="w-full">
      <div className="relative">
        <Link to={`/hotel-detail/${hotel.id}?guest=${query.guest}`}>
          <LoadedImage alt={hotel.title} thumbnail={hotel.thumbnail} />
        </Link>

        <div className="w-[32px] absolute top-[-1px] right-10">
          {Number(hotel) % 2 === 0 ? (
            <img src={Shape} alt="shape" className="object-cover w-full" />
          ) : (
            <img src={Shape2} alt="shape" className="object-cover w-full" />
          )}
        </div>
        <div className="absolute left-2 bottom-2 ">
          <div className="flex items-center gap-2">
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
          </div>
        </div>
      </div>
      <div>
        <div className="pt-4 flex items-center gap-2">
          <CiLocationOn className="text-size-xl text-primary" />
          <span className="text-four">{hotel.location}</span>
        </div>
        <h5 className="text-size-lg font-medium pt-2 hover:underline h-[60px]">
          <Link to={`/hotel-detail/${hotel.id}`}>{hotel.title}</Link>
        </h5>
        <div className="flex xl:items-center justify-between pt-4 xl:flex-row lg:flex-col flex-row lg:items-start items-center ">
          <div className="flex items-center gap-2">
            <div className="w-fit px-2 py-0.5 flex items-center justify-center text-sm bg-primary text-third gap-1">
              Rating:{" "}
              <span className="text-base font-semibold">{hotel.score}</span>
            </div>
            <span className="text-sm">
              {totalData} {`${totalData > 0 ? "Reviews" : "Review"}`}
            </span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-four text-sm">from</span>
            <span className="text-secondary text-size-xl font-bold">
              {handleFormatMoney(hotel.price)}
            </span>
            <span className="text-four text-sm">/nights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
