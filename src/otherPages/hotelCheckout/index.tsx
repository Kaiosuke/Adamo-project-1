import { getHotelById } from "@/api/hotelRequest";

import BillHotelCheckOut from "@/components/bills/hotel/BillHotelCheckout";

import { bookingSelector } from "@/redux/selectors/bookingSelector";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import FormInfoUser from "./FormInfoUser";
import { useState } from "react";
import PdSub from "@/components/paddingList/PbSub";
import PdMain from "@/components/paddingList/PbMain";
import { Skeleton } from "@/components/ui/skeleton";

const HotelCheckOut = () => {
  const { t } = useTranslation("checkout");

  const { bookingHotel } = useSelector(bookingSelector);

  const id = bookingHotel?.hotelId;

  const { data, isLoading } = useQuery({
    queryKey: ["hotelDetail", { id: id }],
    queryFn: () => getHotelById(Number(id)),
    enabled: id !== undefined,
  });

  const [discount, setDiscount] = useState<number>();

  return (
    <>
      <PdSub />
      <section className="main-container">
        <Link
          to="/"
          className="text-size-2xl text-primary flex items-center gap-2"
        >
          <FaArrowLeftLong />
          {t("tour.home")}
        </Link>
        <h1 className="text-size-4xl text-secondary t-4">{t("tour.title")}</h1>
        <div className="w-[70%]">
          <div className="str-line " />
        </div>
        <div className="flex 2xl:gap-20 gap-10 flex-wrap lg:flex-row md:flex-col-reverse">
          <div className="lg:flex-[1_1_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
            <div>
              <h2 className="text-size-2xl">{t("tour.travel")}</h2>
              <p className="text-four">{t("tour.description")}</p>
            </div>
            {isLoading || !bookingHotel || !data ? (
              <Skeleton className="h-screen bg-five" />
            ) : (
              <FormInfoUser booking={bookingHotel} discount={discount} />
            )}
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full h-fit ">
            {isLoading || !data || !bookingHotel ? (
              <Skeleton className="h-[524px] bg-five" />
            ) : (
              <BillHotelCheckOut
                data={data}
                bookingHotel={bookingHotel}
                discount={discount}
                setDiscount={setDiscount}
              />
            )}
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default HotelCheckOut;
