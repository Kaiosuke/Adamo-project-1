import Logo from "@/assets/images/logo.png";

import DarkMode from "./DarkMode";
import NavPc from "./NavPc";
import NavMb from "./NavMb";

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
  return (
    <header className="fixed w-full z-[9999] top-4">
      <div className="main-container flex items-center relative">
        <img
          src={Logo}
          className="lg:w-[90px] lg:h-[90px] md:w-[68px] md:h-[68px] w-[48px] h-[48px]"
          alt="logo"
        />
        <div className="ml-auto flex items-center">
          <div className="flex items-center ">
            <NavPc />
            <DarkMode />
            <NavMb />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
