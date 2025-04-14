import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { filterBySort } from "@/redux/slices/hotelsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const sortList = [
  {
    title: "Price: Low to High",
    value: "price-asc",
  },
  {
    title: "Price: High to Low",
    value: "price-desc",
  },
  {
    title: "Rate: Low to High",
    value: "score-asc",
  },
  {
    title: "Rate: High to Low",
    value: "score-desc",
  },
];

const SelectHotel = () => {
  const { filter } = useSelector(hotelSelector);

  const { sort } = filter;

  const dispatch = useDispatch();

  return (
    <Select
      defaultValue={sort}
      onValueChange={(v) => {
        dispatch(filterBySort(v));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder="Theme"
          className="placeholder:text-primary text-primary"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectContent>
          {sortList.map((v, index) => (
            <SelectItem value={v.value} key={index}>
              {v.title}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectContent>
    </Select>
  );
};

export default SelectHotel;
