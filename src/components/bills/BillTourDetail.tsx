import { handleFormatMoney } from "@/helper";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
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
import { addBooking } from "@/redux/slices/bookingSlice";
import { filterByGuest } from "@/redux/slices/toursSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { StringParam, useQueryParams } from "use-query-params";
import DatePickerWithRange from "../DatePickerWithRange";
import { Button } from "../ui/button";

const BillTourDetail = () => {
  const { tour } = useSelector(tourSelector);

  const { t } = useTranslation("search");

  const [query, setQuery] = useQueryParams({
    from: StringParam,
    to: StringParam,
    duration: StringParam,
  });

  const duration = query.duration || 3;
  const from = query.from ? new Date(query.from) : new Date();
  const to =
    query.to && query.from
      ? new Date(query.to)
      : addDays(
          new Date(query.from ? query.from : new Date()),
          Number(duration)
        );

  const [date, setDate] = useState<DateRange | undefined>({
    from: from,
    to: to,
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
                      setQuery={setQuery}
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

export default BillTourDetail;
