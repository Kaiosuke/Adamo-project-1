import Hotel from "@/components/Hotel";
import LoadingPage from "@/components/LoadingList/LoadingPage";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { useSelector } from "react-redux";
import FilterHotel from "./FilterHotel";
import SelectHotel from "./SelectHotel";
import { Trans } from "react-i18next";

const HotelSection = () => {
  const { hotels, loading } = useSelector(hotelSelector);

  if (loading) {
    return <LoadingPage />;
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
        {hotels.map((hotel, index) => (
          <div key={index}>
            <Hotel hotel={hotel} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelSection;
