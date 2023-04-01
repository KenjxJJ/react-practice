import React, { Children } from "react";
import PropTypes from "prop-types";
import "./Nav.css";

const Nav = ({ children }) => {
  let items = Children.toArray(children);

  for (let i = items.length - 1; i >= 1; i--)
    items.splice(
      i,
      0,
      <span key={i} className="separator">
        |
      </span>
    );
  return (
    <nav>
      <h1>Hacker News</h1>
      <span>{items}</span>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
