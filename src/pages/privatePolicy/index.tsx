import BreadcrumbCom from '@/components/Breadcrumb'

import PrivateSection from './PrivateSection'
import PdMain from '@/components/paddingList/PbMain'

const PrivatePolicy = () => {
  return (
    <>
      <PdMain />
      <BreadcrumbCom current="Private Policy" links={[{ title: 'Home', href: '/' }]} />

      <PrivateSection />
      <PdMain />
    </>
  )
}

export default PrivatePolicy
