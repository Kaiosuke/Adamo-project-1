import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";
import { toast } from "sonner";
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

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

const SortHotel = () => {
  const [query, setQuery] = useQueryParams({
    _page: withDefault(NumberParam, 1),
    _sort: StringParam,
    _order: StringParam,
  });

  const defaultValue = query._sort + "-" + query._order;

  const handleSelect = (v: string) => {
    const [sort, order] = v.split("-");
    setQuery({ _sort: sort, _order: order, _page: 1 });
    toast.success("Sort successfully", {
      style: {
        backgroundColor: "#4caf50",
        color: "#ffffff",
      },
    });
  };

  console.log("hotel-sort");

  return (
    <>
      <Select
        defaultValue={
          !defaultValue.includes("undefined") ? defaultValue : sortList[0].value
        }
        onValueChange={handleSelect}
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
    </>
  );
};

export default memo(SortHotel);
