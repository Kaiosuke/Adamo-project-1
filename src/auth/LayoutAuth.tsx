import { Outlet } from "react-router";
import ImageSign from "@/assets/images/sign.png";
import { Toaster } from "sonner";

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
      <Toaster />
    </>
  );
};

export default LayoutAuth;
