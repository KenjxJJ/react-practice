import React from "react";
import "./Avatar.css";

const Avatar = ({ hash }) => {
  let url = `https://www.gravatar.com/avatar/${hash}`;

  return <img src={url} className="avatar" alt="avatar" />;
};

export default Avatar;
