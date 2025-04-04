import Logo from "@/assets/images/logo.png";

import useDetectScroll from "@smakss/react-scroll-direction";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import NavMb from "./NavMb";

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
    path: "/login",
  },
];

// const linkNavVi = [
//   {
//     title: "Home",
//     path: "/",
//   },
//   {
//     title: "About",
//     path: "about",
//   },
//   {
//     title: "Tours",
//     path: "/tours",
//   },
//   {
//     title: "Hotels",
//     path: "/hotels",
//   },
//   {
//     title: "Contact",
//     path: "/contact",
//   },
//   {
//     title: "Login",
//     path: "/login",
//   },
// ];
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-[9999] transition-all duration-200 ease-in-out ${
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
                {linkNavEn.map((nav, index) => (
                  <li key={index}>
                    <a
                      href={nav.path}
                      className={` ${
                        isScroll ? "text-secondary" : "text-third"
                      } hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <DarkMode />
            <NavMb />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
