import React from "react";
import PropTypes from "prop-types";
import Header from "@components/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]),
};

export default Layout;
