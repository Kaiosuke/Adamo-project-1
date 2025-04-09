import PaginationWithShow from "../../components/paginations/PaginationWithShow";
import SelectHotel from "./SelectHotel";
import FilterHotel from "./FilterHotel";
import Hotel from "@/components/Hotel";

const HotelSection = () => {
  const hotelList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];

  return (
    <section className="main-container">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">Hotels</h2>
        <div className="flex items-center gap-2">
          <SelectHotel />
          <FilterHotel />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-16 md:pt-10 pt-6">
        {hotelList.map((hotel, index) => (
          <div key={index}>
            <Hotel hotel={hotel} />
          </div>
        ))}
      </div>

      <PaginationWithShow />
    </section>
  );
};

export default HotelSection;
