import { getAllTour, getFiltersTour } from "@/api/tourRequest";
import PdMain from "@/components/PdMain";
import { useAppDispatch } from "@/redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AttractiveSection from "./AttractiveSection";
import ContactSection from "./ContactSection";
import DiscoverSection from "./DiscoverSection";
import HeroSection from "./HeroSection";
import IntroduceSection from "./IntroduceSection";
import TraditionalSection from "./Traditional";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFiltersTour());
        await dispatch(getAllTour({}));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useTranslation();
  z;
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
