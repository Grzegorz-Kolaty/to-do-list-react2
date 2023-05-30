import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  console.log(searchQueryParamName);
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  return query;
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  const replaceQueryParameter = ({ key, value }) => {
    const query = new URLSearchParams(location.search);
    console.log(location.search);
    if (value !== undefined) {
      query.set(key, value);
    } else {
      query.delete(key);
    };

    history.push(`${location.pathname}?${query.toString()}`);
  };

  return replaceQueryParameter;
};