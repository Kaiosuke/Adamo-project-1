import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

function SliderCom() {
  const [values, setValues] = useState([0, 1200]);

  return (
    <div className="relative">
      <Slider
        defaultValue={values}
        max={1200}
        step={1}
        onValueChange={(e) => setValues(e)}
        className={cn("w-full")}
      />
      <div className="absolute -top-[30px]">${values[0]}</div>
      <div className="absolute -top-[30px] right-[10px]">${values[1]}</div>
    </div>
  );
}

export default SliderCom;
