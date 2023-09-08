import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import { apiSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  [apiSlice.reducerPath]: apiSlice.reducer, //intergrates RTK Querty in the redux store

  devTools: true,
});

export default store;
