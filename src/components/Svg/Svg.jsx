import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import icons from "@utils/allSvgFiles";

const Svg = ({ icon, className }) => {
  return <ReactSVG src={icons[icon]} className={className} useRequestCache />;
};

Svg.defaultProps = {
  className: null,
};

Svg.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default React.memo(Svg);
