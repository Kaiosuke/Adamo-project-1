import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default LayoutPage;
