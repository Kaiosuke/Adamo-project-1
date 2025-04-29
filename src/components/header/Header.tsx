import LogoBlack from '@assets/images/logo-black.png'
import Logo from '@assets/images/logo.png'

import useDetectScroll from '@smakss/react-scroll-direction'
import { memo, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router'
import DarkMode from './DarkMode'
import Language from './Language'
import NavMb from './NavMb'
import NavPc from './NavPc'

const pages = ['tour-detail', 'hotel-detail', 'privacy-policy']

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  const { scrollDir } = useDetectScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const location = useLocation()

  const isPage = location.pathname.split('/')[1]

  const getLinkColor = useMemo(() => {
    if (isScroll) return 'text-secondary'
    return pages.includes(isPage) ? 'text-secondary' : 'text-third'
  }, [isPage, isScroll])

  const getLogoColor = () => {
    if (isScroll) return LogoBlack
    return pages.includes(isPage) ? LogoBlack : Logo
  }

  return (
    <header
      className={`fixed w-full md:py-8 py-6 z-50 tran-normal ${
        isScroll ? 'bg-third' : ''
      } ${isScroll && scrollDir === 'down' ? 'translate-y-[-1000px]' : ''}`}
    >
      <div className={`main-container flex items-center relative ${isScroll ? 'pt-0' : 'pt-0'}`}>
        <Link to="/">
          <img
            src={getLogoColor()}
            className="lg:w-[90px] lg:h-[90px] md:w-[68px] md:h-[68px] w-[48px] h-[48px]"
            alt="logo"
          />
        </Link>
        <div className="ml-auto flex items-center">
          <div className="flex items-center ">
            <nav className="lg:block hidden">
              <NavPc isPage={isPage} getLinkColor={getLinkColor} />
            </nav>
            <DarkMode />
            <Language getLinkColor={getLinkColor} />
            <NavMb getLinkColor={getLinkColor} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
