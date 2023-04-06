import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import { items } from "./static-data";
import ItemPage from "./components/ItemPage/ItemPage";
import CartPage from "./components/CartPage/CartPage";

class App extends Component {
  state = {
    activeTab: 0,
    cart: [],
  };

  handleAddToCart = (item) => {
    let count = item.count > 0 ? item.count : 0;

    let index = this.state.cart.findIndex((item) => item);

    this.setState({
      cart: [
        ...this.state.cart,
        {
          ...item,
          count: index.count === item.count ? count + 1 : count,
        },
      ],
    });
  };

  handleTotalSumFromCart(items) {
    let total =
      items.length > 0
        ? items.reduce(
            (firstItem, nextItem) =>
              firstItem.count * firstItem.price +
              nextItem.count * nextItem.price
          )
        : 0;

    return total;
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);

    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(0, index + 1),
      ],
    });
  };

  renderCart() {
    return (
      <CartPage
        items={this.state.cart}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}
        onGetTotal={this.handleTotalSumFromCart(this.state.cart)}
      />
    );
  }

  renderContent() {
    switch (this.state.activeTab) {
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
      default:
    }
  }

  render() {
    return (
      <div>
        <Nav
          activeTab={this.state.activeTab}
          onTabChange={this.handleTabChange}
          cartSize={this.state.cart.length}
          total={this.handleTotalSumFromCart(this.state.cart)}
        />
        <div className="cart-items-number">{this.state.cart.length} items</div>
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
