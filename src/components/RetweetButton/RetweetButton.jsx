import React from "react";

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

export default RetweetButton;
