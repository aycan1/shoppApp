import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import productListSlice from "./productlist-slice";

const store = configureStore({
  reducer: { product: productListSlice.reducer, cart: cartSlice.reducer },
});

export default store;
