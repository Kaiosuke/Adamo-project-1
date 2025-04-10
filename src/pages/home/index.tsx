import PdMain from "@/components/PdMain";
import HeroSection from "./HeroSection";
import IntroduceSection from "./IntroduceSection";
import DiscoverSection from "./DiscoverSection";
import AttractiveSection from "./AttractiveSection";
import TraditionalSection from "./Traditional";
import ContactSection from "./ContactSection";
import { useAppDispatch } from "@/redux";
import { useEffect } from "react";
import { getLocationTours, getTypeTours } from "@/api/tourRequest";
import { getLocationHotels } from "@/api/hotelRequest";
import { useSelector } from "react-redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import LoadingPage from "@/components/LoadingPage";

const Home = () => {
  const dispatch = useAppDispatch();

  const { loading } = useSelector(tourSelector);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getLocationTours());
        await dispatch(getTypeTours());
        await dispatch(getLocationHotels());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) {
    return <LoadingPage />;
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
