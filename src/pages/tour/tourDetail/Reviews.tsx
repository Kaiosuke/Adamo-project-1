import ReviewTour from '@components/reviews/ReviewTour'
import { reviewSelector } from '@redux-toolkit/selectors/reviewSelector'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { FaStar } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

import Pagination from '@components/paginationList/Pagination'
import { useQueryReviewTour } from '@hooks/queries/queryReviewTour'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { memo } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import Star from './Star'
import TourReviewForm from './TourReviewForm'

interface Props {
  currentPage: number
  pageCount: number
  totalData: number
  averageStar?: number
  setCurrentPage: (_v: number) => void
}

const starList = ['5', '4', '3', '2', '1']

const Reviews = ({ currentPage, pageCount, totalData, setCurrentPage, averageStar = 5 }: Props) => {
  const { tour } = useSelector(tourSelector)
  const { reviewsTour } = useSelector(reviewSelector)
  const { t } = useTranslation('detail')

  const { id } = useParams()

  const { data } = useQueryReviewTour(id)

  useTranslation('detail')

  const { currentUser } = useSelector(authSelector)

  return (
    <>
      {tour && (
        <>
          <div className="bg-seven h-[291px] rounded-lg lg:p-8 md:p-6 p-4">
            <div className="flex h-full md:flex-row flex-col">
              <div className="flex-[0_0_35%]">
                <div className="flex justify-center md:items-center h-full flex-col gap-2">
                  <div className="text-secondary text-size-5xl">{averageStar}/5</div>
                  <div className="text-secondary flex items-center gap-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar className={`${index < averageStar ? 'text-nine' : 'text-four'}`} key={index} />
                    ))}
                  </div>
                  <Trans ns="detail" count={totalData} i18nKey={'tour.review.base'} />
                </div>
              </div>
              <div className="flex-[0_0_auto] w-[2px] h-full bg-five mx-6 md:block hidden" />
              <div className="flex-[0_0_auto] w-full h-[1px] my-2 bg-five md:hidden block" />

              <div className="flex-[0_0_64%]">
                <div className="flex flex-col h-full justify-evenly">
                  {data && starList.map((v, index) => <Star data={data} key={index} v={Number(v)} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="str-line-2" />
          {id && <TourReviewForm setCurrentPage={setCurrentPage} id={id} />}

          <div className="str-line-2" />
          <div>
            <div className="flex flex-col gap-4">
              {reviewsTour.length === 0 ? (
                <div className="text-size-2xl mb-8">{t('tour.review.content')}</div>
              ) : (
                <>
                  {[...reviewsTour].reverse().map((review) => (
                    <ReviewTour key={review.id} review={review} user={currentUser} />
                  ))}
                </>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={(e) => {
                setCurrentPage(e)
                localStorage.setItem('currentReviewTour', e.toLocaleString())
              }}
            />
          </div>
        </>
      )}
    </>
  )
}

export default memo(Reviews)
