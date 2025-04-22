import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

import { Input } from "@/components/ui/input";
import { IBooking } from "@/interfaces/booking";
import { ITour } from "@/interfaces/tour";
import { Button } from "../../ui/button";
import { handleFormatMoney } from "@/helper";

interface PropsTourCheckout {
  tour: ITour;
  booking: IBooking;
}

const BillTourCheckout = ({ booking, tour }: PropsTourCheckout) => {
  const handleGetDay = (v: string) => {
    const time = new Date(v);
    return time.toLocaleDateString("vi-VN");
  };

  return (
    <>
      <div className="bg-seven w-[380px]">
        <div className="lg:p-8 p-4 flex flex-col gap-6">
          <p className="text-secondary font-semibold">{tour.title}</p>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-primary text-xl" />
            <span className="text-four text-sm">{tour.location}</span>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-four">Duration:</div>
              <div className="font-semibold text-secondary">{tour.time}</div>
            </div>
            <div>
              <div className="text-four">Tour type:</div>
              <div className="font-semibold text-secondary">{tour.type}</div>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <FaCalendarAlt className="text-primary text-xl" />
            <div className="text-secondary flex items-center gap-1">
              <span>{handleGetDay(booking.duration.from)}</span>
              <span>-</span>
              <span>{handleGetDay(booking.duration.to)}</span>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <GoPeople className="text-primary text-xl" />
            <div className="text-secondary">{booking.guests}</div>
          </div>
          <div className="w-full h-[56px] flex items-center gap-4 text-sm">
            <div className="flex-[1_0_auto]  h-full">
              <Input
                className="bg-third rounded-none h-full p-0 py-2 pl-3 placeholder:text-four"
                placeholder="Promo Code"
              />
            </div>
            <div className="text-secondary w-[112px] h-full">
              <Button variant={"outline"} className="font-bold border-2 h-full">
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
          <span>Total</span>
          <span>{handleFormatMoney(booking.totalPrice)}</span>
        </div>
      </div>
    </>
  );
};

export default BillTourCheckout;
