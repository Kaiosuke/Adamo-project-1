import ButtonFeature from "@/components/ButtonFeature";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";

import LoadingBtn from "@/components/LoadingList/LoadingBtn";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";
import { toast } from "sonner";

const starList = ["1", "2", "3", "4", "5"];
const scoreList = [
  {
    title: "Wonderful : 9.5+",
    score: "9.5",
  },
  {
    title: "Very Good : 9+",
    score: "9",
  },
  {
    title: "Good : 8+",
    score: "8",
  },
  {
    title: "Pleasant : 7+",
    score: "7",
  },
];

const FilterHotel = () => {
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useQueryParams({
    score: StringParam,
    _page: NumberParam,
    prices: StringParam,
    star: StringParam,
  });

  const [score, setScore] = useState(() => {
    const v = query.score;
    return v ? v : "";
  });

  const [stars, setStars] = useState<string[]>(() => {
    const v = query.star;
    return v ? v?.split(",") : [];
  });

  const [prices, setPrices] = useState(() => {
    const v = query.prices;
    return v ? [Number(v.split(",")[0]), Number(v.split(",")[1])] : [0, 300];
  });

  const handleFilter = useDebouncedCallback(() => {
    setLoading(true);
    setQuery({ score });
    setQuery({ prices: `${prices[0] + "," + prices[1]}` });
    setQuery({ star: stars.toString() });
    setQuery({ _page: 1 });
    setLoading(false);
    toast.success("Filter successfully");
  }, 1000);

  const handleResetFilter = useDebouncedCallback(() => {
    setQuery({ score: "" });
    setQuery({ prices: `0,2000` });
    setQuery({ star: "" });
    toast.success("Reset successfully");
  }, 1000);

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
          <span
            className="text-five cursor-pointer hover:underline"
            onClick={handleResetFilter}
          >
            CLEAR
          </span>
        </DropdownMenuLabel>
        <div>
          <span className="text-secondary font-bold">Budget:</span>
          <div className="lg:mt-10 mt-6">
            <div className="relative">
              <Slider
                value={prices}
                max={300}
                step={1}
                onValueChange={(e) => setPrices(e)}
              />
              <div className="absolute -top-[30px]">${prices[0]}</div>
              <div className="absolute -top-[30px] right-[10px]">
                ${prices[1]}
              </div>
            </div>
          </div>
        </div>
        <div className="str-line" />
        <div>
          <span className="text-secondary font-bold">Hotel star</span>
          <div className="mt-4">
            <RadioGroup defaultValue="option-one">
              {starList.map((v, index) => (
                <div className="mt-4 flex items-center gap-2" key={index}>
                  <Checkbox
                    id={v}
                    checked={stars.includes(v)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setStars((prev) => [...prev, v].sort());
                      } else {
                        setStars((prev) => prev.filter((value) => value !== v));
                      }
                    }}
                  />
                  <label
                    htmlFor={v}
                    className="flex gap-2 text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {Array.from({ length: Number(v) }).map((_, index) => (
                      <FaStar className="text-nine" key={index} />
                    ))}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="str-line" />
        <div>
          <div>
            <span className="text-secondary font-bold">Review Score</span>
            <div className="mt-4">
              <RadioGroup value={score} onValueChange={(v) => setScore(v)}>
                {scoreList.map((v, index) => (
                  <div className="mt-4 flex items-center gap-2" key={index}>
                    <RadioGroupItem
                      value={v.score}
                      id={v.title}
                      className="rounded-sm"
                    />

                    <Label
                      htmlFor={v.title}
                      className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {v.title}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="py-4" onClick={handleFilter}>
          <Button variant={"primary"} size={"third"} className="h-[48px] ">
            {loading ? (
              <>
                <LoadingBtn />
              </>
            ) : (
              "Apply Filter"
            )}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterHotel;
