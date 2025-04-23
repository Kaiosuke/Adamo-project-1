import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PdMain from "@/components/Padding/PdMain";
import PdSub from "@/components/Padding/PdSub";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import HotelSection from "./HotelSection";

import HotelPagination from "./HotelPagination";
import SearchHotel from "@/components/searchList/hotel/SearchHotel";

const Hotel = () => {
  const { t } = useTranslation("hotel");

  const links = useMemo(
    () => [
      { href: "/", title: "Home" },
      { href: "/hotels", title: "Hotels" },
    ],
    []
  );
  const current = useMemo(() => "Hotel Details", []);

  return (
    <>
      <HeroSectionCom
        image={HotelImg}
        Tour={<SearchHotel />}
        title={t("banner.title")}
        des={t("banner.description")}
      />
      <PdSub />
      <BreadcrumbCom links={links} current={current} />
      <PdSub />
      <HotelSection />
      <HotelPagination />
      <PdMain />
    </>
  );
};

export default Hotel;
