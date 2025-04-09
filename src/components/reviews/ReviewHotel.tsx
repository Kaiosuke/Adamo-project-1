import Avatar1 from "@/assets/images/Avatar-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TbPointFilled } from "react-icons/tb";

const ReviewHotel = () => {
  return (
    <div>
      <div className="str-line-2" />
      <div className="flex gap-6 items-center">
        <Avatar className="w-[83px] h-[83px]">
          <AvatarImage src={Avatar1} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4 text-secondary">
          <div className="flex items-center gap-1.5 text-primary font-bold">
            <span>Rating 9.5</span>
            <TbPointFilled className="text-[10px] text-four" />
            <span>Wonderful</span>
          </div>
          <div className="font-bold">The best experience ever!</div>
          <div className="flex gap-2 items-center">
            Nevermind <TbPointFilled className="w-3 text-five" /> Sep 2020
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="leading-6 text-four">
          It was excellent! The trip is long but the vans are comfortable and
          have wi-fi. The driver very friendly as well as Ahmed our guide to the
          dromedaries. The camp was beautiful, comfortable beds, clean bathroom
          and delicious food!
        </p>
      </div>
    </div>
  );
};

export default ReviewHotel;
