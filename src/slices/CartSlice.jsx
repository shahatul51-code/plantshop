import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      if (!existing) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        if (type === "increment") {
          existing.quantity++;
          state.totalQuantity++;
          state.totalPrice += existing.price;
        } else if (type === "decrement" && existing.quantity > 1) {
          existing.quantity--;
          state.totalQuantity--;
          state.totalPrice -= existing.price;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
