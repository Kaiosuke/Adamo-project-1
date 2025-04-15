"use client";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  setDate: (value: DateRange | undefined) => void;
  date: DateRange | undefined;
  duration: number;
}

function DatePickerWithRange({ date, setDate, duration }: Props) {
  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "group justify-start text-left font-normal border-none shadow-none text-secondary bg-third",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="text-primary group-hover:text-third" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(range) => {
              if (range?.from && range?.to) {
                const maxDate = addDays(range.from, duration);
                if (range.to > maxDate) {
                  setDate({ from: range.from, to: maxDate });
                  return;
                }
              }
              setDate(range);
            }}
            disabled={(date) => {
              const today = new Date();
              return date < today;
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePickerWithRange;
