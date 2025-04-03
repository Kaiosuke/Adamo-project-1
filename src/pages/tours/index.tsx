import BreadcrumbCom from "@/components/Breadcrumb";
import PdMain from "@/components/PdMain";
import HeroSection from "./HeroSection";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

const index = () => {
  return (
    <>
      <HeroSection />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="tours" />
      <PdSub />
      <AttractiveTourSection />
      <PdMain />
    </>
  );
};

export default index;
