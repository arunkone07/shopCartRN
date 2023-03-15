import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    productToCart(cart, action) {
      cart.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
        counter: 1,
      });
    },

    incremented(cart, action) {
      cart.forEach((cartProduct) => {
        if (cartProduct.id === action.payload.id) cartProduct.counter++;
      });
    },

    decremented(cart, action) {
      cart.forEach((cartProduct) => {
        if (cartProduct.id === action.payload.id) cartProduct.counter--;
      });
    },

    deleted(cart, action) {
      let index = -1
      cart.forEach((cartProduct) => {
        if (cartProduct.id === action.payload.id) index = cart.indexOf(cartProduct);
      });
      if (index > -1) cart.splice(index, 1); 
    },

    emptied(cart) {
      cart.splice(0, cart.length)
    },
  }
});

export const { productToCart, decremented, deleted, emptied, incremented } = slice.actions;
export default slice.reducer;
