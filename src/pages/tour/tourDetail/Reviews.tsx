import ReviewTour from '@/components/reviews/ReviewTour'
import { reviewSelector } from '@/redux/selectors/reviewSelector'
import { tourSelector } from '@/redux/selectors/tourSelector'
import { FaStar } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

import { getAllReviewTour } from '@/api/reviewRequest'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import TourReviewForm from './TourReviewForm'
import Star from './Star'
import Pagination from '@/components/paginationList/Pagination'

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

  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['reviewsTour', { id }],
    queryFn: () => getAllReviewTour(id as string),
    enabled: id !== undefined
  })

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
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-four" />
                  </div>
                  <div className="text-four font-semibold">
                    Based on{' '}
                    <span className="text-secondary">
                      {totalData} {totalData > 0 ? 'reviews' : 'review'}
                    </span>
                  </div>
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
                <div className="text-size-2xl mb-8">No comment!</div>
              ) : (
                <>
                  {[...reviewsTour].reverse().map((review) => (
                    <ReviewTour key={review.id} review={review} />
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

export default Reviews
