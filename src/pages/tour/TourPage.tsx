import { getAllTour, getFiltersTour } from "@/api/tourRequest";
import { useAppDispatch } from "@/redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Tour from "@/components/Tour";
import SkeletonData from "@/components/LoadingList/SkeletonData";
import PaginationWithShow from "@/components/paginationList/PaginationWithShow";

const TourPage = () => {
  const { tours, loading } = useSelector(tourSelector);

  const dispatch = useAppDispatch();
  const { filter } = useSelector(tourSelector);
  const { location, type, duration, price } = filter;

  const [pageCount, setPageCount] = useState(0);
  const ITEMS_PER_PAGE = 6;

  const totalData = JSON.parse(localStorage.getItem("totalTour") || "0");

  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFiltersTour());
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
        const saved = localStorage.getItem("currentPageTour");
        saved ? setCurrentPage(Number(saved)) : setCurrentPage(0);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, location, type, duration, price, currentPage, totalData]);

  const handlePageChange = useCallback((e: number) => {
    setCurrentPage(e);
    localStorage.setItem("currentPageTour", e.toLocaleString());
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:pt-16 md:pt-10 pt-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonData key={index} />
          ))
        ) : tours.length ? (
          tours.map((tour) => <Tour key={tour.id} tour={tour} />)
        ) : (
          <div className="mt-4 text-size-2xl">Not found Tour</div>
        )}
      </div>
      <PaginationWithShow
        currentPage={currentPage}
        items={ITEMS_PER_PAGE}
        pageCount={pageCount}
        totalData={totalData}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default TourPage;
