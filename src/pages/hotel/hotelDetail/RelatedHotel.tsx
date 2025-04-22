import { getHotels } from "@/api/hotelRequest";
import Hotel from "@/components/Hotel";
import { IHotel } from "@/interfaces/hotel";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Fragment } from "react/jsx-runtime";

const RelatedHotels = () => {
  const { data } = useQuery({
    queryKey: ["hotels"],
    queryFn: () => getHotels({ _page: 1, _limit: 3 }),
  });

  console.log("RelatedHotels");

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">Recommend For you</h2>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mt-4">
        {data?.map((hotel: IHotel) => (
          <Fragment key={hotel.id}>
            <Hotel hotel={hotel} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(RelatedHotels);
