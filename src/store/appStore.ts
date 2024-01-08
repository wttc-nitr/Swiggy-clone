import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";

export const appStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
