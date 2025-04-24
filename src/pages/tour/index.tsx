import BreadcrumbCom from "@/components/Breadcrumb";

import AttractiveTourSection from "./AttractiveTourSection";

import TourImg from "@/assets/images/hero-tour.png";
import HeroSectionCom from "@/components/HeroSectionCom";

import PdMain from "@/components/padding/PdMain";
import PdSub from "@/components/padding/PdSub";
import SearchTour from "@/components/searchList/tour/SearchTour";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Tour = () => {
  const { t } = useTranslation("tour");

  const links = useMemo(() => [{ title: "Home", href: "/" }], []);
  const current = useMemo(() => "Tour", []);

  return (
    <>
      <HeroSectionCom
        image={TourImg}
        Tour={<SearchTour />}
        title={t("banner.title")}
        des={t("banner.description")}
      />
      <PdSub />
      <BreadcrumbCom links={links} current={current} />
      <PdSub />
      <AttractiveTourSection />

      <PdMain />
    </>
  );
};

export default Tour;
