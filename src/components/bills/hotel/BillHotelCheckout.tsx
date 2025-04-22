import { handleFormatMoney } from "@/helper";
import { IHotel } from "@/interfaces/hotel";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IBookingHotel } from "@/interfaces/booking";

interface PropsBillCheckout {
  data: IHotel;
  bookingHotel: IBookingHotel;
}

const BillHotelCheckOut = ({ data, bookingHotel }: PropsBillCheckout) => {
  const handleGetDay = (v: string) => {
    const time = new Date(v);
    return time.toLocaleDateString("vi-VN");
  };

  return (
    <>
      {
        <div className="bg-seven w-[380px]">
          <div className="lg:p-8 p-4 flex flex-col gap-6">
            <p className="text-secondary font-semibold">{data.title}</p>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-primary text-xl" />
              <span className="text-four text-sm">{data.location}</span>
            </div>
            <div className="flex gap-10">
              <div>
                <div className="text-four">Tour type:</div>
                <div className="font-semibold text-secondary">{data.type}</div>
              </div>
            </div>
            <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
              <FaCalendarAlt className="text-primary text-xl" />
              <div className="text-secondary flex items-center gap-1">
                <span>{handleGetDay(bookingHotel.duration.from)}</span>
                <span>-</span>
                <span>{handleGetDay(bookingHotel.duration.to)}</span>
              </div>
            </div>
            <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
              <GoPeople className="text-primary text-xl" />
              <div className="text-secondary">{bookingHotel.guests}</div>
            </div>
            <div>
              {bookingHotel.rooms.map((room) => (
                <>
                  {room.quantity > 0 && (
                    <div
                      key={room.data.id}
                      className="flex items-center justify-between font-bold"
                    >
                      <div className="flex items-center gap-0.5">
                        <div className="text-primary">{room.quantity}</div>
                        <div className="text-primary">x</div>
                        <div className="text-secondary">{room.data.type}</div>
                      </div>
                      <div>
                        {handleFormatMoney(room.data.price * room.quantity)}
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div>
              <div className="text-four">Add-ons:</div>
              <div>
                {bookingHotel.breakFast && (
                  <div className="flex items-center justify-between text-secondary font-bold">
                    <div className="flex items-center gap-0.5">
                      <div className="text-primary">
                        {bookingHotel.breakFast.quantity}
                      </div>
                      <div className="text-primary">x</div>
                      <div className="text-secondary">Breakfast</div>
                    </div>
                    <div>{handleFormatMoney(bookingHotel.breakFast.price)}</div>
                  </div>
                )}
              </div>
              <div>
                {bookingHotel.extraBed && (
                  <div className="flex items-center justify-between text-secondary font-bold">
                    <div className="flex items-center gap-0.5">
                      <div className="text-primary">
                        {bookingHotel.extraBed.quantity}
                      </div>
                      <div className="text-primary">x</div>
                      <div className="text-secondary">extraBed</div>
                    </div>
                    <div>{handleFormatMoney(bookingHotel.extraBed.price)}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-[56px] flex items-center gap-4 text-sm">
              <div className="flex-[1_0_auto]  h-full">
                <Input
                  className="bg-third rounded-none h-full p-0 py-2 pl-3 placeholder:text-four"
                  placeholder="Promo Code"
                />
              </div>
              <div className="text-secondary w-[112px] h-full">
                <Button
                  variant={"outline"}
                  className="font-bold border-2 h-full"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
            <span>Total</span>
            <span>{handleFormatMoney(bookingHotel.totalPrice)}</span>
          </div>
        </div>
      }
    </>
  );
};

export default BillHotelCheckOut;
