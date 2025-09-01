// The reducer field defines how the app store's state is updated.
// It combines multiple slice reducers into a single root reducer.
// Each slice manages a specific part of the state (e.g., user, cart).

// utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
