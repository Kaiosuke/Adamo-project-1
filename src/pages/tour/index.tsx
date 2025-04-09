import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import { getAllTour } from "@/api/tourRequest";
import TourImg from "@/assets/images/hero-tour.png";
import HeroSectionCom from "@/components/HeroSectionCom";
import SearchTour from "@/components/searchList/SearchTour";
import { useAppDispatch } from "@/redux";
import { useEffect } from "react";

const Tour = () => {
  const disPatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await disPatch(getAllTour());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <HeroSectionCom
        image={TourImg}
        Tour={<SearchTour />}
        title="Search hundreds of tours and more"
        des="Attractive tour and interesting experiences"
      />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="tours" />
      <PdSub />
      <AttractiveTourSection />
      <PdMain />
    </>
  );
};

export default Tour;
