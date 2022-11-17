import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navigation = ({ className, data, callback }) => {
  return (
    <div className={className}>
      <ul>
        {!!data?.length &&
          data.map((artist) => {
            return (
              <li key={artist?.artist_uuid}>
                <NavLink
                  to={`/artist/${artist?.artist_uuid}`}
                  onClick={() => {
                    if (callback) {
                      callback();
                    }
                  }}
                >
                  {artist?.artist_name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Navigation.defaultProps = {
  className: "",
  data: null,
  callback: null,
};

Navigation.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  callback: PropTypes.func,
};

export default React.memo(Navigation);
