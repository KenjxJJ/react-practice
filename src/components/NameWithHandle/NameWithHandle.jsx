import React from "react";
import "./NameWithHandle.css";

const NameWithHandle = ({ author }) => {
  const { name, handle } = author;

  return (
    <span className="namewith-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

export default NameWithHandle;
