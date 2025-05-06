import { getReviewTourList } from '@api/reviewRequest'
import { getTourById } from '@api/tourRequest'
import BreadcrumbCom from '@components/Breadcrumb'

import { useAppDispatch } from '@redux-toolkit/index'
import { tourSelector } from '@redux-toolkit/selectors/tourSelector'
import { useEffect, useMemo, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineStar } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import RelatedTours from './RelatedTours'

import BillTourDetail from '@components/bills/tour/BillTourDetail'
import PdMain from '@components/paddingList/PbMain'
import PdSub from '@components/paddingList/PbSub'
import SwiperCom from '@components/swiper/SwiperCom'
import { useQueryReviewTour } from '@hooks/queries/queryReviewTour'
import { Trans, useTranslation } from 'react-i18next'
import TourDetailTabs from './TourDetailTabs'

const TourDetail = () => {
  const { id } = useParams()

  useTranslation()

  const dispatch = useAppDispatch()

  const { tour } = useSelector(tourSelector)

  const ITEMS_PER_PAGE = 4

  const [pageCount, setPageCount] = useState<number>(0)

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem('currentReviewTour')
    return saved ? Number(saved) : 0
  })

  const { data: totalReviewHotel } = useQueryReviewTour(id)

  const averageStar = useMemo(() => {
    if (totalReviewHotel?.length) {
      const score = totalReviewHotel.reduce((acc, cur) => {
        return acc + cur.rate
      }, 0)
      return Math.floor(score / totalReviewHotel.length)
    }
    return 5
  }, [totalReviewHotel])

  const totalData = Number(totalReviewHotel?.length)

  useEffect(() => {
    if (id && totalReviewHotel) {
      ;(async () => {
        try {
          await dispatch(getTourById(Number(id))).unwrap()
          await dispatch(
            getReviewTourList({
              tourId: Number(id),
              start: ITEMS_PER_PAGE * currentPage,
              limit: ITEMS_PER_PAGE
            })
          ).unwrap()

          setPageCount(Math.ceil(Number(totalReviewHotel.length) / ITEMS_PER_PAGE))
        } catch (error) {
          return error
        }
      })()
    }
  }, [id, dispatch, currentPage, pageCount, totalReviewHotel])

  const { t } = useTranslation('others')

  const links = useMemo(
    () => [
      { href: '/', title: t('home') },
      { href: '/tours', title: t('tour') }
    ],
    [t]
  )

  const current = useMemo(() => t('detailTour'), [t])

  return (
    <>
      {tour && (
        <>
          <PdSub />
          <PdSub />
          <div className="mt-10 md:mt-0" />
          <BreadcrumbCom current={current} links={links} />
          <PdSub />

          <section className="main-container animate-fade-down">
            <h1 className="text-size-4xl text-secondary">{tour?.title}</h1>
            <div className="lg:mt-6 mg-4 flex items-center gap-2">
              <CiLocationOn className="text-primary text-size-xl" />
              <span className="text-four text-size-base">{tour?.location}</span>
            </div>

            <div className="lg:mt-6 mt-4 flex items-center gap-6">
              <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
                <MdOutlineStar />
                {tour?.score}
              </div>
              <span className="text-four">
                {!totalData && totalData !== 0 ? (
                  <div className="flex items-center gap-4 text-base">Reviews: Loading...</div>
                ) : (
                  <Trans ns="detail" i18nKey={'tour.reviewTitle'} count={totalData} />
                )}
              </span>
            </div>
            <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6 flex-wrap xl:flex-row flex-col-reverse">
              <div className="xl:flex-[1_0_auto] flex-[0_0_100%] xl:max-w-[635px] w-full">
                <div className="h-[680px] ">
                  <SwiperCom images={tour.images} />
                </div>

                <TourDetailTabs
                  averageStar={averageStar}
                  currentPage={currentPage}
                  pageCount={pageCount}
                  setCurrentPage={setCurrentPage}
                  totalData={totalData}
                />
              </div>

              <div className="flex-[0_1_auto] max-w-[380px] w-full h-fit xl:sticky top-[20px]">
                <BillTourDetail />
              </div>
            </div>
          </section>
          <PdSub />
          <section className="main-container">
            <RelatedTours />
          </section>
        </>
      )}
      <PdMain />
    </>
  )
}

export default TourDetail
