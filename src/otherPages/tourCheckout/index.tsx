import { getTourById } from "@/api/tourRequest";
import { BillTourCheckOut } from "@/components/bills/BillTour";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import { useAppDispatch } from "@/redux";
import { bookingSelector } from "@/redux/selectors/bookingSelector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FormInfoUser from "./FormInfoUser";

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

  return (
    <>
      <PdSub />
      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">Booking Submission</h1>
        <div className="w-[70%]">
          <div className="str-line " />
        </div>
        <div className="flex 2xl:gap-20 gap-10 flex-wrap lg:flex-row md:flex-col-reverse">
          <div className="lg:flex-[1_1_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
            <div>
              <h2 className="text-size-2xl">Traveler Details</h2>
              <p className="text-four">
                Information we need to confirm your tour or activity
              </p>
            </div>
            <FormInfoUser />
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
            <BillTourCheckOut />
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default TourCheckOut;
