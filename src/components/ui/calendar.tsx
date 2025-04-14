import { cn } from "@/lib/utils";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4", className)}
      classNames={{
        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
