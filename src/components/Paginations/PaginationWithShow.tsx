import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const PaginationWithShow = () => {
  return (
    <div className="lg:pt-16 md:pt-10 pt-6 flex items-center justify-end">
      <div className="flex md:w-2/3 justify-between w-full sm:flex-row flex-col items-center">
        <div className="flex items-center gap-4 text-four">
          <span>Showing</span>
          <span>1/2</span>
        </div>
        <div className="flex gap-4 sm:pt-0 pt-4">
          <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
            <GoArrowLeft />
          </div>
          <div className="w-10 h-10 bg-secondary flex items-center justify-center text-third font-semibold cursor-pointer">
            1
          </div>
          <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
            2
          </div>
          <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationWithShow;
