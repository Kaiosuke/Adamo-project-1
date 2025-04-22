import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import SearchHotel from "@/components/searchList/SearchHotel";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import HotelSection from "./HotelSection";

import { NumberParam, useQueryParams, withDefault } from "use-query-params";

const Hotel = () => {
  const { t } = useTranslation("hotel");

  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(0);

  const [query, setQuery] = useQueryParams({
    _page: withDefault(NumberParam, 1),
  });

  const _page = Number(query._page) || 1;

  const totalData = Number(localStorage.getItem("totalHotel"));

  const pageCount = Math.ceil(totalData / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(_page - 1);
  }, [_page]);

  const current = useMemo(() => "Hotel Details", []);
  const links = useMemo(
    () => [
      { href: "/", title: "Home" },
      { href: "/hotels", title: "Hotels" },
    ],
    []
  );

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
      <PaginationWithShow
        currentPage={currentPage}
        items={ITEMS_PER_PAGE}
        pageCount={pageCount}
        totalData={totalData}
        onPageChange={(e) => {
          setCurrentPage(e);
          setQuery({ _page: e + 1 });
        }}
      />

      <PdMain />
    </>
  );
};

export default Hotel;
