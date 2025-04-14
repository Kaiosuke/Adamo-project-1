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
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const SearchTour = ({ isHome = false }: { isHome?: boolean }) => {
  const { locations, guests, types, filter } = useSelector(tourSelector);

  const { location, type } = filter;

  const dispatch = useDispatch();

  const [locationFilter, setLocationFilter] = useState(location);
  const [typeFilter, setTypeFilter] = useState<string[]>(type);

  const handleFilterGuest = (value: string) => {
    dispatch(filterByGuest(value));
  };

  const handleFilter = () => {
    dispatch(filterByLocation(locationFilter));
    dispatch(filterByType(typeFilter));
  };

  const { t } = useTranslation("search");

  return (
    <div
      className={`w-full bg-third/80 ${
        !isHome
          ? "flex-[0_0_30%] 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8"
          : null
      }`}
    >
      <div className="lg:px-8 lg:py-8 px-6 py-6">
        <p className="text-size-2xl">{t("tour.description")}</p>
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
            <CiFlag1 className="text-primary text-size-lg group-hover:text-third" />
            <Select
              defaultValue={
                type.length < 1 ? type.toString() : type[0].toString()
              }
              onValueChange={(value) =>
                setTypeFilter(() => {
                  const arr = [];
                  arr.push(value);
                  return arr;
                })
              }
            >
              <SelectTrigger className="w-full group-hover:text-third ">
                <SelectValue placeholder={t("tour.type")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {types.length &&
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
            <Select
              onValueChange={(value) => handleFilterGuest(value)}
              value={filter.guest}
            >
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
        <div className="lg:pt-6 pt-4">
          <Link to="/tours">
            <Button
              variant="primary"
              className="flex justify-center gap-2 text-third"
              onClick={handleFilter}
            >
              <CiSearch className="text-size-lg" />
              {t("tour.search")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchTour;
