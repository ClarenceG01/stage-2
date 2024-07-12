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
      if (!state.cart.find((product) => product.id === action.payload.id)) {
        state.cart.push(action.payload);
      } else {
        state.cart.map((product) =>
          product.id === action.payload.id
            ? product.quantity++
            : product.quantity
        );
      }
    },
    addQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      );
      product.quantity++;
    },
    reduceQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      );

      product.quantity--;
    },
    changeSeeCart: (state) => {
      state.setCart = !state.setCart;
    },
  },
});

export const { addProductToCart, changeSeeCart, addQuantity, reduceQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;
