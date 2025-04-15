import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  date: Date;
  setDate: (v: any) => void;
}

function DatePickerSingle({ date, setDate }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Button
          variant={"outline"}
          size={"four"}
          className={cn(
            "justify-start text-left font-normal border-none shadow-none group pe-0 h-full w-full",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-3 text-primary group-hover:text-third ml-6" />
          {date ? format(date, "PPP") : <span>Departure time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full h-full p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

export default DatePickerSingle;
