import Image from "@/assets/images/Fansipan.png";
import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router";

const Hotel = ({ hotel }: { hotel: string | number }) => {
  return (
    <div className="w-full ">
      <div className="relative">
        <div className="overflow-hidden">
          <Link to="#!" className="group hover:scale-125 overlay-img">
            <img
              src={Image}
              alt="VungTau"
              className="object-cover w-full group-hover:scale-120 tran-fast"
            />
          </Link>
        </div>
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
          <span className="text-four">Sapa, Laocai</span>
        </div>
        <h5 className="text-size-lg font-medium pt-2 hover:underline">
          <a href="#">Experience sea tourism on Phuquoc golden pearl</a>
        </h5>
        <div className="flex xl:items-center justify-between pt-4 xl:flex-row lg:flex-col flex-row lg:items-start items-center ">
          <div className="flex items-center gap-2">
            <div className="w-fit px-2 py-0.5 flex items-center justify-center text-sm bg-primary text-third gap-1">
              Rating: <span className="text-base font-semibold">9.5</span>
            </div>
            <span className="text-sm">(150 reviews)</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-four text-sm">from</span>
            <span className="text-secondary text-size-xl font-bold">
              $146.00
            </span>
            <span className="text-four text-sm">/nights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
