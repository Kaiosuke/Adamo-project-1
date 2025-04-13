import PdMain from "@/components/PdMain";
import { useAppDispatch } from "@/redux";
import { useEffect } from "react";
import AttractiveSection from "./AttractiveSection";
import ContactSection from "./ContactSection";
import DiscoverSection from "./DiscoverSection";
import HeroSection from "./HeroSection";
import IntroduceSection from "./IntroduceSection";
import TraditionalSection from "./Traditional";
import { getLocationHotels } from "@/api/hotelRequest";
import { getAllTour, getFilters } from "@/api/tourRequest";
import LoadingPage from "@/components/LoadingPage";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useAppDispatch();

  const { loading, error } = useSelector(tourSelector);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFilters());
        await dispatch(getLocationHotels());
        await dispatch(getAllTour({}));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <HeroSection />
      <PdMain />
      <IntroduceSection />
      <PdMain />
      <PdMain />
      <PdMain />
      <DiscoverSection />
      <PdMain />
      <AttractiveSection />
      <PdMain />
      <TraditionalSection />
      <PdMain />
      <ContactSection />
      <PdMain />
    </>
  );
};

export default Home;
