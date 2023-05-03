import { configureStore } from "@reduxjs/toolkit";
import artisanReducer from "./artisanSlice";

export const Store = configureStore({
  reducer: {
    artisan: artisanReducer,
  },
});
