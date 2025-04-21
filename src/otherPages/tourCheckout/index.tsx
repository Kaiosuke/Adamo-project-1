import { getTourById } from "@/api/tourRequest";
import { BillTourCheckOut } from "@/components/bills/BillTour";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import { useAppDispatch } from "@/redux";
import { bookingSelector } from "@/redux/selectors/bookingSelector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FormInfoUser from "./FormInfoUser";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { tourSelector } from "@/redux/selectors/tourSelector";

const TourCheckOut = () => {
  const { booking } = useSelector(bookingSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (booking?.tourId) {
      (async () => {
        try {
          await dispatch(getTourById(booking?.tourId)).unwrap();
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const { t } = useTranslation("checkout");

  const { tour } = useSelector(tourSelector);

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
        <h1 className="text-size-4xl text-secondary mt-4">{t("tour.title")}</h1>
        <div className="w-[70%]">
          <div className="str-line " />
        </div>
        <div className="flex 2xl:gap-20 gap-10 flex-wrap lg:flex-row md:flex-col-reverse">
          <div className="lg:flex-[1_1_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
            <div>
              <h2 className="text-size-2xl">{t("tour.travel")}</h2>
              <p className="text-four">{t("tour.description")}</p>
            </div>
            {booking && <FormInfoUser booking={booking} />}
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
            {tour && booking && (
              <BillTourCheckOut booking={booking} tour={tour} />
            )}
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default TourCheckOut;
