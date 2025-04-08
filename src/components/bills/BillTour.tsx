import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const BillTour = () => {
  return (
    <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
      <div className=" bg-seven">
        <div className="lg:p-8 p-4 flex flex-col gap-6">
          <p className="text-secondary font-semibold">
            Discover interesting things in the romantic coastal city of Vungtau
          </p>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-primary text-xl" />
            <span className="text-four text-sm">
              Vungtau City, Baria-Vungtau
            </span>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-four">Duration:</div>
              <div className="font-semibold text-secondary">
                3 days - 2 nights
              </div>
            </div>
            <div>
              <div className="text-four">Tour type:</div>
              <div className="font-semibold text-secondary">Sun - Beach</div>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <FaCalendarAlt className="text-primary text-xl" />
            <div className="text-secondary">
              <span>25/02/2021 - </span>
              <span> 28/02/2021</span>
            </div>
          </div>
          <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
            <GoPeople className="text-primary text-xl" />
            <div className="text-secondary">2 Adults - 1 Children</div>
          </div>
          <div className="w-full h-[56px] flex items-center gap-4 text-sm">
            <div className="flex-[1_0_auto]  h-full">
              <Input
                className="bg-third rounded-none h-full p-0 py-2 pl-3 placeholder:text-four"
                placeholder="Promo Code"
              />
            </div>
            <div className="text-secondary w-[112px] h-full">
              <Button variant={"outline"} className="font-bold border-2 h-full">
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
          <span>Total</span>
          <span>$450.00</span>
        </div>
      </div>
    </div>
  );
};

export default BillTour;
