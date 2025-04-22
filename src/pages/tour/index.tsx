import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import TourImg from "@/assets/images/hero-tour.png";
import HeroSectionCom from "@/components/HeroSectionCom";
import SearchTour from "@/components/searchList/SearchTour";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Tour = () => {
  const { t } = useTranslation("tour");

  const links = useMemo(() => [{ title: "home", href: "/" }], []);
  const current = useMemo(() => "tour", []);

  console.log("Tour");

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
