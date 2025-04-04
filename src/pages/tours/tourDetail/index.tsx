import BreadcrumbCom from "@/components/Breadcrumb";
import PdSub from "@/components/PdSub";
import { CiLocationOn } from "react-icons/ci";
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
        <div className="flex gap-10 lg:mt-8 mt-6">
          <div className="flex-[0_0_60%]">
            <TourDetailMain />
          </div>

          <div className="flex-[0_0_40%]">hello</div>
        </div>
      </section>
      <PdSub />
    </>
  );
};

export default TourDetail;
