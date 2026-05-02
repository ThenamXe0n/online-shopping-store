import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./userSlice";
import ProductReducer from "./productSlice";
const store = configureStore({
  reducer: {
    user: UserReducers,
    product: ProductReducer,
  },
});

export default store;
