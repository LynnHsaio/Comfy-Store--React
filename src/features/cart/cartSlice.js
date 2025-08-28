import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

function getDataFromLocalStorage(name) {
  try {
    const storedVal = localStorage.getItem(name);
    return storedVal ? JSON.parse(storedVal) : initialState;
  } catch {
    return initialState;
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState: getDataFromLocalStorage("cart"),
  reducers: {
    add(state, action) {
      const { cartId, amount } = action.payload;
      const sameItem = state.cart.find((item) => item.cartId === cartId);

      if (sameItem) {
        sameItem.amount += amount;
      } else {
        state.cart.push(action.payload);
      }

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    update(state, action) {
      const { cartId, amount } = action.payload;

      const sameItem = state.cart.find((item) => item.cartId === cartId);
      sameItem.amount = amount;

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    remove(state, action) {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.cartId
      );

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    setDataToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { add, update, remove } = cartSlice.actions;
