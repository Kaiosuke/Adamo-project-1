import { getFiltersHotel } from "@/api/hotelRequest";
import { handleFormatMoney } from "@/helper";
import { IHotel } from "@/interfaces/hotel";
import { IRoom } from "@/interfaces/room";
import { roomSelector } from "@/redux/selectors/roomSelector";
import {
  changeBreakfast,
  changeExtraBed,
  deCreaseBreakfast,
  deCreaseExtraBed,
  decreaseRoom,
  IBreakfast,
  IExtraBed,
  inCreaseBreakfast,
  inCreaseExtraBed,
  increaseRoom,
} from "@/redux/slices/roomsSlice";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { StringParam, useQueryParams } from "use-query-params";
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

import { Form, FormField, FormMessage } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { IBookingHotel } from "@/interfaces/booking";
import { addBookingHotel } from "@/redux/slices/bookingSlice";
import { bookingHotelSchema } from "@/schemas/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateRange } from "react-day-picker";
import { useNavigate } from "react-router";
import { useDebouncedCallback } from "use-debounce";
import DatePickerWithRange from "../DatePickerWithRange";

const BillHotelDetail = ({ hotel }: { hotel?: IHotel }) => {
  const { t } = useTranslation(["search"]);

  const { rooms, breakfast, extraBed } = useSelector(roomSelector);

  const [query, setQuery] = useQueryParams({
    guest: StringParam || "",
    from: StringParam,
    to: StringParam,
  });

  const from = query.from ? new Date(query.from) : new Date();
  const to = query.to
    ? new Date(query.to)
    : query.from
    ? new Date(query.from)
    : new Date();

  const [date, setDate] = useState<DateRange | undefined>({
    from: from,
    to: to,
  });

  const { data } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getFiltersHotel(),
  });

  const dispatch = useDispatch();

  const handleDecreaseRoom = (room: IRoom) => {
    dispatch(decreaseRoom(room));
  };

  const handleIncreaseRoom = (room: IRoom) => {
    dispatch(increaseRoom(room));
  };

  const handleChangeBreakfast = () => {
    dispatch(changeBreakfast());
  };

  const handleDecreaseBreakfast = (breakfast: IBreakfast) => {
    if (breakfast.quantity < 1) {
      return toast.warning("Cannot decrease further");
    }
    dispatch(deCreaseBreakfast());
  };

  const handleIncreaseBreakfast = (breakfast: IBreakfast) => {
    if (breakfast.quantity > 6) {
      return toast.warning("Cannot increase further");
    }

    dispatch(inCreaseBreakfast());
  };

  const handleChangeExtraBed = () => {
    dispatch(changeExtraBed());
  };

  const handleDecreaseExtraBed = (extraBed: IExtraBed) => {
    if (extraBed.quantity < 1) {
      return toast.warning("Cannot decrease further");
    }

    dispatch(deCreaseExtraBed());
  };

  const handleIncreaseExtraBed = (extraBed: IExtraBed) => {
    if (extraBed.quantity > 6) {
      return toast.warning("Cannot increase further");
    }
    dispatch(inCreaseExtraBed());
  };

  const handleTotalMoney = () => {
    let data = rooms.reduce((acc: number, cur) => {
      return (acc += cur.data.price * cur.quantity);
    }, 0);

    if (breakfast.status) data += breakfast.price * breakfast.quantity;
    if (extraBed.status) data += extraBed.price * extraBed.quantity;
    if (date?.from && date.to)
      data *= date?.to?.getTime() - date?.from?.getTime() + 1000 * 24 * 60 * 60;

    return data / (1000 * 60 * 60 * 24);
  };

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof bookingHotelSchema>>({
    resolver: zodResolver(bookingHotelSchema),
    defaultValues: {
      guests: query.guest ? query.guest : "",
    },
  });

  const onSubmit = useDebouncedCallback(
    (values: z.infer<typeof bookingHotelSchema>) => {
      if (rooms.length < 1) {
        return toast.error("Please select at least 1 room");
      }
      if (date?.from && date.to) {
        const data: IBookingHotel = {
          duration: {
            from: date?.from.toDateString(),
            to: date?.to.toDateString(),
          },
          breakFast:
            breakfast.status && breakfast.quantity > 0 ? breakfast : undefined,
          extraBed:
            extraBed.status && extraBed.quantity > 0 ? extraBed : undefined,
          rooms: rooms,
          guests: values.guests,
          hotelId: hotel!.id,
          totalPrice: handleTotalMoney(),
        };

        dispatch(addBookingHotel(data));
        toast.success("Booking successfully");
        navigate("/hotel-checkout");
      } else {
        toast.warning("Please choose dates");
      }
    },
    300
  );

  return (
    <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <div className="w-full h-full bg-seven">
                <div className="lg:p-8 p-4 flex gap-2 items-end">
                  <span className="text-four">from</span>
                  <span className="text-secondary text-size-xl font-semibold">
                    {hotel && handleFormatMoney(hotel.price)}
                  </span>
                </div>
                <div className="h-[1px] w-full bg-four opacity-50" />
                <div className="lg:p-8 p-4 flex flex-col gap-6">
                  <div className="bg-third h-full">
                    <DatePickerWithRange
                      setQuery={setQuery}
                      setDate={setDate}
                      date={date}
                    />
                  </div>
                  <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
                    <GoPeople className="text-primary text-xl group-hover:text-third" />
                    <Select
                      onValueChange={(v) => {
                        setQuery({ guest: v });
                        return field.onChange(v);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full group-hover:text-third">
                        <SelectValue placeholder={t("hotel.guest")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup {...field}>
                          {data?.guests &&
                            data.guests.map((v, index) => (
                              <SelectItem value={v} key={index}>
                                {v}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                  <div>
                    <div className="flex flex-col gap-2">
                      {rooms.map((room) => (
                        <div
                          key={room.data.id}
                          className="grid grid-cols-3 items-center"
                        >
                          <div className="font-bold w-[122px]">
                            {room?.data?.type}
                          </div>
                          <div className="flex items-center justify-between gap-2 ml-auto">
                            <FaCircleMinus
                              className="text-four text-xl cursor-pointer hover:text-four/80"
                              onClick={() => handleDecreaseRoom(room.data)}
                            />
                            <span className="w-[10px] text-center">
                              {room.quantity}
                            </span>
                            <FaCirclePlus
                              className="text-four text-xl cursor-pointer hover:text-four/80"
                              onClick={() => handleIncreaseRoom(room.data)}
                            />
                          </div>
                          <div className="font-bold text-six ml-auto">
                            {room.quantity &&
                              room.data?.price &&
                              handleFormatMoney(
                                room.quantity * room.data.price
                              )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-four opacity-30" />
                  <div>
                    <div className="font-bold text-secondary">Add-ons:</div>
                    <div className={`grid grid-cols-3 items-center mt-2`}>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          className="bg-third"
                          checked={breakfast.status}
                        />
                        <label
                          htmlFor="terms"
                          onClick={handleChangeBreakfast}
                          className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Breakfast
                        </label>
                      </div>
                      <div
                        className={`flex w-full justify-between ml-auto col-span-2 ${
                          breakfast.status
                            ? ""
                            : "pointer-events-none opacity-35"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between gap-2 ml-[40px]`}
                        >
                          <FaCircleMinus
                            className="text-four text-xl cursor-pointer hover:text-four/80"
                            onClick={() => {
                              if (breakfast.status)
                                handleDecreaseBreakfast(breakfast);
                            }}
                          />
                          <span className="w-[10px] text-center">
                            {breakfast.quantity}
                          </span>
                          <FaCirclePlus
                            className="text-four text-xl cursor-pointer hover:text-four/80"
                            onClick={() => {
                              if (breakfast.status)
                                handleIncreaseBreakfast(breakfast);
                            }}
                          />
                        </div>
                        <div className="font-bold text-six ml-auto">
                          {handleFormatMoney(
                            breakfast.price * breakfast.quantity
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`grid grid-cols-3 items-center mt-2`}>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          className="bg-third"
                          checked={extraBed.status}
                        />
                        <label
                          htmlFor="terms"
                          onClick={handleChangeExtraBed}
                          className="text-base font-semibold flex items-center justify-center leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Extra Bed
                        </label>
                      </div>
                      <div
                        className={`flex w-full justify-between col-span-2 ${
                          extraBed.status
                            ? ""
                            : "pointer-events-none opacity-35"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between gap-2 ml-[40px]`}
                        >
                          <FaCircleMinus
                            className="text-four text-xl cursor-pointer hover:text-four/80"
                            onClick={() => {
                              if (extraBed.status)
                                handleDecreaseExtraBed(extraBed);
                            }}
                          />
                          <span className="w-[10px] text-center">
                            {extraBed.quantity}
                          </span>
                          <FaCirclePlus
                            className="text-four text-xl cursor-pointer hover:text-four/80"
                            onClick={() => {
                              if (extraBed.status)
                                handleIncreaseExtraBed(extraBed);
                            }}
                          />
                        </div>
                        <div className="font-bold text-six ml-auto">
                          {handleFormatMoney(
                            extraBed.price * extraBed.quantity
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-four opacity-30" />

                  <div className="flex justify-between items-center text-size-xl">
                    <span className="text-secondary">Total</span>
                    <span className="text-secondary font-semibold">
                      {handleFormatMoney(handleTotalMoney())}
                    </span>
                  </div>
                  <div className="">
                    <Button variant={"primary"}>Book now</Button>
                  </div>
                </div>
              </div>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

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

export { BillHotelCheckOut, BillHotelDetail };
