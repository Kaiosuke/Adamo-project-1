import ImageSign from "@/assets/images/sign.png";
import i18n from "@/i18n/i18n";
import { languageSelector } from "@/redux/selectors/languageSelector";
import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";

const LayoutAuth = () => {
  const { lg } = useSelector(languageSelector);

  useEffect(() => {
    i18n.changeLanguage(lg);
  }, []);

  return (
    <>
      <Link
        to="/"
        className="fixed top-10 left-10 text-primary flex items-center gap-2  text-size-3xl"
      >
        <FaArrowLeftLong />
        Home
      </Link>
      <div className="grid lg:grid-cols-2 h-screen w-screen grid-cols-1">
        <Outlet />
        <div className="w-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat lg:block hidden"
            style={{ backgroundImage: `url(${ImageSign})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LayoutAuth;
