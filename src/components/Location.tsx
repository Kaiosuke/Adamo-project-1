import { CiLocationOn } from "react-icons/ci";
import { MdCalendarMonth, MdOutlineStar } from "react-icons/md";

interface LocationComponent {
  location: string;
  mainImg: string;
  subImag: string;
  rate: number;
  des: string;
  time: string;
  price: string;
  wishlist?: boolean;
}

const Location = ({
  location,
  des,
  mainImg,
  subImag,
  rate,
  time,
  price,
}: LocationComponent) => {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={mainImg}
          alt="VungTau"
          className="object-cover w-full after:hover:zoom-in-10"
        />

        <div className="w-[32px] absolute top-[-1px] right-10">
          <img src={subImag} alt="shape" className="object-cover w-full" />
        </div>
        <div className="text-third px-4 py-1.5 bg-primary w-fit flex items-center gap-1 absolute left-0 bottom-8">
          <MdOutlineStar />
          {rate}
        </div>
      </div>
      <div>
        <div className="pt-4 flex items-center gap-2">
          <CiLocationOn className="text-size-xl text-primary" />
          <span className="text-four">{location}</span>
        </div>
        <h5 className="text-size-lg font-medium pt-2">{des}</h5>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1">
            <MdCalendarMonth className="text-primary text-size-lg" />
            <span className="text-four">{time}</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-four">from</span>
            <span className="text-secondary text-size-xl font-bold">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
