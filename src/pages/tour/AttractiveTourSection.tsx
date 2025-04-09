import Tour from "./Tour";

import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import FilterTour from "./FilterTour";
import { useSelector } from "react-redux";
import { tourSelector } from "@/redux/selectors/tourSelector";

const AttractiveTourSection = () => {
  const { loading, tours } = useSelector(tourSelector);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(tours);

  return (
    <section className="main-container">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">
          Attractive tour and interesting <br /> experiences
        </h2>
        <FilterTour />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:pt-16 md:pt-10 pt-6">
        {tours.length &&
          tours.map((tour, index) => (
            <div key={index}>
              <Tour tour={tour} />
            </div>
          ))}
      </div>

      <PaginationWithShow />
    </section>
  );
};

export default AttractiveTourSection;
