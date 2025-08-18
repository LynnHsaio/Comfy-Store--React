import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const { id, color, amount } = action.payload;

      const isSameColorItem = state.cart.find(
        (item) => item.id === id && item.color === color
      );

      if (isSameColorItem) {
        state.cart = state.cart.map((item) => {
          if (item.id === id && item.color === color) {
            return {
              ...action.payload,
              amount: Number(item.amount) + Number(amount),
            };
          } else {
            return item;
          }
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
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
