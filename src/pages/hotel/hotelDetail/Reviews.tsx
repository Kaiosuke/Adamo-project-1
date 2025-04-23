import { getReviewsHotel } from "@/api/reviewRequest";
import PdSub from "@/components/Padding/PdSub";
import ReviewHotel from "@/components/reviews/ReviewHotel";
import { IReviewHotel } from "@/interfaces/review";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";

import { NumberParam, useQueryParams } from "use-query-params";
import ReviewForm from "./ReviewForm";
import ReviewPagination from "./ReviewPagination";

const Reviews = () => {
  const { id } = useParams();

  const [totalData, setTotalData] = useState(0);

  const ITEMS_PER_PAGE = 3;

  const [query, setQuery] = useQueryParams({
    _page: NumberParam,
  });

  const _page = query._page ? query._page : 1;

  const [pageCount, setPageCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPageHotel");
    return saved ? Number(saved) : 0;
  });

  const { data } = useQuery({
    queryKey: ["reviewHotel", { id, _page }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
        _page: _page,
      }),
    enabled: id !== undefined,
  });

  useEffect(() => {
    const total = localStorage.getItem("totalReviewHotel") || "0";
    setTotalData(Number(total));
  }, []);

  useEffect(() => {
    const total = localStorage.getItem("totalReviewHotel") || "0";
    setCurrentPage(0);
    setPageCount(Math.ceil(Number(total) / ITEMS_PER_PAGE));
    setTotalData(Number(total));
  }, []);

  const handleAverageRate = useMemo((): number => {
    console.log("handleAverageRate");
    if (data) {
      const score = data?.reduce((acc, cur) => {
        return (acc += cur.rate);
      }, 0);
      return Math.floor(score / data?.length);
    }
    return NaN;
  }, [data]);

  return (
    <>
      {id && (
        <ReviewForm
          id={id}
          setCurrentPage={setCurrentPage}
          setPageCount={setPageCount}
          setTotalData={setTotalData}
          totalData={totalData}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          onAverageRate={() => handleAverageRate}
          setQuery={setQuery}
        />
      )}

      <div className="flex flex-col gap-4">
        {data &&
          data.map((review: IReviewHotel) => (
            <ReviewHotel key={review.id} review={review} />
          ))}
      </div>
      <PdSub />
      <ReviewPagination
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
        setQuery={setQuery}
      />
    </>
  );
};

export default Reviews;
