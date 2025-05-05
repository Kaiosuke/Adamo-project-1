import { useAppDispatch } from '@redux-toolkit/index'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AttractiveSection from './AttractiveSection'
import ContactSection from './ContactSection'
import DiscoverSection from './DiscoverSection'
import HeroSection from './HeroSection'
import IntroduceSection from './IntroduceSection'
import TraditionalSection from './Traditional'

import { getAllTour, getFiltersTour, getTours } from '@api/tourRequest'

import SkeletonData from '@components/LoadingList/SkeletonData'
import PdMain from '@components/paddingList/PbMain'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getFiltersTour())
        await dispatch(getAllTour({}))
      } catch (error) {
        return error
      }
    })()
  }, [dispatch])

  useTranslation()

  const { data, isLoading } = useQuery({
    queryKey: ['tours'],
    queryFn: () => getTours({})
  })

  return (
    <>
      <HeroSection />
      <PdMain />
      <IntroduceSection />
      <PdMain />
      <PdMain />
      <PdMain />

      {isLoading ? (
        <div className="main-container grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6 opacity-none">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonData key={index} />
          ))}
        </div>
      ) : (
        <>{data && <DiscoverSection data={data} />}</>
      )}

      <PdMain />
      {isLoading ? (
        <div className="main-container grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6 opacity-none">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonData key={index} />
          ))}
        </div>
      ) : (
        <>{data && <AttractiveSection data={data} />}</>
      )}
      <PdMain />

      {isLoading ? (
        <div className="main-container grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6 opacity-none">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonData key={index} />
          ))}
        </div>
      ) : (
        <>{data && <TraditionalSection data={data} />}</>
      )}
      <PdMain />
      <ContactSection />
      <PdMain />
    </>
  )
}

export default Home
