import "./App.css";
import React from "react";
import Item from "./components/item";
import Cart from "./components/cart";
import { Switch, Link, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    data: [],
    itemsInCart: [],
    cartItemsId: 0,
  };

  componentDidMount() {
    const url = "https://5ed0108416017c00165e327c.mockapi.io/api/v1/items";

    fetch(url)
      .then((data) => data.json())
      .then((result) => {
        this.setState({ data: result });
      });
  }

  calculatetotalPrice = () => {
    let total = 0;
    this.state.itemsInCart.map((item) => (total += item.price));
    console.log(total);
    return total.toFixed(2);
  };

  handleHeader = () => {
    return (
      <header>
        <a href="/">
          <h1>MouseHeavan</h1>
        </a>
        {this.state.itemsInCart.length !== 0 ? (
          <Link className="cart-icon" to="/cart">
            <div className="cart-icon-values">
              <div className="cart-total">${this.calculatetotalPrice()}</div>
              <div className="in-cart-items">
                {this.state.itemsInCart.length} {this.state.itemsInCart.length === 1 ? "item" : "items"} 
              </div>
            </div>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        ) : null}
      </header>
    );
  };

  handleAddToCart = (item) => {
    if (item.stock > 0) {
      this.setState((currentState) => ({
        cartItemsId: currentState.cartItemsId + 1,
        itemsInCart: [
          ...currentState.itemsInCart,
          {
            id: currentState.cartItemsId,
            name: item.name,
            price: item.price,
          },
        ],
      }));
    }

    item.stock--;
  };

  handleDeleteFromCart = (id) => {
    this.setState((currentState) => ({
      itemsInCart: currentState.itemsInCart.filter((item) => {
        return item.id !== id;
      }),
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.handleHeader()}
          <main>
            <Switch>
              <Route path="/cart">
                <Cart
                  items={this.state.itemsInCart}
                  handleDeleteFromCart={this.handleDeleteFromCart}
                  total={this.calculatetotalPrice()}
                />
              </Route>
              <Route path="/">
                <Item
                  items={this.state.data}
                  handleAddToCart={this.handleAddToCart}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
