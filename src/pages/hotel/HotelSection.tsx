import Hotel from "@/components/Hotel";
import SkeletonHotel from "@/components/SkeletonHotel";
import { IHotel } from "@/interfaces/hotel";
import { Trans } from "react-i18next";
import FilterHotel from "./FilterHotel";
import SelectHotel from "./SelectHotel";

interface Props {
  data: IHotel[];
  isLoading: boolean;
}

const HotelSection = ({ data, isLoading }: Props) => {
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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: data.length }).map((_, index) => (
              <SkeletonHotel key={index} />
            ))
          : data.map((hotel) => <Hotel key={hotel.id} hotel={hotel} />)}
      </div>
    </section>
  );
};

export default HotelSection;
