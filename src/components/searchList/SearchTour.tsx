import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  filterByGuest,
  filterByLocation,
  filterByType,
} from "@/redux/slices/toursSlice";
import { CiFlag1, CiSearch } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import DatePickerSingle from "../DatePickerSingle";
import { tourSelector } from "@/redux/selectors/tourSelector";

const SearchTour = () => {
  const { locations, guests, types } = useSelector(tourSelector);

  const dispatch = useDispatch();
  const handleFilterLocation = (value: string) => {
    dispatch(filterByLocation(value));
  };

  const handleFilterType = (value: string) => {
    const arr = [];
    arr.push(value);
    dispatch(filterByType(arr));
  };

  const handleFilterGuest = (value: string) => {
    dispatch(filterByGuest(value));
  };

  return (
    <>
      <div className="lg:px-8 lg:py-8 px-6 py-6">
        <p className="text-size-2xl">Discover beautiful Vietnam</p>
        <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
          <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
            <FaMapMarkerAlt className="text-primary text-size-lg group-hover:text-third" />
            <Select onValueChange={(value) => handleFilterLocation(value)}>
              <SelectTrigger className="w-full group-hover:text-third ">
                <SelectValue
                  placeholder="Location"
                  className="placeholder:text-red-400"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {locations &&
                    locations.map((v, index) => (
                      <SelectItem value={v} key={index}>
                        {v}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="group bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center hover:bg-primary">
            <DatePickerSingle />
          </div>

          <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
            <CiFlag1 className="text-primary text-size-lg group-hover:text-third" />
            <Select onValueChange={(value) => handleFilterType(value)}>
              <SelectTrigger className="w-full group-hover:text-third ">
                <SelectValue
                  placeholder="Type of Tour"
                  className="placeholder:text-red-400"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {types &&
                    types.map((v, index) => (
                      <SelectItem value={v} key={index}>
                        {v}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
            <LuUsers className="text-primary text-size-lg group-hover:text-third" />
            <Select onValueChange={(value) => handleFilterGuest(value)}>
              <SelectTrigger className="w-full group-hover:text-third ">
                <SelectValue
                  placeholder="Number of guests"
                  className="placeholder:text-red-400"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {guests &&
                    guests.map((v, index) => (
                      <SelectItem value={v} key={index}>
                        {v}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="lg:pt-6 pt-4">
          <Button
            variant="primary"
            className="flex justify-center gap-2 text-third"
          >
            <CiSearch className="text-size-lg" />
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchTour;
