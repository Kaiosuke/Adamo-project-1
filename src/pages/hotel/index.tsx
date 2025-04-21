import { getHotels } from "@/api/hotelRequest";
import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import SearchHotel from "@/components/searchList/SearchHotel";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HotelSection from "./HotelSection";

import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

const Hotel = () => {
  const { t } = useTranslation("hotel");

  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(0);

  const [query, setQuery] = useQueryParams({
    _page: withDefault(NumberParam, 1),
    _sort: StringParam,
    _order: StringParam,
    location: StringParam,
    score: StringParam,
    prices: StringParam,
    star: StringParam,
    guest: StringParam,
  });

  const _page = Number(query._page) || 1;
  const _sort = query._sort || "price";
  const _order = query._order || "asc";
  const score = query.score || "";
  const guest = query.guest || "";
  const prices = query.prices || "0,300";
  const location = query.location || "All";
  const star = query.star || "";

  const { data, isLoading } = useQuery({
    queryKey: [
      "hotels",
      { _page, _sort, _order, location, score, prices, star, guest },
    ],
    queryFn: () =>
      getHotels({ _page, _sort, _order, location, score, prices, star }),
  });

  const totalData = Number(localStorage.getItem("totalHotel"));

  const pageCount = Math.ceil(totalData / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(_page - 1);
  }, [_page]);

  return (
    <>
      <HeroSectionCom
        image={HotelImg}
        Tour={<SearchHotel />}
        title={t("banner.title")}
        des={t("banner.description")}
      />
      <PdSub />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="hotels" />
      <PdSub />

      <HotelSection data={data || []} isLoading={isLoading} />
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
