import BreadcrumbCom from '@components/Breadcrumb'

import AttractiveTourSection from './AttractiveTourSection'

import TourImg from '@assets/images/hero-tour.png'
import HeroSectionCom from '@components/HeroSectionCom'

import SearchTour from '@components/searchList/tour/SearchTour'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import PdMain from '@components/paddingList/PbMain'
import PdSub from '@components/paddingList/PbSub'

const Tour = () => {
  const { t } = useTranslation(['tour', 'others'])

  const links = useMemo(() => [{ title: t('others:home'), href: '/' }], [t])
  const current = useMemo(() => t('others:tour'), [t])

  return (
    <>
      <HeroSectionCom image={TourImg} Tour={<SearchTour />} title={t('banner.title')} des={t('banner.description')} />
      <PdSub />
      <BreadcrumbCom links={links} current={current} />
      <PdSub />
      <AttractiveTourSection />
      <PdMain />
    </>
  )
}

export default Tour
