import Hotel from "@/components/Hotel";
import LoadingItem from "@/components/LoadingList/LoadingItem";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";
import FilterHotel from "./FilterHotel";
import SelectHotel from "./SelectHotel";

const HotelSection = () => {
  const { hotels, loading } = useSelector(hotelSelector);

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <section className="main-container">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">
          <Trans ns="hotel" i18nKey={"hotels.hotels"} />
        </h2>
        <div className="flex items-center gap-2">
          <SelectHotel />
          <FilterHotel />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-16 md:pt-10 pt-6">
        {hotels.length ? (
          hotels.map((hotel, index) => (
            <div key={index}>
              <Hotel hotel={hotel} />
            </div>
          ))
        ) : (
          <div className="text-size-2xl text-secondary">Not found Hotel</div>
        )}
      </div>
    </section>
  );
};

export default HotelSection;
