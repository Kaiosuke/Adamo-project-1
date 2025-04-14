import { getFiltersHotel } from "@/api/hotelRequest";
import { getAllTour, getFiltersTour } from "@/api/tourRequest";
import LoadingPage from "@/components/LoadingList/LoadingPage";
import PdMain from "@/components/PdMain";
import { useAppDispatch } from "@/redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AttractiveSection from "./AttractiveSection";
import ContactSection from "./ContactSection";
import DiscoverSection from "./DiscoverSection";
import HeroSection from "./HeroSection";
import IntroduceSection from "./IntroduceSection";
import TraditionalSection from "./Traditional";

const Home = () => {
  const dispatch = useAppDispatch();

  const { loading, error } = useSelector(tourSelector);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFiltersTour());
        await dispatch(getFiltersHotel());
        await dispatch(getAllTour({}));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { t } = useTranslation();

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
