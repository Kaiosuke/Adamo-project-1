import { getAllHotel, getFiltersHotel } from "@/api/hotelRequest";
import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import SearchHotel from "@/components/searchList/SearchHotel";
import { useAppDispatch } from "@/redux";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HotelSection from "./HotelSection";
import { useTranslation } from "react-i18next";

const Hotel = () => {
  const { filter } = useSelector(hotelSelector);
  const { location, price, score, sort, star } = filter;

  const { t } = useTranslation("hotel");

  const ITEMS_PER_PAGE = 4;

  const [pageCount, setPageCount] = useState(0);
  const totalData = JSON.parse(localStorage.getItem("totalHotel") || "0");

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPageHotel");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFiltersHotel());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllHotel({ location, price, score, star, sort }));
        setPageCount(Math.ceil(totalData / ITEMS_PER_PAGE));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, location, price, score, star, sort, currentPage, totalData]);

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
      <HotelSection />
      <PaginationWithShow
        currentPage={currentPage}
        items={ITEMS_PER_PAGE}
        pageCount={pageCount}
        totalData={totalData}
        onPageChange={(e) => {
          setCurrentPage(e);
          localStorage.setItem("currentPageHotel", e.toLocaleString());
        }}
      />
      <PdMain />
    </>
  );
};

export default Hotel;
