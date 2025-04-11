import ButtonFeature from "@/components/ButtonFeature";
import LoadedImage from "@/components/LoadedImage";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const DiscoverSection = () => {
  const { tours } = useSelector(tourSelector);

  const newTours = tours.slice(2, 6);

  return (
    <section className="main-container">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          Discover fascinating <br /> destinations
        </h3>
        <div className="ml-auto">
          <ButtonFeature content="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
        {newTours.map((tour) => (
          <div className="w-full" key={tour.id}>
            <LoadedImage thumbnail={tour.thumbnail} alt={tour.title} />
            <div className="pt-4">
              <h4 className="text-size-xl text-secondary">
                <Link to="#!">Sapa, Lao Cai</Link>
              </h4>
              <span className="text-four text-base">24 experiences</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
