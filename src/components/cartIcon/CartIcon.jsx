import React from "react";
import { connect } from "react-redux";

import { selectCartItemCounts } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, numItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{numItems}</span>
  </div>
);

const mapStateToProps = (state) => ({
  numItems: selectCartItemCounts(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
