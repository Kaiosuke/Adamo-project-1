import Avatar1 from "@/assets/images/Avatar-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TbPointFilled } from "react-icons/tb";

interface Props {
  rate: number;
  avatar: string;
  opinion: string;
  time: string;
  title: string;
  des: string;
}

const ReviewHotel = ({ review }: { review: Props }) => {
  return (
    <div>
      <div className="str-line-2" />
      <div className="flex gap-6 items-center">
        <Avatar className="w-[83px] h-[83px]">
          <AvatarImage src={Avatar1} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 text-secondary">
          <div className="flex items-center gap-1.5 text-primary font-bold">
            <span>Rating {review.rate}</span>
            <TbPointFilled className="text-[10px] text-four" />
            <span>{review.opinion}</span>
          </div>
          <div className="font-bold">{review.title}</div>
          <div className="flex gap-2 items-center">
            NeverMind <TbPointFilled className="w-3 text-five" /> {review.time}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="leading-6 text-four h-[60px]">{review.des}</p>
      </div>
    </div>
  );
};

export default ReviewHotel;
