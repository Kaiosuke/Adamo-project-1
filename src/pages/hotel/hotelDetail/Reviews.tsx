import Pagination from "../../../components/paginations/Pagination";
import PdSub from "@/components/PdSub";
import ReviewHotel from "@/components/reviews/ReviewHotel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Reviews = () => {
  const [isReview, setIsReview] = useState(false);

  return (
    <div>
      <div className="flex gap-8">
        <div className="w-[148px] h-[148px] bg-primary flex justify-center items-center">
          <span className="text-third text-size-5xl">9.5</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-size-4xl">Wonderful</div>
          <div>Based on 150 reviews</div>

          <Button
            variant={isReview ? "five" : "primary"}
            size={"third"}
            onClick={() => setIsReview((prev) => !prev)}
          >
            {isReview ? "Close" : "Write a review"}
          </Button>
        </div>
      </div>

      <div className={`md:mt-10 mt-8 ${isReview ? "block" : "hidden"}`}>
        <div className="flex gap-2">
          <div className="">
            <FaUserCircle className="lg:w-[56px] md:w-[48px] w-[40px] h-auto text-five" />
          </div>
          <Textarea
            placeholder="Type anything"
            className="h-[128px] bg-seven text-four placeholder:text-four"
          />
        </div>
        <div className="w-full text-right mt-6">
          <Button className="w-auto lg:px-10 md:px-8 px-6" size={"third"}>
            Comment
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ReviewHotel />
        <ReviewHotel />
        <ReviewHotel />
        <ReviewHotel />
      </div>
      <PdSub />
      <Pagination />
    </div>
  );
};

export default Reviews;
