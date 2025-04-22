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
import { memo } from "react";

interface Props {
  setDate: (value: DateRange | undefined) => void;
  date: DateRange | undefined;
  setQuery: ({ from, to }: { from: string | null; to: string | null }) => void;
  duration?: number;
}

function DatePickerWithRange({ date, setDate, duration, setQuery }: Props) {
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
        {duration ? (
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              defaultMonth={date?.from}
              selected={date?.from}
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  setDate({
                    from: selectedDate,
                    to: addDays(selectedDate, duration),
                  });
                  setQuery({
                    from: selectedDate.toDateString(),
                    to: addDays(selectedDate, duration).toDateString(),
                  });
                }
              }}
              disabled={(date) => {
                const today = new Date();
                return date < today;
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        ) : (
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(range) => {
                if (range?.from && range?.to) {
                  const maxDate = addDays(range.from, 30);
                  if (range.to > maxDate) {
                    setDate({ from: range.from, to: maxDate });
                    setQuery({
                      from: range?.from?.toDateString(),
                      to: maxDate.toDateString(),
                    });
                    return;
                  } else {
                    setQuery({
                      from: range?.from?.toDateString(),

                      to: range?.to?.toDateString(),
                    });
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
        )}
      </Popover>
    </div>
  );
}

export default memo(DatePickerWithRange);
