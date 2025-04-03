import { FaMapMarkerAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdCalendarMonth } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";

const SearchTourHome = () => {
  return (
    <div className="flex-[0_0_30%] bg-transparent 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8 lg:block hidden">
      <div className="z-10 relative">
        <div className="flex">
          <Button variant="primary" className="flex-[0_0_50%]">
            Tours
          </Button>
          <Button variant="third" className="flex-[0_0_50%] opacity-20">
            <span>Hotel</span>
          </Button>
        </div>
        <div className="lg:px-8 lg:py-8 px-6 py-6">
          <p className="text-size-2xl">Discover beautiful Vietnam</p>
          <div className="lg:mt-6 mt-4 flex flex-col lg:gap-4 gap-2">
            <div className="bg-third opacity-100 w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 pl-6">
              <FaMapMarkerAlt className="text-primary text-size-lg" />
              <span className="text-size-base">
                Quatlam Beach, Giaothuy, Namdinh
              </span>
            </div>
            <div className="bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 pl-6">
              <MdCalendarMonth className="text-primary text-size-lg" />
              <span className="text-size-base opacity-50">Departure time</span>
            </div>
            <div className="bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6">
              <CiFlag1 className="text-primary text-size-lg" />
              <span className="text-size-base opacity-50">Type of tour</span>
              <div className="ml-auto opacity-50">
                <FaSortDown />
              </div>
            </div>
            <div className="bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6">
              <LuUsers className="text-primary text-size-lg" />
              <span className="text-size-base opacity-50">
                Number of guests
              </span>
              <div className="ml-auto opacity-50">
                <FaSortDown />
              </div>
            </div>
          </div>
          <div className="lg:pt-6 pt-4">
            <Button variant="primary" className="flex justify-center gap-2">
              <CiSearch className="text-size-lg" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTourHome;
