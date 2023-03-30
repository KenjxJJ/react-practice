import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ title }) => {
  return <span className="card-item">{title}</span>;
};

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
