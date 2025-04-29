import i18n from '@i18n/i18n'
import { languageSelector } from '@redux-toolkit/selectors/languageSelector'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

const LayoutOtherPages = () => {
  const { lg } = useSelector(languageSelector)

  useEffect(() => {
    i18n.changeLanguage(lg)
  }, [lg])

  return (
    <>
      <Outlet />
    </>
  )
}

export default LayoutOtherPages
