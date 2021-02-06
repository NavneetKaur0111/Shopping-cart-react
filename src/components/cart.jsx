import CartItem from "./cartItem";
import React from 'react';
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { items, handleDeleteFromCart, total } = props;
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        <React.Fragment>
          <ul>
            {items.map((item) => {
              return (
                <CartItem
                  item={item}
                  handleDeleteFromCart={handleDeleteFromCart}
                />
              );
            })}
          </ul>
          <div class="total">Total: ${total}</div>
        </React.Fragment>
      ) : (
        <p> No Items in your Cart </p>
      )}
      <Link class="keep-shopping" to="/">
        <i class="fas fa-chevron-left"></i>Keep Shopping
      </Link>
    </aside>
  );
};

export default Cart;
