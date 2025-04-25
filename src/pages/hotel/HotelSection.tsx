import Hotel from "@/components/Hotel";

import { instanceLocal } from "@/api/instance";
import SkeletonData from "@/components/LoadingList/SkeletonData";
import { IHotel } from "@/interfaces/hotel";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Trans } from "react-i18next";
import FilterHotel from "./FilterHotel";
import SortHotel from "./SortHotel";

interface Props {
  isLoading: boolean;
  data?: IHotel[];
}

const HotelSection = ({ isLoading, data }: Props) => {
  const { data: totalReview } = useQuery({
    queryKey: ["totalReview"],
    queryFn: () => {
      return (async () => {
        const res = instanceLocal.get("reviewsHotel");
        return (await res).data;
      })();
    },
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
            data.map((hotel) => (
              <Hotel key={hotel.id} hotel={hotel} totalReview={totalReview} />
            ))
          ) : (
            <div className="mt-4 text-size-2xl">Not found Hotel</div>
          )}
        </div>
      </section>
    </>
  );
};

export default memo(HotelSection);
