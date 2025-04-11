import { Button } from "@/components/ui/button";
import SearchTour from "./SearchTour";

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
        <SearchTour />
      </div>
    </div>
  );
};

export default SearchTourHome;
