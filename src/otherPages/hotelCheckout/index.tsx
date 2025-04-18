import { BillHotelCheckOut } from "@/components/bills/BillHotel";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import FormInfoUser from "./FormInfoUser";
import { useTranslation } from "react-i18next";

const HotelCheckOut = () => {
  const { t } = useTranslation("checkout");

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
            <FormInfoUser />
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
            <BillHotelCheckOut />
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default HotelCheckOut;
