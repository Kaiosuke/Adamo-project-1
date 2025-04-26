import PaginationWithShow from '@/components/paginationList/PaginationWithShow'
import { useEffect, useState } from 'react'
import { NumberParam, useQueryParams, withDefault } from 'use-query-params'

const HotelPagination = ({ totalData }: { totalData: number }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const ITEMS_PER_PAGE = 6

  const [query, setQuery] = useQueryParams({
    _page: withDefault(NumberParam, 1)
  })

  const _page = Number(query._page) || 1

  const pageCount = Math.ceil(totalData / ITEMS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(_page - 1)
  }, [_page])

  return (
    <PaginationWithShow
      currentPage={currentPage}
      items={ITEMS_PER_PAGE}
      pageCount={pageCount}
      totalData={totalData}
      onPageChange={(e) => {
        setCurrentPage(e)
        setQuery({ _page: e + 1 })
      }}
    />
  )
}

export default HotelPagination
