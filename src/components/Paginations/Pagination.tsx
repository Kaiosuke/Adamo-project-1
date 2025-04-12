import ReactPaginate from "react-paginate";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-five text-four font-semibold">
          <GoArrowLeft />
        </div>
      }
      nextLabel={
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-five text-four font-semibold">
          <GoArrowRight />
        </div>
      }
      onPageChange={(e) => onPageChange(e.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage}
      containerClassName="flex gap-2 flex-wrap"
      pageClassName="w-10 h-10 flex items-center justify-center cursor-pointer bg-five text-four font-semibold"
      activeClassName="bg-secondary text-third"
      breakClassName="w-10 h-10 flex items-center justify-center"
      pageLinkClassName="w-full h-full flex items-center justify-center cursor-pointer bg-five text-four font-semibold"
      activeLinkClassName="bg-secondary text-third"
    />
  );
};

export default Pagination;
