import { BillHotelCheckOut } from "@/components/bills/BillHotel";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import FormInfoUser from "./FormInfoUser";

const HotelCheckOut = () => {
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
            <BillHotelCheckOut />
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default HotelCheckOut;
