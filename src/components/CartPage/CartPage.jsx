import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";
import "./CartPage.css";

const CartPage = ({ items, onAddOne, onRemoveOne, onGetTotal }) => {
 
  return (
    <div className="CartPage-wrapper">
      {items.length > 0 ? (
        <>
          <ul className="CartPage-items">
            {items.map((item) => (
              <li key={item.id} className="CartPage-item">
                <Item item={item}>
                  <div className="CartItem-controls">
                    <button
                      className="CartItem-removeOne"
                      onClick={() => onRemoveOne(item)}
                    >
                      &ndash;
                    </button>
                    <span className="CartItem-count">{item.count}</span>
                    <button
                      className="CartItem-addOne"
                      onClick={() => onAddOne(item)}
                    >
                      +
                    </button>
                  </div>
                </Item>
              </li>
            ))}
          </ul>
          <p>Total: ${onGetTotal}</p>
        </>
      ) : (
        <div className="CartPage-empty-notice">
          <p>Your cart is empty.</p>
          <p>Why not add some expensive products to it?</p>
        </div>
      )}
    </div>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
