import BreadcrumbCom from "@/components/Breadcrumb";
import PdSub from "@/components/PdSub";
import { BillTourDetail } from "@/components/bills/BillTour";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";
import RelatedTours from "./RelatedTours";
import TourDetailMain from "./TourDetailMain";
import TourDetailTabs from "./TourDetailTabs";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux";
import { getTourById } from "@/api/tourRequest";
import { useSelector } from "react-redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import LoadingPage from "@/components/LoadingPage";
import PdMain from "@/components/PdMain";

const TourDetail = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { tour } = useSelector(tourSelector);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          await dispatch(getTourById(Number(id))).unwrap();
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  if (!tour) {
    return <LoadingPage />;
  }

  return (
    <>
      {tour && (
        <>
          <PdSub />
          <PdSub />
          <BreadcrumbCom
            current="Detail Tour"
            links={[
              { href: "/", title: "Home" },
              { href: "/tours", title: "Tours" },
            ]}
          />
          <PdSub />

          <section className="main-container">
            <h1 className="text-size-4xl text-secondary">{tour?.title}</h1>
            <div className="lg:mt-6 mg-4 flex items-center gap-2">
              <CiLocationOn className="text-primary text-size-xl" />
              <span className="text-four text-size-base">{tour?.location}</span>
            </div>

            <div className="lg:mt-6 mt-4 flex items-center gap-6">
              <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
                <MdOutlineStar />
                {tour?.score}
              </div>
              <span className="text-four">
                {tour?.reviews.length}{" "}
                {tour?.reviews && tour?.reviews.length > 0
                  ? `Reviews`
                  : `Review`}{" "}
              </span>
            </div>
            <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6 flex-wrap lg:flex-row flex-col-reverse">
              <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
                <div className="h-[680px] ">
                  <TourDetailMain />
                </div>
                <TourDetailTabs />
              </div>
              <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit">
                <BillTourDetail />
              </div>
            </div>
          </section>
          <PdSub />
          <section className="main-container">
            <RelatedTours />
          </section>
        </>
      )}
      <PdMain />
    </>
  );
};

export default TourDetail;
