import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Svg from "@components/Svg";
import style from "./Button.module.scss";

const Button = ({
  variation,
  label,
  labelOnlyAria,
  iconName,
  disabled,
  onClick,
  href,
  external,
  className,
}) => {
  const classNames = `${style.button} ${className} ${
    variation === "secondary" ? style.button__secondary : null
  }`;

  const renderLabelAndIcon = () => {
    if (iconName && iconName !== "") {
      return (
        <>
          <Svg className={style.button__icon} icon={iconName} />
          {label !== "" && !labelOnlyAria && (
            <span className={`${style.button__label} button-label`}>
              {label}
            </span>
          )}
        </>
      );
    }

    if (!labelOnlyAria) {
      return label;
    }

    return null;
  };

  if (href && href !== "") {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          onClick={onClick}
        >
          {renderLabelAndIcon()}
        </a>
      );
    }

    return (
      <Link to={href} className={classNames} onClick={onClick}>
        {renderLabelAndIcon()}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      data-icon={!!iconName && !labelOnlyAria}
    >
      {renderLabelAndIcon()}
    </button>
  );
};

Button.defaultProps = {
  variation: null,
  className: "",
  href: "",
  external: false,
  label: "Button",
  labelOnlyAria: false,
  iconName: "",
  onClick: null,
  disabled: false,
};

Button.propTypes = {
  variation: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelOnlyAria: PropTypes.bool,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default React.memo(Button);
