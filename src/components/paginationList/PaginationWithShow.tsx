import { useTranslation } from 'react-i18next'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import ReactPaginate from 'react-paginate'

type PaginationProps = {
  currentPage: number
  pageCount: number
  totalData: number
  items: number
  onPageChange: (_page: number) => void
}

const PaginationWithShow = ({ currentPage, pageCount, totalData, items, onPageChange }: PaginationProps) => {
  const { t } = useTranslation('others')

  return (
    <div className="lg:pt-16 md:pt-10 pt-6 flex items-center justify-end main-container">
      <div className="flex md:w-2/3 justify-between w-full sm:flex-row flex-col items-center">
        <div className="flex items-center gap-4 text-four">
          <span>{t('showing')}</span>
          <span>
            {Math.ceil(totalData / items) < 1 ? (
              '0'
            ) : (
              <span>
                {currentPage + 1} / {Math.ceil(totalData / items)}
              </span>
            )}
          </span>
        </div>
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
          onPageChange={(e) => {
            onPageChange(e.selected)
          }}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          forcePage={pageCount > 0 ? currentPage : 0}
          pageCount={pageCount > 0 ? pageCount : 1}
          containerClassName="flex gap-2 flex-wrap"
          pageClassName="w-10 h-10 flex items-center justify-center cursor-pointer bg-five text-four font-semibold"
          activeClassName="bg-secondary text-third"
          breakClassName="w-10 h-10 flex items-center justify-center"
          pageLinkClassName="w-full h-full flex items-center justify-center cursor-pointer bg-five text-four font-semibold"
          activeLinkClassName="bg-secondary text-third"
        />
      </div>
    </div>
  )
}

export default PaginationWithShow
