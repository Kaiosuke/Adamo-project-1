import { getHotels } from "@/api/hotelRequest";
import Hotel from "@/components/Hotel";

import SkeletonData from "@/components/LoadingList/SkeletonData";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Trans } from "react-i18next";
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";
import FilterHotel from "./FilterHotel";
import SortHotel from "./SortHotel";

const HotelSection = () => {
  const [query] = useQueryParams({
    _page: withDefault(NumberParam, 1),
    _sort: StringParam,
    _order: StringParam,
    location: StringParam,
    score: StringParam,
    prices: StringParam,
    star: StringParam,
    guest: StringParam,
  });

  const _page = Number(query._page) || 1;
  const _sort = query._sort || "price";
  const _order = query._order || "asc";
  const score = query.score || "";
  const guest = query.guest || "";
  const prices = query.prices || "0,300";
  const location = query.location || "All";
  const star = query.star || "";

  const { data, isLoading } = useQuery({
    queryKey: [
      "hotels",
      { _page, _sort, _order, location, score, prices, star, guest },
    ],
    queryFn: () =>
      getHotels({ _page, _sort, _order, location, score, prices, star }),
  });

  return (
    <>
      <section className="main-container animate-fade-down">
        <div className="flex justify-between ">
          <h2 className="text-size-4xl text-secondary">
            <Trans ns="hotel" i18nKey={"hotels.hotels"} />
          </h2>
          <div className="flex items-center gap-2">
            <SortHotel />
            <FilterHotel />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonData key={index} />
            ))
          ) : data && data.length ? (
            data.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)
          ) : (
            <div className="mt-4 text-size-2xl">Not found Hotel</div>
          )}
        </div>
      </section>
    </>
  );
};

export default memo(HotelSection);
