import React from "react";
import Button from "@components/Button";
import { Helmet } from "react-helmet";
import favicon from "@assets/favicon.png";
import style from "./Error404.module.scss";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Viberate | Error 404</title>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      </Helmet>
      <div className={style.error404}>
        <h1 className="error-404__title">Error 404 - PAGE NOT FOUND</h1>
        <Button
          href="/"
          variation="secondary"
          label="Back to Home"
          className={style["error404__back-to-home"]}
        />
      </div>
    </>
  );
};

export default Error404;
