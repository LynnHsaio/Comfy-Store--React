import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cart = [...state.cart, action.payload];
      state.isLoading = false;
    },
    update(state, action) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { add, update, remove } = cartSlice.actions;
