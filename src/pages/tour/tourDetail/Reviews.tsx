import Pagination from "@/components/paginations/Pagination";
import ReviewTour from "@/components/reviews/ReviewTour";
import { reviewSelector } from "@/redux/selectors/reviewSelector";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { getAllReviewTour } from "@/api/reviewRequest";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Fragment } from "react/jsx-runtime";
import TourReviewForm from "./TourReviewForm";

interface Props {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (value: number) => void;
}

const Reviews = ({ currentPage, pageCount, setCurrentPage }: Props) => {
  const { tour } = useSelector(tourSelector);
  const { reviewsTour } = useSelector(reviewSelector);

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["reviewsTour", { id }],
    queryFn: () => getAllReviewTour(id as string),
    enabled: id !== undefined,
  });

  const handleFilterRate = (rate: number): number => {
    if (data?.length) {
      return data.filter((v) => v.rate === rate).length;
    }
    return 0;
  };

  const handleCalculatePercent = (v: number): number => {
    if (data?.length) {
      return Math.floor((v / data.length) * 100);
    }
    return 0;
  };

  return (
    <>
      {tour && (
        <div>
          <div className="bg-seven h-[291px] rounded-lg lg:p-8 md:p-6 p-4">
            <div className="flex h-full md:flex-row flex-col">
              <div className="flex-[0_0_35%]">
                <div className="flex justify-center md:items-center h-full flex-col gap-2">
                  <div className="text-secondary text-size-5xl">4/5</div>
                  <div className="text-secondary flex items-center gap-2">
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-four" />
                  </div>
                  <div className="text-four font-semibold">
                    Based on{" "}
                    <span className="text-secondary">
                      {reviewsTour.length}{" "}
                      {reviewsTour.length > 0 ? "reviews" : "review"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-[2px] h-full bg-five mx-6 md:block hidden" />
              <div className="flex-[0_0_auto] w-full h-[1px] my-2 bg-five md:hidden block" />

              <div className="flex-[0_0_64%]">
                <div className="flex flex-col h-full justify-evenly">
                  <div className="flex items-center gap-2">
                    <span>5</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div
                        className={`bg-nine rounded-l-lg`}
                        style={{
                          flex: `0 0 ${handleCalculatePercent(
                            handleFilterRate(5)
                          )}%`,
                        }}
                      />

                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>
                      {handleFilterRate(5) > 0
                        ? `${handleFilterRate(5)} Reviews`
                        : "0 Review"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>4</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div
                        className={`bg-nine rounded-l-lg`}
                        style={{
                          flex: `0 0 ${handleCalculatePercent(
                            handleFilterRate(4)
                          )}%`,
                        }}
                      />

                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>
                      {handleFilterRate(4) > 0
                        ? `${handleFilterRate(4)} Reviews`
                        : "0 Review"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>3</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div
                        className={`bg-nine rounded-l-lg`}
                        style={{
                          flex: `0 0 ${handleCalculatePercent(
                            handleFilterRate(3)
                          )}%`,
                        }}
                      />

                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>
                      {handleFilterRate(3) > 0
                        ? `${handleFilterRate(3)} Reviews`
                        : "0 Review"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>2</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div
                        className={`bg-nine rounded-l-lg`}
                        style={{
                          flex: `0 0 ${handleCalculatePercent(
                            handleFilterRate(2)
                          )}%`,
                        }}
                      />

                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>
                      {handleFilterRate(2) > 0
                        ? `${handleFilterRate(2)} Reviews`
                        : "0 Review"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>1</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div
                        className={`bg-nine rounded-l-lg`}
                        style={{
                          flex: `0 0 ${handleCalculatePercent(
                            handleFilterRate(1)
                          )}%`,
                        }}
                      />

                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>
                      {handleFilterRate(1) > 0
                        ? `${handleFilterRate(1)} Reviews`
                        : "0 Review"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="str-line-2" />
          {id && <TourReviewForm id={id} />}

          <div className="str-line-2" />
          <div>
            <div className="flex flex-col gap-4">
              {reviewsTour.map((review, index) => (
                <Fragment key={index}>
                  <ReviewTour review={review} />
                </Fragment>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={(e) => {
                setCurrentPage(e);
                localStorage.setItem("currentReviewTour", e.toLocaleString());
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
