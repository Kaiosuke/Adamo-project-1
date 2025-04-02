import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default LayoutPage;
