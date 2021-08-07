import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, removeItem, addItem } from "../../redux/cart/cart.action";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem: { id, name, imageUrl, price, quantity }, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => dispatch(removeItem({ id }))}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => dispatch(addItem({ id }))}>
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => dispatch(clearItemFromCart({ id }))}>
      &#10008;
    </div>
  </div>
);

export default connect(null)(CheckoutItem);
