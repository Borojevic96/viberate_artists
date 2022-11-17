import React from "react";
import { Helmet } from "react-helmet";
import Button from "@components/Button";
import useRequestsArtists from "@hooks/useRequestsArtists";
import favicon from "@assets/favicon.png";
import Loading from "@components/Loading";
import style from "./Home.module.scss";

const Home = () => {
  const { data, isFetching } = useRequestsArtists();

  return (
    <div className={style.home}>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Viberate | Home</title>
            <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
          </Helmet>
          <h2>All artists</h2>
          <div className={style.home__artists}>
            {!!data?.all_artists?.length &&
              data.all_artists?.map((artist) => {
                return (
                  <Button
                    key={artist?.artist_uuid}
                    href={`/artist/${artist?.artist_uuid}`}
                    className={style["home__artists-single"]}
                    label={artist?.artist_name}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
