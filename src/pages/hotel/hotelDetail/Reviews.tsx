import { getReviewsHotel } from '@/api/reviewRequest'

import ReviewHotel from '@/components/reviews/ReviewHotel'
import { IReviewHotel } from '@/interfaces/review'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'

import LoadingReview from '@/components/LoadingList/LoadingReview'
import { NumberParam, useQueryParams } from 'use-query-params'
import ReviewForm from './ReviewForm'
import ReviewPagination from './ReviewPagination'
import PdSub from '@/components/paddingList/PbSub'
import { useTranslation } from 'react-i18next'

const Reviews = ({ totalScore }: { totalScore: IReviewHotel[] }) => {
  const { id } = useParams()

  const ITEMS_PER_PAGE = 4

  const [query, setQuery] = useQueryParams({
    _page: NumberParam
  })

  const _page = query._page ? query._page : 1

  const [pageCount, setPageCount] = useState(0)

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem('currentPageHotel')
    return saved ? Number(saved) : 0
  })

  const { data, isLoading } = useQuery({
    queryKey: ['reviewHotel', { id, _page }],
    queryFn: () =>
      getReviewsHotel({
        hotelId: id as string,
        _page: _page,
        _limit: ITEMS_PER_PAGE
      }),
    enabled: id !== undefined
  })

  useEffect(() => {
    setCurrentPage(0)

    setPageCount(Math.ceil(Number(totalScore?.length) / ITEMS_PER_PAGE))
  }, [totalScore])

  const handleAverageRate = useMemo(() => {
    if (totalScore.length) {
      const score = totalScore?.reduce((acc, cur) => {
        return (acc += cur.rate)
      }, 0)

      return Math.floor(score / totalScore.length)
    }
    return 5
  }, [totalScore])

  const { t } = useTranslation('detail')

  return (
    <>
      {id && handleAverageRate && (
        <ReviewForm
          id={id}
          setCurrentPage={setCurrentPage}
          setPageCount={setPageCount}
          totalData={Number(totalScore?.length)}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          onAverageRate={handleAverageRate}
          setQuery={setQuery}
        />
      )}

      <div className="flex flex-col gap-4">
        {isLoading || !data ? (
          <div className="flex flex-col gap-6 mt-10">
            {Array.from({ length: 4 }).map((_, index) => (
              <LoadingReview key={index} />
            ))}
          </div>
        ) : data?.length === 0 ? (
          <div className="mt-4 text-size-2xl">{t('hotel.review.content')}</div>
        ) : (
          <>
            {data.map((review: IReviewHotel) => (
              <ReviewHotel key={review.id} review={review} />
            ))}
          </>
        )}
      </div>
      <PdSub />
      <ReviewPagination
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
        setQuery={setQuery}
      />
    </>
  )
}

export default Reviews
