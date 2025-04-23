import Pagination from "@/components/paginations/Pagination";
import { memo } from "react";

interface Props {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (v: number) => void;
  setQuery: (query: Record<string, any>) => void;
}

const ReviewPagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
  setQuery,
}: Props) => {
  return (
    <>
      <Pagination
        currentPage={currentPage}
        onPageChange={(v) => {
          setCurrentPage(v);
          setQuery({ _page: v + 1 });
          localStorage.setItem("currentPageHotel", v.toLocaleString());
        }}
        pageCount={pageCount}
      />
    </>
  );
};

export default memo(ReviewPagination);
