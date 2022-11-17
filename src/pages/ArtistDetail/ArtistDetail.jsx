import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useRequestsArtistById from "@hooks/useRequestsArtistById";
import Button from "@components/Button";
import HorizontalBarChart from "@components/HorizontalBarChart";
import Tag from "@components/Tag";
import Svg from "@components/Svg";
import icons from "@utils/allSvgFiles";
import favicon from "@assets/favicon.png";
import { Helmet } from "react-helmet";
import style from "./ArtistDetail.module.scss";
import Error404 from "../Error404";
import Loading from "../../components/Loading";

const ArtistDetail = () => {
  const { uuid: artist_uuid } = useParams();
  const { data, isFetching } = useRequestsArtistById({ artist_uuid });
  const { data: artistData } = { ...data };

  const popularity = useMemo(() => {
    if (!artistData?.popularity) return [];

    return artistData.popularity.map((artistByPopularity) => ({
      ...artistByPopularity,
      key: "percentage",
      indexBy: "city",
    }));
  }, [artistData]);

  if (isFetching) {
    return <Loading />;
  }

  if (!artistData) {
    return <Error404 />;
  }

  return (
    <>
      <Helmet>
        <title>Viberate | {artistData.name || ""}</title>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      </Helmet>
      <div className={style.artist}>
        <div
          className={style.artist__image}
          style={{ backgroundImage: `url('${artistData.image}')` }}
        />
        <div className={style.artist__detail}>
          <div className={style["artist__detail-info"]}>
            <Button
              label="BOOKING REQUEST"
              className={style["artist__detail-info-booking"]}
            />
            <h1>{artistData.name}</h1>
            <div className={style["artist__detail-info-follow"]}>
              <Button
                label="FOLLOW"
                iconName="heartWhite"
                variation="secondary"
                className={style["artist__detail-info-follow-button"]}
              />
              <Button
                iconName="heartWhite"
                variation="secondary"
                labelOnlyAria
              />
            </div>
            {artistData.country?.name ? (
              <div className={style["artist__detail-info-tags"]}>
                <h5 className={style["artist__detail-info-tags-label"]}>
                  Origin
                </h5>
                <Tag label={artistData.country?.name} />
              </div>
            ) : null}
            {artistData.genre?.name ? (
              <div className={style["artist__detail-info-tags"]}>
                <h5 className={style["artist__detail-info-tags-label"]}>
                  Genre
                </h5>
                <Tag label={artistData.genre?.name} />
              </div>
            ) : null}
            {!!artistData.subgenres?.length && (
              <div className={style["artist__detail-info-tags"]}>
                <h5 className={style["artist__detail-info-tags-label"]}>
                  Subgenres
                </h5>
                {artistData.subgenres?.map((subgenre) => (
                  <Tag key={subgenre?.id} label={subgenre?.name} />
                ))}
              </div>
            )}
            <div className={style["artist__detail-info-social-wrapper"]}>
              <div className={style["artist__detail-info-social-wrapper-list"]}>
                {!!artistData.social_links?.length &&
                  artistData.social_links.map((socialLinks) => {
                    if (!icons[socialLinks?.channel]) return null;

                    return (
                      <a
                        key={socialLinks?.link}
                        href={socialLinks?.link}
                        rel="noreferrer"
                        target="_blank"
                        className={
                          style["artist__detail-info-social-wrapper-list__link"]
                        }
                      >
                        <Svg icon={socialLinks?.channel} />
                      </a>
                    );
                  })}
              </div>
              <Button
                labelOnlyAria
                iconName="plusWhite"
                variation="secondary"
              />
            </div>
          </div>
          <div className={style["artist__detail-stats"]}>
            <p className={style["artist__detail-stats-label"]}>
              MOST POPULAR IN
            </p>
            <HorizontalBarChart data={popularity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
