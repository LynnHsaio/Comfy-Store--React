import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Item added to cart");
    },
    update(state, action) {
      const { cartId, amount } = action.payload;

      const sameItem = state.cart.find((item) => item.cartId === cartId);
      sameItem.amount = amount;

      cartSlice.caseReducers.setDataToLocalStorage(state);
      toast.success("Cart updated");
    },
    remove(state, action) {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.cartId
      );

      cartSlice.caseReducers.setDataToLocalStorage(state);
      toast.error("Item removed from cart");
    },
    clear(state) {
      state.cart = [];
      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    setDataToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { add, update, remove, clear } = cartSlice.actions;
