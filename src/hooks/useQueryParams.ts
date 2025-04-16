import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useState(() => {
    return Object.fromEntries(new URLSearchParams(location.search));
  });

  useEffect(() => {
    setParams(Object.fromEntries(new URLSearchParams(location.search)));
  }, [location.search]);

  const setQueryParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return { params, setQueryParam };
};

export default useQueryParams;
