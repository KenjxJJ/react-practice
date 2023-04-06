/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CartSummary from "../CartSummary/CartSummary";
import "./Nav.css";

const Nav = ({ activeTab, onTabChange, total, cartSize }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <NavLink index={0} onClick={onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={onTabChange}>
          Cart
        </NavLink>
      </li>
    </ul>
    <NavLink index={1} onClick={onTabChange}>
      <CartSummary cartSize={cartSize} totalSum={total} />
    </NavLink>
  </nav>
);

class NavLink extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return <a onClick={() => this.handleClick()}>{this.props.children}</a>;
  }
}

export default Nav;
