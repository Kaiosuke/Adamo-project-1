import { BillHotelDetail } from "@/components/bills/BillHotel";
import BreadcrumbCom from "@/components/Breadcrumb";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import SwiperCom from "@/components/SwiperCom";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router";
import HotelDetailTabs from "./HotelDetailTabs";
import RelatedHotels from "./RelatedHotel";

import { getHotelById } from "@/api/hotelRequest";
import { useQuery } from "@tanstack/react-query";
import { getReviewsHotel } from "@/api/reviewRequest";

const HotelDetail = () => {
  const { id } = useParams();
  const [totalData, setTotalData] = useState();

  useQuery({
    queryKey: ["reviewHotel", { id }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
      }),
    enabled: id !== undefined,
  });

  const { data } = useQuery({
    queryKey: ["hotelDetail", id],
    queryFn: () => getHotelById(id as string),
    enabled: id !== undefined,
  });

  useEffect(() => {
    const totalData = JSON.parse(
      localStorage.getItem("totalReviewHotel") || "0"
    );
    setTotalData(totalData);
  }, []);

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
            {totalData} {totalData && totalData > 0 ? `Reviews` : `Review`}
          </span>
        </div>
        <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6 flex-wrap xl:flex-row flex-col-reverse">
          <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
            <div className="h-[680px]">
              <SwiperCom images={data?.images} />
            </div>
            {data && <HotelDetailTabs data={data} />}
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
