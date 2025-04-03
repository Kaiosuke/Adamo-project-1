import Image from "@/assets/images/Fansipan.png";
import Shape from "@/assets/images/shape.png";
import Shape2 from "@/assets/images/Shape-2png.png";
import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth, MdOutlineStar } from "react-icons/md";

const TourList = ({ tour }: { tour: string | number }) => {
  return (
    <div className="w-full ">
      <div className="relative">
        <a href="#!">
          <img src={Image} alt="VungTau" className="object-cover w-full" />
        </a>
        <div className="w-[32px] absolute top-[-1px] right-10">
          {Number(tour) % 2 === 0 ? (
            <img src={Shape} alt="shape" className="object-cover w-full" />
          ) : (
            <img src={Shape2} alt="shape" className="object-cover w-full" />
          )}
        </div>
        <div className="text-third px-4 py-1.5 bg-primary w-fit flex items-center gap-1 absolute left-0 bottom-8">
          <MdOutlineStar />
          4.5
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
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1">
            <MdCalendarMonth className="text-primary text-size-lg" />
            <span className="text-four">3 days - 2 night</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-four">from</span>
            <span className="text-secondary text-size-xl font-bold">
              $146.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
