import { combineReducers } from "redux";
import productsReducer from "./Products";
import cartReducer from "./Cart";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
