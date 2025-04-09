import Logo from "@/assets/images/logo.png";

import useDetectScroll from "@smakss/react-scroll-direction";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkMode from "./DarkMode";
import Language from "./Language";
import NavMb from "./NavMb";
import { Link, useLocation } from "react-router";

const linkNavEn = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  {
    title: "Hotels",
    path: "/hotels",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/auth/login",
  },
];

const linkNavVi = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Chúng tôi",
    path: "about",
  },
  {
    title: "Tham quan",
    path: "/tours",
  },
  {
    title: "Khách sạn",
    path: "/hotels",
  },
  {
    title: "Liên hệ",
    path: "/contact",
  },
  {
    title: "Đăng nhập",
    path: "/auth/login",
  },
];

const pages = ["tour-detail", "hotel-detail"];

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { scrollDir } = useDetectScroll();

  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentLanguage = i18n.language;

  const location = useLocation();

  const isPage = location.pathname.split("/")[1];

  const getLinkColor = () => {
    if (isScroll) return "text-secondary";
    return pages.includes(isPage) ? "text-secondary" : "text-third";
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-200 ease-in-out ${
        isScroll ? "bg-third" : ""
      } ${isScroll && scrollDir === "down" ? "translate-y-[-1000px]" : ""}`}
    >
      <div
        className={`main-container flex items-center relative ${
          isScroll ? "pt-0" : "pt-4"
        }`}
      >
        <img
          src={Logo}
          className="lg:w-[90px] lg:h-[90px] md:w-[68px] md:h-[68px] w-[48px] h-[48px]"
          alt="logo"
        />
        <div className="ml-auto flex items-center">
          <div className="flex items-center ">
            <nav className="lg:block hidden">
              <ul className="flex justify-between items-center gap-10 lg:flex-row flex-col">
                {(currentLanguage === "en" ? linkNavEn : linkNavVi).map(
                  (nav, index) => (
                    <li key={index}>
                      <Link
                        to={nav.path}
                        className={` hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out
                            ${getLinkColor()}
                        `}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <DarkMode />
            <Language getLinkColor={getLinkColor} />
            <NavMb />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
