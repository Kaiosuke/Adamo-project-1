import ImageSign from "@/assets/images/sign.png";
import { Outlet } from "react-router";

const LayoutAuth = () => {
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
