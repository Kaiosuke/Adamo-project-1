import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import LoadingPage from "../LoadingList/LoadingPage";

const ScrollPage = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <LoadingPage />;
  }

  return null;
};

export default ScrollPage;
