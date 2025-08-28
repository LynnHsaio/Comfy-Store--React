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

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    update(state, action) {
      const { id, color } = action.payload;

      state.cart = state.cart.map((item) =>
        item.id === id && item.color === color ? action.payload : item
      );

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      cartSlice.caseReducers.setDataToLocalStorage(state);
    },
    setDataToLocalStorage(state) {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { add, update, remove } = cartSlice.actions;
