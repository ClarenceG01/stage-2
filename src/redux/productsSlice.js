import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  setCart: false,
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    changeSeeCart: (state) => {
      state.setCart = !state.setCart;
    },
  },
});

export const { addProductToCart, changeSeeCart } = productsSlice.actions;

export default productsSlice.reducer;
