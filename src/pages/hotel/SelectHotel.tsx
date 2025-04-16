import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleSetParam } from "@/helper";
import useQueryString from "@/hooks/useQueryString";

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
  const queryString = useQueryString();

  const _sort = queryString._sort || "price";
  const _order = queryString._order || "asc";
  const defaultValue = _sort + "-" + _order;

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(v) => {
        handleSetParam("_sort", v.split("-")[0]);
        handleSetParam("_order", v.split("-")[1]);
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
