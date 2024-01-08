import { createSlice } from "@reduxjs/toolkit";
import type { ItemCard } from "../types/resInfo";
import type { PayloadAction } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: <ItemCard[]>[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<ItemCard>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<ItemCard>) => {
      const index = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      state.items.splice(index, 1);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// redux-toolkit syntax
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
