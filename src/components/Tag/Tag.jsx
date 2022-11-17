import React from "react";
import PropTypes from "prop-types";
import style from "./Tag.module.scss";

const Tag = ({ label }) => {
  if (!label) {
    return null;
  }
  return <p className={style.tag}>{label}</p>;
};

Tag.defaultProps = {
  label: "",
};

Tag.propTypes = {
  label: PropTypes.string,
};

export default React.memo(Tag);
