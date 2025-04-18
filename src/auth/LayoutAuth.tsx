import ImageSign from "@/assets/images/sign.png";
import i18n from "@/i18n/i18n";
import { languageSelector } from "@/redux/selectors/languageSelector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const LayoutAuth = () => {
  const { lg } = useSelector(languageSelector);

  useEffect(() => {
    i18n.changeLanguage(lg);
  }, []);

  return (
    <>
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
