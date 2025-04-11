import ButtonFeature from "@/components/ButtonFeature";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";

import SliderCom from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import {
  filterByDuration,
  filterByGuest,
  filterByLocation,
  filterByType,
} from "@/redux/slices/toursSlice";
import { useState } from "react";

const FilterTour = () => {
  const { filter, locations, guests, types, tours, durations } =
    useSelector(tourSelector);

  const [priceTour, setPriceTour] = useState([]);
  const [durationTour, setDurationTour] = useState("");

  const { duration, type, price } = filter;
  const [typeTour, setTypeTour] = useState<string[]>(type);

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterByType(typeTour));
    dispatch(filterByDuration(durationTour));
  };

  console.log(durationTour);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ButtonFeature content="FILTER" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 rounded-none w-[351px] py-4 px-4">
        <DropdownMenuLabel className="flex justify-between items-center px-0">
          <span className="text-[#03387D] text-size-lg font-semibold">
            FILTER:
          </span>
          <span className="text-five cursor-pointer hover:underline">
            CLEAR
          </span>
        </DropdownMenuLabel>
        <div>
          <span className="text-secondary font-bold">Budget:</span>
          <div className="lg:mt-10 mt-6">
            <SliderCom />
          </div>
        </div>
        <div className="str-line" />
        <div>
          <span className="text-secondary font-bold">Duration</span>
          <div className="mt-4">
            <RadioGroup
              defaultValue="option-one"
              onValueChange={(v) => setDurationTour(v)}
            >
              {durations.map((v, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem
                    value={v.time}
                    id={v.time}
                    className="rounded-sm"
                  />
                  <Label htmlFor={v.time}>{v.title}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="str-line" />
        <div>
          <span className="text-secondary font-bold">Type of Tours</span>
          <div className="flex flex-col">
            {types.map((v, index) => (
              <div className="mt-4 flex items-center gap-2" key={index}>
                <Checkbox
                  id={v}
                  defaultChecked={type.includes(v)}
                  value={v}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setTypeTour((prev) => [...prev, v]);
                    } else {
                      setTypeTour((prev) =>
                        prev.filter((value) => value !== v)
                      );
                    }
                  }}
                />
                <label
                  htmlFor={v}
                  className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {v}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4">
          <Button
            variant={"primary"}
            size={"third"}
            className="h-[48px]"
            onClick={handleFilter}
          >
            Apply Filter
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterTour;
