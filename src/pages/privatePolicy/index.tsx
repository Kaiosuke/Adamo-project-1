import BreadcrumbCom from '@components/Breadcrumb'

import PrivateSection from './PrivateSection'
import PdMain from '@components/paddingList/PbMain'
import { useTranslation } from 'react-i18next'

const PrivatePolicy = () => {
  const { t } = useTranslation('others')
  return (
    <>
      <PdMain />
      <BreadcrumbCom current="Private Policy" links={[{ title: t('home'), href: '/' }]} />
      <PrivateSection />
      <PdMain />
    </>
  )
}

export default PrivatePolicy
