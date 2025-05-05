import Logo from '@assets/images/logo.png'
import { languageSelector } from '@redux-toolkit/selectors/languageSelector'
import { useTranslation } from 'react-i18next'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const linksEn = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Hotels',
    link: '/hotels'
  },
  {
    title: 'Tours',
    link: '/tours'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
]

const linksVi = [
  {
    title: 'Trang chủ',
    link: '/'
  },
  {
    title: 'Chúng tôi',
    link: '/about'
  },
  {
    title: 'Tham quan',
    link: '/hotels'
  },
  {
    title: 'Khách sạn',
    link: '/tours'
  },
  {
    title: 'Liên hệ',
    link: '/contact'
  }
]

const pagesEn = [
  {
    title: 'Partner with us',
    link: '/privacy-policy'
  },
  {
    title: 'Terms & Conditions',
    link: '/privacy-policy'
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy'
  },
  {
    title: 'Guest Policy',
    link: '/privacy-policy'
  }
]

const pagesVi = [
  {
    title: 'Hợp tác với chúng tôi',
    link: '/privacy-policy'
  },
  {
    title: 'Điều khoản & Điều kiện',
    link: '/privacy-policy'
  },
  {
    title: 'Chính sách Bảo mật',
    link: '/privacy-policy'
  },
  {
    title: 'Chính sách Khách hàng',
    link: '/privacy-policy'
  }
]

const Footer = () => {
  useTranslation()

  const { lg } = useSelector(languageSelector)

  return (
    <footer>
      <div className="lg:py-16 md:py-10 py-6 bg-secondary opacity-90 max-w-[1600px] m-auto">
        <div className="flex justify-between flex-wrap sub-container">
          <div className="lg:flex-[0_0_10%] flex-[0_0_100%]">
            <div className="w-full">
              <img src={Logo} alt="logo" className="object-cover" />
            </div>
            <ul className="flex lg:pt-8 md:pt-6 pt-4 lg:gap-8 md:gap-6 gap-4">
              <li className="text-third text-size-xl">
                <Link to="#!">
                  <FaFacebook />
                </Link>
              </li>
              <li className="text-third text-size-xl ">
                <Link to="#!">
                  <FaInstagram />
                </Link>
              </li>
              <li className="text-third text-size-xl">
                <Link to="#!">
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:flex-[0_0_60%] flex-[0_0_100%] lg:pt-0 md:pt-20 pt-10">
            <div className="text-base text-third flex justify-between flex-wrap">
              <div className="md:flex-[0_0_25%] sm:flex-[0_0_50%] flex-[0_0_100%]">
                <ul className="flex flex-col md:gap-6 gap:4">
                  {lg === 'en' ? (
                    <>
                      {linksEn.map((v, index) => (
                        <li key={index} className="text-third hover:text-primary">
                          <Link to={v.link}>{v.title}</Link>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {linksVi.map((v, index) => (
                        <li key={index} className="text-third hover:text-primary">
                          <Link to={v.link}>{v.title}</Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
              <div className="lg:flex-[0_0_25%] sm:flex-[0_0_50%] flex-[0_0_100%] sm:pt-0 pt-6">
                <ul className="flex flex-col md:gap-6 gap:4">
                  {lg === 'en' ? (
                    <>
                      {pagesEn.map((v, index) => (
                        <li key={index} className="text-third hover:text-primary">
                          <Link to={v.link}>{v.title}</Link>
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {pagesVi.map((v, index) => (
                        <li key={index} className="text-third hover:text-primary">
                          <Link to={v.link}>{v.title}</Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
              <div className="md:flex-[0_0_50%] flex-[0_0_100%] md:pt-0 pt-6">
                <div className="flex md:justify-end justify-start">
                  <div>
                    <div className="flex gap-4 items-center">
                      <CiLocationOn className="text-size-lg" />
                      <a
                        href="https://www.google.com/maps?q=Lilama+10+Tower,+56+To+Huu,+Trung+Van,+Nam+Tu+Liem,+Ha+Noi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-third hover:text-primary"
                      >
                        Lilama 10 Tower, 56 To Huu, <br /> Trung Van, Nam Tu Liem, Ha Noi
                      </a>
                    </div>
                    <div className="flex gap-4 pt-6 items-center">
                      <CiMail className="text-size-lg" />
                      <a href="mailto:hello@adamotravel.com" className="hover:underline text-third hover:text-primary">
                        hello@adamotravel.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary text-third py-2">Copyright © We.travel. All rights reserved</div>
    </footer>
  )
}

export default Footer
