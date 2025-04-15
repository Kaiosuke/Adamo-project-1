import { handleFormatMoney } from "@/helper";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { filterByGuest } from "@/redux/slices/hotelsSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import DatePickerSingle from "../DatePickerSingle";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { roomSelector } from "@/redux/selectors/roomSelector";
import { decreaseRoom, increaseRoom } from "@/redux/slices/roomsSlice";
import { IRoom } from "@/interfaces/room";

const BillHotelDetail = () => {
  const { t } = useTranslation(["search"]);

  const { hotel } = useSelector(hotelSelector);
  const { guests, filter } = useSelector(hotelSelector);
  const { rooms } = useSelector(roomSelector);

  const { guest } = filter;

  const [date, setDate] = useState<Date>(new Date());

  const dispatch = useDispatch();

  const handleFilterGuest = (v: string) => {
    dispatch(filterByGuest(v));
  };

  const handleDecreaseRoom = (room: IRoom) => {
    dispatch(decreaseRoom(room.id));
  };

  const handleIncreaseRoom = (room: IRoom) => {
    dispatch(increaseRoom(room.id));
  };

  return (
    <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit">
      <div className="w-full h-full bg-seven">
        <div className="lg:p-8 p-4 flex gap-2 items-end">
          <span className="text-four">from</span>
          <span className="text-secondary text-size-xl font-semibold">
            {hotel?.price && handleFormatMoney(hotel?.price)}
          </span>
        </div>
        <div className="h-[1px] w-full bg-four opacity-50" />
        <div className="lg:p-8 p-4 flex flex-col gap-6">
          <div className="bg-third h-[64px]">
            <DatePickerSingle date={date} setDate={setDate} />
          </div>
          <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
            <LuUsers className="text-primary text-size-lg group-hover:text-third" />
            <Select
              defaultValue={guest}
              onValueChange={(value) => handleFilterGuest(value)}
            >
              <SelectTrigger className="w-full group-hover:text-third">
                <SelectValue placeholder={t("hotel.guest")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {guests.length &&
                    guests.map((v, index) => (
                      <SelectItem value={v} key={index}>
                        {v}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              {rooms.map((room) => (
                <div key={room.id} className="grid grid-cols-3 items-center">
                  <div className="font-bold w-[122px]">{room.type}</div>
                  <div className="flex items-center justify-between gap-2 ml-auto">
                    <FaCircleMinus
                      className="text-four text-xl cursor-pointer hover:text-four/80"
                      onClick={() => handleDecreaseRoom(room)}
                    />
                    <span className="w-[10px] text-center">
                      {room.quantity}
                    </span>
                    <FaCirclePlus
                      className="text-four text-xl cursor-pointer hover:text-four/80"
                      onClick={() => handleIncreaseRoom(room)}
                    />
                  </div>
                  <div className="font-bold text-six ml-auto">
                    {room.quantity &&
                      handleFormatMoney(room.quantity * room.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[1px] w-full bg-four opacity-30" />
          <div>
            <div className="font-bold text-secondary">Add-ons:</div>
            <div className="grid grid-cols-3 items-center mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="bg-third" />
                <label
                  htmlFor="terms"
                  className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Breakfast
                </label>
              </div>
              <div className="flex items-center justify-between gap-2 ml-auto">
                <FaCircleMinus className="text-four text-xl cursor-pointer hover:text-four/80" />
                <span className="w-[10px] text-center">1</span>
                <FaCirclePlus className="text-four text-xl cursor-pointer hover:text-four/80" />
              </div>
              <div className="font-bold text-six ml-auto">$120.00</div>
            </div>
            <div className="grid grid-cols-3 items-center mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="extra" className="bg-third" />
                <label
                  htmlFor="extra"
                  className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Extra Bed
                </label>
              </div>
              <div className="flex items-center justify-between gap-2 ml-auto">
                <FaCircleMinus className="text-four text-xl cursor-pointer hover:text-four/80" />
                <span className="w-[10px] text-center">0</span>
                <FaCirclePlus className="text-four text-xl cursor-pointer hover:text-four/80" />
              </div>
              <div className="font-bold text-six ml-auto">0</div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-four opacity-30" />

          <div className="flex justify-between items-center text-size-xl">
            <span className="text-secondary">Total</span>
            <span className="text-secondary font-semibold">$450.00</span>
          </div>
          <div className="">
            <Button variant={"primary"}>Book now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BillHotelCheckOut = () => {
  return (
    <div className="bg-seven">
      <div className="lg:p-8 p-4 flex flex-col gap-6">
        <p className="text-secondary font-semibold">
          Discover interesting things in the romantic coastal city of Vungtau
        </p>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-primary text-xl" />
          <span className="text-four text-sm">Vungtau City, Baria-Vungtau</span>
        </div>
        <div className="flex gap-10">
          <div>
            <div className="text-four">Duration:</div>
            <div className="font-semibold text-secondary">
              3 days - 2 nights
            </div>
          </div>
          <div>
            <div className="text-four">Tour type:</div>
            <div className="font-semibold text-secondary">Sun - Beach</div>
          </div>
        </div>
        <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
          <FaCalendarAlt className="text-primary text-xl" />
          <div className="text-secondary">
            <span>25/02/2021 - </span>
            <span> 28/02/2021</span>
          </div>
        </div>
        <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
          <GoPeople className="text-primary text-xl" />
          <div className="text-secondary">2 Adults - 1 Children</div>
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
        <span>$450.00</span>
      </div>
    </div>
  );
};

export { BillHotelCheckOut, BillHotelDetail };
