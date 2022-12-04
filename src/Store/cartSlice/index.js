import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, { payload }) {
      return [...state, payload];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const useCart = (state) => {
  return state.cart;
};
