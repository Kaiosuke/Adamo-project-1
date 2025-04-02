import Logo from "@/assets/images/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Moon, Sun } from "lucide-react";
import { FaBars } from "react-icons/fa6";
import { useTheme } from "../ThemeProvider";
import { Button } from "../ui/button";

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
  const { setTheme } = useTheme();

  return (
    <header className="fixed w-full">
      <div className="main-container bg-black flex items-center relative">
        <img
          src={Logo}
          className="lg:w-[90px] lg:h-[90px] md:w-[68px] md:h-[68px] w-[48px] h-[48px]"
        />
        <div className="ml-auto flex items-center">
          <div className="flex items-center ">
            <nav className="lg:block hidden">
              <ul className="flex justify-between items-center gap-6 lg:flex-row flex-col">
                {linkNavEn.map((nav, index) => (
                  <li key={index}>
                    <a
                      href={nav.path}
                      className="text-white hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out"
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ml-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full "
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="lg:hidden block">
              <Sheet>
                <SheetTrigger asChild>
                  <div
                    className="ml-6 lg:hidden block text-third text-3xl"
                    onClick={handleOpenMenu}
                  >
                    <FaBars className="cursor-pointer" />
                  </div>
                </SheetTrigger>
                <SheetContent className="bg-secondary">
                  <nav className="pt-20">
                    <ul className="flex justify-between items-center gap-6 lg:flex-row flex-col">
                      {linkNavEn.map((nav, index) => (
                        <li key={index}>
                          <a
                            href={nav.path}
                            className="text-white hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out"
                          >
                            {nav.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
