import ButtonFeature from "@/components/ButtonFeature";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SliderCom from "@/components/sliders/SliderCom";
import { memo, useCallback, useState } from "react";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";
import { NumberParam, StringParam, useQueryParams } from "use-query-params";
import HotelBtn from "./HotelBtn";
import HotelScore from "./HotelScore";
import HotelStar from "./HotelStar";

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
    setQuery({
      score,
      prices: `${prices[0]},${prices[1]}`,
      star: stars.toString(),
      _page: 1,
    });
    setLoading(false);
    toast.success("Filter successfully", {
      style: {
        backgroundColor: "#4caf50",
        color: "#ffffff",
      },
    });
  }, 300);

  const handleResetFilter = useDebouncedCallback(() => {
    setQuery({ score: "" });
    setQuery({ prices: `0,300` });
    setQuery({ star: "" });
    toast.success("Reset successfully", {
      style: {
        backgroundColor: "#4caf50",
        color: "#ffffff",
      },
    });
  }, 300);

  const handleChangeValueSlide = useCallback((v: number[]) => {
    setPrices(v);
  }, []);

  const handleValueChangeScore = useCallback((v: string) => {
    setScore(v);
  }, []);

  const handleCheckChange = useCallback(
    ({ checked, v }: { checked: boolean; v: string }) => {
      if (checked) {
        setStars((prev) => [...prev, v].sort());
      } else {
        setStars((prev) => prev.filter((value) => value !== v));
      }
    },
    []
  );

  console.log("hotel-filter");

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
            <SliderCom
              onValueChange={handleChangeValueSlide}
              prices={prices}
              max={300}
            />
          </div>
        </div>
        <div className="str-line" />
        <HotelStar stars={stars} onCheckChange={handleCheckChange} />
        <div className="str-line" />
        <HotelScore score={score} onValueChange={handleValueChangeScore} />
        <HotelBtn loading={loading} onClick={handleFilter} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(FilterHotel);
