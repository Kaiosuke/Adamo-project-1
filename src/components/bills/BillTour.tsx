import { handleFormatMoney } from "@/helper";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

import { bookingSchema } from "@/schemas/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bookingSelector } from "@/redux/selectors/bookingSelector";
import { addBooking } from "@/redux/slices/bookingSlice";
import { filterByGuest } from "@/redux/slices/toursSlice";
import { useNavigate } from "react-router";
import DatePickerWithRange from "../DatePickerWithRange";
import { Button } from "../ui/button";
import { toast } from "sonner";

const BillTourDetail = () => {
  const { tour } = useSelector(tourSelector);

  const { t } = useTranslation("search");

  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), 1),
    to: addDays(new Date(), tour!.duration),
  });

  const disPatch = useDispatch();

  const { guests, filter } = useSelector(tourSelector);

  const { guest } = filter;

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: guest,
    },
  });

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    if (tour && date?.from && date?.to) {
      const totalPrice = tour?.price && tour?.price * tour?.duration;

      const data = {
        duration: {
          from: date.from.toISOString(),
          to: date.to.toISOString(),
        },
        day: tour.duration,
        tourId: tour.id,
        totalPrice: totalPrice,
        guests: values.guests,
      };

      disPatch(addBooking(data));
      toast.success("Booking successfully");
      navigate("/tour-checkout");
    }
  }

  return (
    <>
      {tour && (
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
                      {handleFormatMoney(tour?.price)}
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-four opacity-50" />
                  <div className="lg:p-8 p-4 flex flex-col gap-6">
                    <div className="flex gap-10">
                      <div>
                        <div className="text-four">Duration:</div>
                        <div className="font-semibold text-secondary">
                          {tour.time}
                        </div>
                      </div>
                      <div>
                        <div className="text-four">Tour type:</div>
                        <div className="font-semibold text-secondary">
                          {tour.type}
                        </div>
                      </div>
                    </div>

                    <DatePickerWithRange
                      setDate={setDate}
                      date={date}
                      duration={tour.duration}
                    />
                    <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
                      <Select
                        onValueChange={(v) => {
                          field.onChange(v);
                          disPatch(filterByGuest(v));
                        }}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full group-hover:text-third">
                          <SelectValue placeholder={t("tour.guest")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup {...field}>
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
                    <FormMessage />
                    <div className="flex justify-between items-center">
                      <span className="text-secondary">Total</span>
                      <span className="text-secondary font-semibold">
                        {handleFormatMoney(tour.duration * tour.price)}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Button variant={"primary"} type="submit">
                        Book now
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            />
          </form>
        </Form>
      )}
    </>
  );
};

const BillTourCheckOut = () => {
  const { booking } = useSelector(bookingSelector);
  const { tour } = useSelector(tourSelector);

  const handleGetDay = (v: string) => {
    const time = new Date(v);
    return time.toLocaleDateString("vi-VN");
  };

  return (
    <>
      {tour && booking && (
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
            <span>{handleFormatMoney(booking.totalPrice)}</span>
          </div>
        </div>
      )}
    </>
  );
};

export { BillTourCheckOut, BillTourDetail };
