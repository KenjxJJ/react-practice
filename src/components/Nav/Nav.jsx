/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Nav.css";

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <NavLink index={0} onClick={() => onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={() => onTabChange}>
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

class NavLink extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return <a onClick={() => this.handleClick}>{this.props.children}</a>;
  }
}

export default Nav;
