import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router'

const linkNavEn = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: 'about'
  },
  {
    title: 'Tours',
    path: '/tours'
  },
  {
    title: 'Hotels',
    path: '/hotels'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Login',
    path: '/auth/login'
  }
]

const linkNavVi = [
  {
    title: 'Trang chủ',
    path: '/'
  },
  {
    title: 'Chúng tôi',
    path: 'about'
  },
  {
    title: 'Tham quan',
    path: '/tours'
  },
  {
    title: 'Khách sạn',
    path: '/hotels'
  },
  {
    title: 'Liên hệ',
    path: '/contact'
  },
  {
    title: 'Đăng nhập',
    path: '/auth/login'
  }
]

interface Props {
  getLinkColor: string
}

const NavMb = ({ getLinkColor }: Props) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  return (
    <div className="lg:hidden block relative z-50 ">
      <Sheet>
        <SheetTrigger asChild>
          <div className="ml-6 lg:hidden block text-third text-3xl">
            <FaBars className={`${getLinkColor} cursor-pointer`} />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-secondary">
          <nav className="pt-20">
            <ul className="flex justify-between items-center gap-6 lg:flex-row flex-col">
              {(currentLanguage === 'en' ? linkNavEn : linkNavVi).map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.path}
                    className="text-third hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default memo(NavMb)
