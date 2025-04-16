import { getHotels } from "@/api/hotelRequest";
import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import SearchHotel from "@/components/searchList/SearchHotel";
import { handleSetParam } from "@/helper";
import useQueryString from "@/hooks/useQueryString";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import HotelSection from "./HotelSection";
import useQueryParams from "@/hooks/useQueryParams";

const Hotel = () => {
  const { t } = useTranslation("hotel");

  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPageHotel");
    return saved ? Number(saved) : 0;
  });

  // const queryString: { _page?: string; _sort?: string; _order?: string } =
  //   useQueryString();
  const { params, setQueryParam } = useQueryParams();

  const _page = Number(params._page) | 1;
  const _sort = params._sort || "price";
  const _order = params._order || "asc";

  const { data, isLoading } = useQuery({
    queryKey: ["hotels", { _page, _sort, _order }],
    queryFn: () => getHotels({ _page, _sort, _order }),
  });

  const totalData = Number(data?.headers["x-total-count"]);
  const pageCount = Math.ceil(totalData / ITEMS_PER_PAGE);

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
      <HotelSection data={data?.data} isLoading={isLoading} />
      <PaginationWithShow
        currentPage={currentPage}
        items={ITEMS_PER_PAGE}
        pageCount={pageCount}
        totalData={totalData}
        onPageChange={(e) => {
          setCurrentPage(e);
          setQueryParam("_page", (e + 1).toString());
          localStorage.setItem("currentPageHotel", e.toLocaleString());
        }}
      />
      <PdMain />
    </>
  );
};

export default Hotel;
