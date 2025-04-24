import BreadcrumbCom from "@/components/Breadcrumb";
import PdMain from "@/components/Padding/PdMain";
import PdSub from "@/components/Padding/PdSub";

import { useEffect, useMemo, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router";
import HotelDetailTabs from "./HotelDetailTabs";
import RelatedHotels from "./RelatedHotel";

import { getHotelById } from "@/api/hotelRequest";
import { getReviewsHotel } from "@/api/reviewRequest";
import BillHotelDetail from "@/components/bills/hotel/BillHotelDetail";
import SwiperCom from "@/components/swiper/SwiperCom";
import { useQuery } from "@tanstack/react-query";
import LoadingSlideDetail from "./LoadingSlideDetail";
import { Skeleton } from "@/components/ui/skeleton";

const HotelDetail = () => {
  const { id } = useParams();

  const { data: totalData } = useQuery({
    queryKey: ["reviewHotel", { id }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
      }),
    enabled: id !== undefined,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["hotelDetail", { id: id }],
    queryFn: () => getHotelById(Number(id)),
    enabled: id !== undefined,
  });

  const links = useMemo(
    () => [
      { href: "/", title: "Home" },
      { href: "/hotels", title: "Hotels" },
    ],
    []
  );

  const current = useMemo(() => "Detail Tour", []);

  return (
    <>
      <PdSub />
      <PdSub />
      <BreadcrumbCom current={current} links={links} />
      <PdSub />
      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">{data?.title}</h1>
        <div className="lg:mt-6 mg-4 flex items-center gap-2">
          <CiLocationOn className="text-primary text-size-xl" />
          <span className="text-four text-size-base">{data?.location}</span>
        </div>

        <div className="lg:mt-6 mt-4 flex items-center gap-6">
          <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
            <MdOutlineStar />
            {data?.score}
          </div>
          <span className="text-four">
            {!totalData ? (
              <div className="flex items-center gap-4 text-base">
                Reviews: Loading...
              </div>
            ) : (
              <>
                {totalData.length > 0
                  ? `Reviews(${totalData.length})`
                  : `Review(${totalData.length})`}
              </>
            )}
          </span>
        </div>
        <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6 flex-wrap xl:flex-row flex-col-reverse">
          <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
            <div className="h-[680px]">
              {isLoading ? (
                <LoadingSlideDetail />
              ) : (
                <SwiperCom images={data?.images} />
              )}
            </div>

            <div className="">
              {isLoading || !data ? (
                <Skeleton className="bg-five h-screen mt-10" />
              ) : (
                <HotelDetailTabs data={data} />
              )}
            </div>
          </div>
          <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit xl:sticky top-[20px]">
            <BillHotelDetail hotel={data} />
          </div>
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
