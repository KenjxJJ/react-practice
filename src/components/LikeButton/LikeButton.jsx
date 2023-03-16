import React from "react";
import "./LikeButton.css";

const LikeButton = ({ count }) => {
  return (
    <span className="likebutton">
      <i className="fa fa-heart like-button" />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

export default LikeButton;
