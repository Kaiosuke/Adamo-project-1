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
import LoadingPage from "@/components/LoadingList/LoadingPage";

const Reviews = ({ totalScore }: { totalScore: IReviewHotel[] }) => {
  const { id } = useParams();

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

  const { data, isFetching } = useQuery({
    queryKey: ["reviewHotel", { id, _page }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
        _page: _page,
        _limit: 3,
      }),
    enabled: id !== undefined,
  });

  useEffect(() => {
    setCurrentPage(0);
    setPageCount(Math.ceil(Number(totalScore?.length) / ITEMS_PER_PAGE));
  }, [totalScore]);

  const handleAverageRate = useMemo((): number => {
    console.log("handleAverageRate");
    if (totalScore) {
      const score = totalScore?.reduce((acc, cur) => {
        return (acc += cur.rate);
      }, 0);

      return Math.floor(score / totalScore.length);
    }
    return NaN;
  }, [totalScore]);

  return (
    <>
      {id && (
        <ReviewForm
          id={id}
          setCurrentPage={setCurrentPage}
          setPageCount={setPageCount}
          totalData={Number(totalScore?.length)}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          onAverageRate={() => handleAverageRate}
          setQuery={setQuery}
        />
      )}

      <div className="flex flex-col gap-4">
        {isFetching ? (
          <div>
            <LoadingPage />
          </div>
        ) : (
          <>
            {data &&
              data.map((review: IReviewHotel) => (
                <ReviewHotel key={review.id} review={review} />
              ))}
          </>
        )}
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
