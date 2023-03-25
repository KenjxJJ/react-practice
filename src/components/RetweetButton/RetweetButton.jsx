import React from "react";
import PropTypes from "prop-types";

const getRetweetCount = (count) => {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
};

const RetweetButton = ({ count }) => (
  <span className="retweetbutton">
    <i className="fa fa-retweet retweet-button" />
    {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number,
};

export default RetweetButton;
