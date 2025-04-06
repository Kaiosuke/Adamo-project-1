import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import Hero from "@/assets/images/hero.png";
import SearchTour from "@/components/SearchTour";
import HeroSectionCom from "@/components/HeroSectionCom";

const index = () => {
  return (
    <>
      <HeroSectionCom image={Hero} Tour={<SearchTour />} />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="tours" />
      <PdSub />
      <AttractiveTourSection />
      <PdMain />
    </>
  );
};

export default index;
