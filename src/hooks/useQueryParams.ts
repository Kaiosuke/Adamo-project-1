import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  const setQueryParam = (newValues: Record<string, string>) => {
    setSearchParams((prev) => {
      const updated = new URLSearchParams(prev);

      Object.entries(newValues).forEach(([key, value]) => {
        updated.set(key, value);
      });
      return updated;
    });
  };

  return { params, setQueryParam };
};

export default useQueryParams;
