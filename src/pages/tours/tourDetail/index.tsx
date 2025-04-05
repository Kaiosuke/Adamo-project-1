import BreadcrumbCom from "@/components/Breadcrumb";
import PdSub from "@/components/PdSub";
import { Button } from "@/components/ui/button";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import TourDetailMain from "./TourDetailMain";

const TourDetail = () => {
  return (
    <>
      <PdSub />
      <PdSub />
      <BreadcrumbCom
        current="Detail Tour"
        links={[
          { href: "/", title: "Home" },
          { href: "tours", title: "Detail tour" },
        ]}
      />
      <PdSub />

      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">
          Discover interesting things in the romantic <br /> coastal city of
          Vungtau
        </h1>
        <div className="lg:mt-6 mg-4 flex items-center gap-2">
          <CiLocationOn className="text-primary text-size-xl" />
          <span className="text-four text-size-base">
            Vungtau City, Baria-Vungtau
          </span>
        </div>

        <div className="lg:mt-6 mt-4 flex items-center gap-6">
          <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
            <MdOutlineStar />
            4.5
          </div>
          <span className="text-four">128 Reviews</span>
        </div>
        <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6  flex-wrap">
          <div className="flex-[0_0_auto] max-w-[635px] w-full h-[680px] md:pr-0 pr-4">
            <TourDetailMain />
          </div>

          <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit">
            <div className="w-full h-full bg-seven">
              <div className="p-8 flex gap-2 items-end">
                <span className="text-four">from</span>
                <span className="text-secondary text-size-xl font-semibold">
                  $234.00
                </span>
              </div>
              <div className="h-[1px] w-full bg-four opacity-50" />
              <div className="p-8 flex flex-col gap-6">
                <div className="flex gap-10">
                  <div>
                    <div className="text-four">Duration:</div>
                    <div className="font-semibold text-secondary">
                      3 days - 2 nights
                    </div>
                  </div>
                  <div>
                    <div className="text-four">Tour type:</div>
                    <div className="font-semibold text-secondary">
                      Sun - Beach
                    </div>
                  </div>
                </div>
                <div className="w-full h-[64px] bg-third py-2 pl-4 flex items-center gap-4">
                  <FaRegCalendarAlt className="text-primary" />
                  <div className="text-secondary">
                    <span>25/02/2001</span> - <span>28/02/2001</span>
                  </div>
                </div>
                <div className="w-full h-[64px] bg-third py-2 pl-4 flex items-center gap-4">
                  <FaRegCalendarAlt className="text-primary" />
                  <div className="text-secondary">2 Adults - 1 Children</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Total</span>
                  <span className="text-secondary font-semibold">$450.00</span>
                </div>
                <div className="mt-4">
                  <Button variant={"primary"}>Book now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PdSub />
    </>
  );
};

export default TourDetail;
