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

const FilterTour = () => {
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
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="rounded-sm"
                />
                <Label htmlFor="option-one text-secondary">0-3 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="rounded-sm"
                />
                <Label htmlFor="option-two text-secondary">3-5 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-three"
                  id="option-three"
                  className="rounded-sm"
                />
                <Label htmlFor="option-three text-secondary">5-7 days</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-four"
                  id="option-four"
                  className="rounded-sm"
                />
                <Label htmlFor="option-four text-secondary">over 1 week</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="str-line" />
        <div>
          <span className="text-secondary font-bold">Type of Tours</span>
          <div className="flex flex-col">
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                City-Break
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="2" />
              <label
                htmlFor="2"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Wildlife
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="3" />
              <label
                htmlFor="3"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cultural
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="4" />
              <label
                htmlFor="4"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ecotourism
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox id="4" />
              <label
                htmlFor="4"
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sun and Beaches
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

export default FilterTour;
