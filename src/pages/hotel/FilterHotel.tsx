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
import { FaStar } from "react-icons/fa6";

const FilterHotel = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ButtonFeature content="Filter" />
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
          <span className="text-secondary font-bold">Hotel star</span>
          <div className="mt-4">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="rounded-sm"
                />
                <Label htmlFor="option-one">
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="rounded-sm"
                />
                <Label htmlFor="option-two">
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-three"
                  id="option-three"
                  className="rounded-sm"
                />
                <Label htmlFor="option-three">
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-four"
                  id="option-four"
                  className="rounded-sm"
                />
                <Label htmlFor="option-four">
                  <FaStar className="text-nine" />
                  <FaStar className="text-nine" />
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-four"
                  id="option-four"
                  className="rounded-sm"
                />
                <Label htmlFor="option-four">
                  <FaStar className="text-nine" />
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="str-line" />
        <div>
          <span className="text-secondary font-bold">Review Score</span>
          <div className="flex flex-col">
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Wonderful : 9.5+
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="2" />
              <label
                htmlFor="2"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Very Good : 9+
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="3" />
              <label
                htmlFor="3"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Good : 8+
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="4" />
              <label
                htmlFor="4"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Pleasant : 7+
              </label>
            </div>
          </div>
        </div>
        <div className="py-4">
          <Button variant={"primary"} size={"third"} className="h-[48px] ">
            Apply Filter
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterHotel;
