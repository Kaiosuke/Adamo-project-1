import ImageSign from '@assets/images/sign.png'
import i18n from '@i18n/i18n'
import { languageSelector } from '@redux-toolkit/selectors/languageSelector'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router'

const LayoutAuth = () => {
  const { lg } = useSelector(languageSelector)

  const { t } = useTranslation('others')

  useEffect(() => {
    i18n.changeLanguage(lg)
  }, [lg])

  return (
    <>
      <Link to="/" className="fixed top-10 left-10 text-primary flex items-center gap-2  text-size-3xl">
        <FaArrowLeftLong />
        {t('home')}
      </Link>
      <div className="grid lg:grid-cols-2 h-screen w-screen grid-cols-1">
        <Outlet />

        <div className="w-full lg:static lg:blur-none fixed inset-0 -z-[1] blur-3xl">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${ImageSign})` }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default LayoutAuth
