import Hotel from "@/components/Hotel";
import LoadingItem from "@/components/LoadingList/LoadingItem";
import { IHotel } from "@/interfaces/hotel";
import { Trans } from "react-i18next";
import FilterHotel from "./FilterHotel";
import SelectHotel from "./SelectHotel";

interface Props {
  data: IHotel[];
  isLoading: boolean;
}

const HotelSection = ({ data, isLoading }: Props) => {
  if (isLoading) {
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
        {data ? (
          data.map((hotel) => (
            <div key={hotel.id}>
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
