import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import DatePickerSingle from "../DatePickerSingle";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { filterByGuest, filterByLocation } from "@/redux/slices/hotelsSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuUsers } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const SearchHotel = ({ isHome = false }: { isHome?: boolean }) => {
  const { t } = useTranslation("search");

  const { locations, filter, guests } = useSelector(hotelSelector);

  const { location } = filter;

  const [locationFilter, setLocationFilter] = useState(location);

  const dispatch = useDispatch();

  const handleFilterGuest = (v: string) => {
    dispatch(filterByGuest(v));
  };

  const handleFilter = () => {
    dispatch(filterByLocation(locationFilter));
  };

  return (
    <div
      className={`bg-third/80 lg:block hidden ${
        isHome
          ? "h-[503px] w-[100%]"
          : "flex-[0_0_30%] 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8 "
      }`}
    >
      <div className="z-10 relative">
        <div className="lg:px-8 lg:py-8 px-6 py-6">
          <p className="text-size-2xl">{t("hotel.title")}</p>
          <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
            <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
              <FaMapMarkerAlt className="text-primary text-size-lg group-hover:text-third" />
              <Select
                defaultValue={location}
                onValueChange={(value) => setLocationFilter(value)}
              >
                <SelectTrigger className="w-full group-hover:text-third ">
                  <SelectValue placeholder={t("tour.location")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {locations.length &&
                      locations.map((v, index) => (
                        <SelectItem value={v} key={index}>
                          {v.length < 2 ? "All" : v}
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
              <LuUsers className="text-primary text-size-lg group-hover:text-third" />
              <Select onValueChange={(value) => handleFilterGuest(value)}>
                <SelectTrigger className="w-full group-hover:text-third">
                  <SelectValue placeholder={t("tour.guest")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {guests.length &&
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
          <div className="lg:pt-6 pt-4 mt-auto h-full">
            <Button
              variant="primary"
              className="flex justify-center gap-2 text-third h-[64px]"
              onClick={handleFilter}
            >
              <CiSearch className="text-size-lg " />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
