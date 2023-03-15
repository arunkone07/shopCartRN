import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    
    productAdded: (products, action) => {
      products.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
        counter: 0
      });
    },

    productAddedToCart: (products, action) => {
      let index = -1
      products.forEach((product) => {
        if (product.id === action.payload.id) index = products.indexOf(product);
      });
      products[index].counter=1
    },

    productRemovedFromCart: (products, action) => {
      let index = -1
      products.forEach((product) => {
        if (product.id === action.payload.id) index = products.indexOf(product);
      });
      products[index].counter=0
    },

  },
});

export const { productAdded, productAddedToCart, productRemovedFromCart } = slice.actions;
export default slice.reducer;
