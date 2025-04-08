import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import TourImg from "@/assets/images/hero-tour.png";
import SearchTour from "@/components/searchList/SearchTour";
import HeroSectionCom from "@/components/HeroSectionCom";

const Tour = () => {
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
