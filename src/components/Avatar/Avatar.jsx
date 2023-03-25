import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({ hash }) => {
  let url = `https://www.gravatar.com/avatar/${hash}`;

  return <img src={url} className="avatar" alt="avatar" />;
};

Avatar.propTypes = {
  hash: PropTypes.string,
};

export default Avatar;
