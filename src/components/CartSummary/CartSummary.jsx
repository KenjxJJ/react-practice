import React from "react";
import "./CartSummary.css";

const CartSummary = ({ cartSize, totalSum }) => {
  return (
    <div className="CartSummary-wrapper">
      <i className="fa fa-shopping-cart" />
      <span className="CartSummary-info">
        {cartSize ? cartSize : 0} items (${totalSum > 0 ? totalSum : 0}){" "}
      </span>
    </div>
  );
};

export default CartSummary;
