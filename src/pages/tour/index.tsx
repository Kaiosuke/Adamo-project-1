import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import { getAllTour, getFilters } from "@/api/tourRequest";
import TourImg from "@/assets/images/hero-tour.png";
import HeroSectionCom from "@/components/HeroSectionCom";
import PaginationWithShow from "@/components/paginations/PaginationWithShow";
import SearchTour from "@/components/searchList/SearchTour";
import { useAppDispatch } from "@/redux";
import { tourSelector } from "@/redux/selectors/tourSelector";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Tour = () => {
  const dispatch = useAppDispatch();
  const { filter, loading } = useSelector(tourSelector);
  const { location, type, duration, price } = filter;

  const { t } = useTranslation("tour");

  const totalData = JSON.parse(localStorage.getItem("totalTour") || "0");

  const [pageCount, setPageCount] = useState(0);
  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPage");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFilters());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(
          getAllTour({
            location,
            types: type,
            durations: duration,
            start: ITEMS_PER_PAGE * currentPage,
            price: price,
          })
        );

        setPageCount(Math.ceil(totalData / ITEMS_PER_PAGE));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, location, type, duration, price, currentPage, totalData]);

  return (
    <>
      <HeroSectionCom
        image={TourImg}
        Tour={<SearchTour />}
        title={t("banner.title")}
        des={t("banner.description")}
      />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="tours" />
      <PdSub />
      <AttractiveTourSection />

      <PaginationWithShow
        currentPage={currentPage}
        items={ITEMS_PER_PAGE}
        pageCount={pageCount}
        totalData={totalData}
        onPageChange={(e) => {
          setCurrentPage(e);
          localStorage.setItem("currentPage", e.toLocaleString());
        }}
      />
      <PdMain />
    </>
  );
};

export default Tour;
