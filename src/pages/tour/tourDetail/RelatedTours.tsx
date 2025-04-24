import Tour from "@/components/Tour";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";

const RelatedTours = () => {
  const { tours } = useSelector(tourSelector);

  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">Related tours</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-10 lg:mt-10 mt-8">
        {tours.map((tour) => (
          <Fragment key={tour.id}>
            <Tour tour={tour} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RelatedTours;
