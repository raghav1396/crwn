import { combineReducers } from "redux";
import user from "./user/user.reducer";
import cart from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user,
  cart
});

export default rootReducer;
