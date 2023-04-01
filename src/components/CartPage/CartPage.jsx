import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
// import "./Cart.css";

const CartPage = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartPage;
