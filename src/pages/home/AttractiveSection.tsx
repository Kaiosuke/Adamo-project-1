import ButtonFeature from "@/components/ButtonFeature";
import Tour from "@/components/Tour";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

const AttractiveSection = () => {
  const { tours } = useSelector(tourSelector);

  const newTours = tours.slice(1, 4);

  return (
    <section className="main-container">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          <Trans i18nKey={"attractive.title"} ns="home" />
        </h3>
        <div className="ml-auto">
          <Link to="/tours">
            <ButtonFeature content="View All" />
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
        {newTours.map((tour) => (
          <Fragment key={tour.id}>
            <Tour tour={tour} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AttractiveSection;
