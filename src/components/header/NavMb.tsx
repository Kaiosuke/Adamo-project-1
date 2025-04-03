import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { FaBars } from "react-icons/fa6";

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

const NavMb = () => {
  return (
    <div className="lg:hidden block relative z-50">
      <Sheet>
        <SheetTrigger asChild>
          <div className="ml-6 lg:hidden block text-third text-3xl">
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
                    className="text-third hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out"
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
  );
};

export default NavMb;
