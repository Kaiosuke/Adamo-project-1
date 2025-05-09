import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

import { logout } from '@api/authRequest'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@components/ui/dropdown-menu'
import { toastFailed, toastSuccess } from '@lib/toasts'
import { useAppDispatch } from '@redux-toolkit/index'
import { authSelector } from '@redux-toolkit/selectors/authSelector'
import { memo } from 'react'
import { FaUser } from 'react-icons/fa6'

const linkNavEn = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
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
  }
]

const linkNavVi = [
  {
    title: 'Trang chủ',
    path: '/'
  },
  {
    title: 'Chúng tôi',
    path: '/about'
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
  }
]

interface Props {
  getLinkColor: string
  isPage: string
}

const NavPc = ({ getLinkColor, isPage }: Props) => {
  const { currentUser } = useSelector(authSelector)
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language

  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap()
      toastSuccess({ content: 'Login' })
    } catch (error) {
      if (typeof error === 'string') return toastFailed({ content: error })
    }
  }

  const { t } = useTranslation(['header', 'others'])

  return (
    <ul className="flex justify-between items-center gap-10 lg:flex-row flex-col ">
      {(currentLanguage === 'en' ? linkNavEn : linkNavVi).map((nav, index) => (
        <li key={index}>
          <Link
            to={nav.path}
            className={` hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all 
              duration-300 ease-in-out ${isPage === nav.path.split('/')[1] ? 'text-primary' : getLinkColor}
            }`}
          >
            {nav.title}
          </Link>
        </li>
      ))}
      <li>
        {currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaUser
                className={`cursor-pointer hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out
                    ${getLinkColor}
                  `}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {currentUser.displayName ? currentUser.displayName : currentUser.email}
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer">
                <Link className="text-sm" to="/auth/change-password">
                  {t('changPs')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                {t('signOut')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            to={'/auth/login'}
            className={` hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out
                            ${getLinkColor}
                        `}
          >
            {t('others:login')}
          </Link>
        )}
      </li>
    </ul>
  )
}

export default memo(NavPc)
