import BreadcrumbCom from '@/components/Breadcrumb'
import MapCom from '@/components/MapCom'

import PdMain from '@/components/paddingList/PbMain'
import PdSub from '@/components/paddingList/PbSub'
import { useTranslation } from 'react-i18next'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'
import { useMemo } from 'react'

const Contact = () => {
  const { t } = useTranslation(['contact', 'others'])

  const links = useMemo(() => [{ href: '/', title: t('others:home') }], [t])
  const current = useMemo(() => t('others:contact'), [t])

  return (
    <>
      <HeroSection />
      <PdSub />
      <BreadcrumbCom links={links} current={current} />
      <PdSub />
      <ContactSection />
      <PdMain />
      <MapCom />
    </>
  )
}

export default Contact
