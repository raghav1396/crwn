import * as actionTypes from "./cart.actionTypes";

export const toggleCartHidden = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});
