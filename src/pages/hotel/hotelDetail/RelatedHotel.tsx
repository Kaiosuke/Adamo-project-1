import { getHotels } from "@/api/hotelRequest";
import Hotel from "@/components/Hotel";
import { IHotel } from "@/interfaces/hotel";
import { useQuery } from "@tanstack/react-query";

const RelatedHotels = () => {
  const { data } = useQuery({
    queryKey: ["hotels"],
    queryFn: () => getHotels({ _page: 1, _limit: 3 }),
  });

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">Recommend For you</h2>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mt-4">
        {data?.map((hotel: IHotel) => (
          <div key={hotel.id}>
            <Hotel hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedHotels;
