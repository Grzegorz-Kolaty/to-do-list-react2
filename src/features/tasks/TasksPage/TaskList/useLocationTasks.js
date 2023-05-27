import { useLocation } from "react-router-dom";
import searchQueryParamName from "../../searchQueryParamName";

const usePageLocation = () => {
  const location = useLocation();
  const query =
    (new URLSearchParams(location.search)).get(searchQueryParamName);

  return {
    pathname: location.pathname,
    search: location.search,
    query
  };
};

export default usePageLocation;
