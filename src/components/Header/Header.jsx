import React, { useState } from "react";
import { Link } from "react-router-dom";
import getResponsive from "@hooks/getResponsive";
import Navigation from "@components/Navigation";
import Svg from "@components/Svg";
import Button from "@components/Button";
import useRequestsArtists from "@hooks/useRequestsArtists";
import style from "./Header.module.scss";

const Header = () => {
  const { data } = useRequestsArtists();
  const { isTablet } = getResponsive();
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <>
      <header className={style.header}>
        <Link to="/">
          <Svg icon="logo" className={style.header__logo} />
        </Link>
        {!isTablet && (
          <Navigation
            className={style.header__navigation}
            data={data?.all_artists || []}
          />
        )}
        <Svg icon="searchWhite" className={style.header__search} />
        {isTablet && (
          <Button
            iconName="burgerMenuWhite"
            labelOnlyAria
            variation="secondary"
            onClick={() => setIsMobileMenuVisible(true)}
            className={style["header__burger-menu"]}
          />
        )}
      </header>
      <div
        className={`${style["header__mobile-menu"]} ${
          isMobileMenuVisible ? style["header__mobile-menu--active"] : ""
        }`}
      >
        <Button
          iconName="burgerMenuWhite"
          labelOnlyAria
          variation="secondary"
          onClick={() => setIsMobileMenuVisible(false)}
          className={style["header__mobile-menu-burger-menu"]}
        />
        <Navigation
          callback={() => setIsMobileMenuVisible(false)}
          className={style["header__mobile-menu-navigation"]}
          data={data?.all_artists || []}
        />
      </div>
    </>
  );
};

export default Header;
