"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DatePickerSingle() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal border-none shadow-none group ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-3 text-primary group-hover:text-third" />
          {date ? format(date, "PPP") : <span>Departure time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePickerSingle;
