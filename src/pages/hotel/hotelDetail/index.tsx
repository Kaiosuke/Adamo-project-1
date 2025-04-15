import BreadcrumbCom from "@/components/Breadcrumb";
import PdSub from "@/components/PdSub";
// import { Button } from "@/components/ui/button";
import { getHotelById } from "@/api/hotelRequest";
import { getReviewTourHotel } from "@/api/reviewRequest";
import { BillHotelDetail } from "@/components/bills/BillHotel";
import PdMain from "@/components/PdMain";
import SwiperCom from "@/components/SwiperCom";
import { useAppDispatch } from "@/redux";
import { hotelSelector } from "@/redux/selectors/hotelSelector";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import HotelDetailTabs from "./HotelDetailTabs";
import RelatedHotels from "./RelatedHotel";

const HotelDetail = () => {
  const { id } = useParams();
  const { hotel } = useSelector(hotelSelector);

  const dispatch = useAppDispatch();

  const totalData = JSON.parse(localStorage.getItem("totalReviewHotel") || "0");

  const ITEMS_PER_PAGE = 3;

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem("currentPageHotel");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          await dispatch(getHotelById(Number(id)));
          await dispatch(
            getReviewTourHotel({
              hotelId: Number(id),
              start: currentPage * ITEMS_PER_PAGE,
            })
          ).unwrap();
          setPageCount(Math.ceil(totalData / ITEMS_PER_PAGE));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [currentPage, totalData]);

  return (
    <>
      <PdSub />
      <PdSub />
      <BreadcrumbCom
        current="Detail Tour"
        links={[
          { href: "/", title: "Home" },
          { href: "/hotels", title: "Hotels" },
        ]}
      />
      <PdSub />

      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">{hotel?.title}</h1>
        <div className="lg:mt-6 mg-4 flex items-center gap-2">
          <CiLocationOn className="text-primary text-size-xl" />
          <span className="text-four text-size-base">{hotel?.location}</span>
        </div>

        <div className="lg:mt-6 mt-4 flex items-center gap-6">
          <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
            <MdOutlineStar />
            {hotel?.score}
          </div>
          <span className="text-four">
            {totalData} {totalData > 0 ? `Reviews` : `Review`}
          </span>
        </div>
        <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6 flex-wrap lg:flex-row flex-col-reverse">
          <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
            <div className="h-[680px]">
              <SwiperCom />
            </div>
            <HotelDetailTabs
              currentPage={currentPage}
              pageCount={pageCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <BillHotelDetail />
        </div>
      </section>
      <PdMain />
      <section className="main-container">
        <RelatedHotels />
      </section>
      <PdMain />
    </>
  );
};

export default HotelDetail;
