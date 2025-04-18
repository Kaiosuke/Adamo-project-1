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

import { getFiltersHotel } from "@/api/hotelRequest";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuUsers } from "react-icons/lu";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { StringParam, useQueryParams } from "use-query-params";
import { toast } from "sonner";
const SearchHotel = ({ isHome = false }: { isHome?: boolean }) => {
  const { t } = useTranslation("search");
  const [date, setDate] = useState<Date>(new Date());

  const { data } = useQuery({
    queryKey: ["filtersHotel"],
    queryFn: () => getFiltersHotel(),
  });

  const [query, setQuery] = useQueryParams({
    location: StringParam,
    guest: StringParam,
  });

  const [location, setLocation] = useState<string>(() => {
    const v = query.location;
    return v ? v : "All";
  });

  const [guest, setGuest] = useState<string>(() => {
    const v = query.guest;
    return v ? v : "All";
  });

  const navigate = useNavigate();

  const handleFilter = () => {
    setQuery({ location: location, guest: guest });
    toast.success("Filter successfully");
    navigate(`/hotels`);
  };

  return (
    <div
      className={`bg-third/80 ${
        isHome
          ? "lg:h-[503px] w-[100%]"
          : "flex-[0_0_30%] lg:w-auto w-full 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8 "
      }`}
    >
      <div className="z-10 relative h-full">
        <div className="lg:px-8 lg:py-8 px-6 py-6 h-full">
          <div className="text-size-2xl">{t("hotel.title")}</div>
          <div className="flex flex-col justify-between h-full">
            <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
              <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
                <FaMapMarkerAlt className="text-primary text-size-lg group-hover:text-third" />
                <Select
                  defaultValue={location}
                  onValueChange={(v) => {
                    setLocation(v);
                  }}
                >
                  <SelectTrigger className="w-full group-hover:text-third ">
                    <SelectValue placeholder={t("tour.location")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {data &&
                        data.locations.map((v, index) => (
                          <SelectItem value={v} key={index}>
                            {v.length < 2 ? "All" : v}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="group bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center hover:bg-primary">
                <DatePickerSingle date={date} setDate={setDate} />
              </div>
              <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
                <LuUsers className="text-primary text-size-lg group-hover:text-third" />
                <Select defaultValue={guest} onValueChange={(v) => setGuest(v)}>
                  <SelectTrigger className="w-full group-hover:text-third">
                    <SelectValue placeholder={t("tour.guest")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {data &&
                        data.guests.map((v, index) => (
                          <SelectItem value={v} key={index}>
                            {v}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className={` ${isHome ? "mb-8 " : "mt-4"}`}>
              <Link to={`/hotels?location=${location}&guest=${guest}`}>
                <Button
                  variant="primary"
                  className="flex justify-center gap-2 text-third h-[64px]"
                  onClick={handleFilter}
                >
                  <CiSearch className="text-size-lg " />
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
