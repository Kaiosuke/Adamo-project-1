import Avatar1 from "@/assets/images/Avatar-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";

interface Props {
  rate: number;
  avatar: string;
  opinion: string;
  time: string;
  title: string;
  des: string;
}

const ReviewTour = ({ review }: { review: Props }) => {
  console.log(review.rate);

  return (
    <div>
      <div className="flex gap-6 items-center">
        <Avatar className="w-[83px] h-[83px]">
          <AvatarImage src={Avatar1} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-4 text-secondary">
          <div className="text-secondary flex items-center gap-2">
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-nine" />
            <FaStar className="text-four" />
          </div>
          <div className="font-bold">{review.title}</div>
          <div className="flex gap-2 items-center">
            {review.opinion} <TbPointFilled className="w-3 text-five" />{" "}
            {review.time}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="leading-6 text-four">{review.des}</p>
      </div>
      <div className="str-line-2" />
    </div>
  );
};

export default ReviewTour;
