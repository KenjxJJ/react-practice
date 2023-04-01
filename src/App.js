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
    this.setState({
      cart: [...this.state.cart, item.id],
    });
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  renderCart() {
    return <CartPage items={this.state.cart} />;
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1:
        return this.renderCart();
    }
  }

  render() {
    return (
      <div>
        <Nav
          activeTab={this.state.activeTab}
          onTabChange={() => this.props.handleTabChange(this.state.activeTab)}
        />
        <div className="cart-items-number">{this.state.cart.length} items</div>
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

export default App;
