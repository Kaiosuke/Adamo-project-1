import { getAllTour, getFiltersTour, getTours } from "@/api/tourRequest";
import PdMain from "@/components/Padding/PdMain";
import { useAppDispatch } from "@/redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AttractiveSection from "./AttractiveSection";
import ContactSection from "./ContactSection";
import DiscoverSection from "./DiscoverSection";
import HeroSection from "./HeroSection";
import IntroduceSection from "./IntroduceSection";
import TraditionalSection from "./Traditional";
import { useQuery } from "@tanstack/react-query";

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

  const { data } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getTours({}),
  });

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
      {data && <AttractiveSection data={data} />}
      <PdMain />
      {data && <TraditionalSection data={data} />}
      <PdMain />
      <ContactSection />
      <PdMain />
    </>
  );
};

export default Home;
