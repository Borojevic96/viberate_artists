import { useQuery } from "react-query";
import restClient from "@utils/restClient";

const useRequestsArtists = () => {
  return useQuery(
    ["artists_collection"],
    () =>
      restClient
        .get("3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
        .then((res) => res.data),
    { refetchOnWindowFocus: false, staleTime: 10 * 60 * 1000 }
  );
};

export default useRequestsArtists;
