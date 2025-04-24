import { Button } from "@/components/ui/button";

import DatePickerSingle from "@/components/DatePickerSingle";
import GuestCom from "@/components/GuestCom";
import LocationCom from "@/components/LocationCom";
import TypeCom from "@/components/TypeCom";
import { tourSelector } from "@/redux/selectors/tourSelector";
import {
  filterByGuest,
  filterByLocation,
  filterByType,
} from "@/redux/slices/toursSlice";
import { addDays } from "date-fns";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";
import { StringParam, useQueryParams } from "use-query-params";
import LoadingSearch from "@/components/LoadingList/LoadingSearch";

const SearchTour = ({ isHome = false }: { isHome?: boolean }) => {
  const { locations, guests, types, filter, loading } =
    useSelector(tourSelector);

  const { location, type, guest } = filter;
  const { t } = useTranslation("search");

  const dispatch = useDispatch();

  const [query, setQuery] = useQueryParams({
    from: StringParam,
  });

  const from = query.from ? new Date(query.from) : addDays(new Date(), 1);

  const [date, setDate] = useState<Date>(from);

  const [locationFilter, setLocationFilter] = useState(location);
  const [typeFilter, setTypeFilter] = useState(type);

  const handleFilterGuest = useCallback(
    (value: string) => {
      dispatch(filterByGuest(value));
    },
    [dispatch]
  );

  const navigate = useNavigate();

  const handleFilter = useDebouncedCallback(() => {
    dispatch(filterByLocation(locationFilter));
    dispatch(filterByType(typeFilter));
    toast.success("Filter successfully", {
      style: {
        backgroundColor: "#4caf50",
        color: "#ffffff",
      },
    });
    navigate(`/tours?from=${from.toDateString()}`);
  }, 300);

  return (
    <div
      className={`h-full bg-third/80 w-full ${
        !isHome
          ? "flex-[0_0_30%] 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8"
          : ""
      }`}
    >
      {loading ? (
        <div className="lg:h-[503px] w-[100%]">
          <LoadingSearch />
        </div>
      ) : (
        <>
          <div className="lg:px-8 lg:py-8 w-full p-4">
            <p className="text-size-2xl">{t("tour.description")}</p>
            <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
              <LocationCom
                data={locations}
                location={location}
                setLocation={setLocationFilter}
                t={t}
              />

              <div className="group bg-third lg:h-[64px] md:h-[48px] h-[36px] flex items-center hover:bg-primary">
                <DatePickerSingle
                  date={date}
                  setDate={setDate}
                  setQuery={setQuery}
                />
              </div>

              <TypeCom
                data={types}
                setTypeFilter={setTypeFilter}
                t={t}
                type={type}
              />

              <GuestCom
                data={guests}
                guest={guest}
                setGuest={handleFilterGuest}
                t={t}
              />
            </div>
            <div className="lg:pt-6 pt-4">
              <Button
                variant="primary"
                className="flex justify-center gap-2 text-third"
                onClick={handleFilter}
              >
                <CiSearch className="text-size-lg" />
                {t("tour.search")}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchTour;
