import ButtonFeature from "@/components/ButtonFeature";
import Tour from "@/components/Tour";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";

const TraditionalSection = () => {
  const { tours } = useSelector(tourSelector);

  const newTours = tours.slice(7, 10);

  return (
    <section className="main-container">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          Experience the traditional <br /> cultural beauties of Vietnam
        </h3>
        <div className="ml-auto">
          <ButtonFeature content="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
        {newTours.map((tour) => (
          <div key={tour.id}>
            <Tour tour={tour} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TraditionalSection;
