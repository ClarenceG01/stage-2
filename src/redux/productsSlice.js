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
    removeProduct: (state, action) => {
      const { id } = action.payload;
      const newCart = state.cart.filter((product) => product.id !== id);
      state.cart = newCart;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    changeSeeCart: (state) => {
      state.setCart = !state.setCart;
    },
  },
});

export const {
  addProductToCart,
  changeSeeCart,
  addQuantity,
  reduceQuantity,
  removeProduct,
  clearCart,
} = productsSlice.actions;

export default productsSlice.reducer;
