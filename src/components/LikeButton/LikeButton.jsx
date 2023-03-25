import React from "react";
import "./LikeButton.css";
import PropTypes from "prop-types";

const LikeButton = ({ count }) => {
  return (
    <span className="likebutton">
      <i className="fa fa-heart like-button" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number,
};

export default LikeButton;
