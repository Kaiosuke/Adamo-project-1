import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectHotel = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder="Theme"
          className="placeholder:text-primary text-primary"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price">Price</SelectItem>
        <SelectItem value="rate">Rate</SelectItem>
        <SelectItem value="review">Reviews</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectHotel;
