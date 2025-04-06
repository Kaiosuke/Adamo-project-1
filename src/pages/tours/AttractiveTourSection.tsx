import ButtonFeature from "@/components/ButtonFeature";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import TourList from "./TourList";

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

const AttractiveTourSection = () => {
  const tourList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];

  return (
    <section className="main-container">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">
          Attractive tour and interesting <br /> experiences
        </h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ButtonFeature content="Feature" />
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
                      <Label htmlFor="option-one text-secondary">
                        0-3 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="option-two"
                        id="option-two"
                        className="rounded-sm"
                      />
                      <Label htmlFor="option-two text-secondary">
                        3-5 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="option-three"
                        id="option-three"
                        className="rounded-sm"
                      />
                      <Label htmlFor="option-three text-secondary">
                        5-7 days
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="option-four"
                        id="option-four"
                        className="rounded-sm"
                      />
                      <Label htmlFor="option-four text-secondary">
                        over 1 week
                      </Label>
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
                <Button
                  variant={"primary"}
                  size={"third"}
                  className="h-[48px] "
                >
                  Apply Filter
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-16 md:pt-10 pt-6">
        {tourList.map((tour, index) => (
          <div key={index}>
            <TourList tour={tour} />
          </div>
        ))}
      </div>

      <div className="lg:pt-16 md:pt-10 pt-6 flex items-center justify-end">
        <div className="flex md:w-2/3 justify-between w-full sm:flex-row flex-col items-center">
          <div className="flex items-center gap-4 text-four">
            <span>Showing</span>
            <span>1/2</span>
          </div>
          <div className="flex gap-4 sm:pt-0 pt-4">
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              <GoArrowLeft />
            </div>
            <div className="w-10 h-10 bg-secondary flex items-center justify-center text-third font-semibold cursor-pointer">
              1
            </div>
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              2
            </div>
            <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractiveTourSection;
