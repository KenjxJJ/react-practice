import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ url, children }) => {
  return <a href={url}>{children}</a>;
};

NavItem.propTypes = {};

export default NavItem;
