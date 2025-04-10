import Hotel from "@/components/Hotel";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { useSelector } from "react-redux";

const RelatedHotels = () => {
  const { hotels } = useSelector(hotelSelector);

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">Recommend For you</h2>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mt-4">
        {hotels.map((hotel, index) => (
          <div key={index}>
            <Hotel hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedHotels;
