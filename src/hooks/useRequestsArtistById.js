import { useQuery } from "react-query";
import restClient from "@utils/restClient";

const useRequestsArtistById = ({ artist_uuid }) => {
  return useQuery(
    [`artist-${artist_uuid}`],
    () => restClient.get(artist_uuid).then((res) => res.data),
    { refetchOnWindowFocus: false, staleTime: 10 * 60 * 1000 }
  );
};

export default useRequestsArtistById;
