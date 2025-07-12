import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homePageSlice/homePageSlice";
export const store = configureStore({
  reducer: {
    homePage: homepageReducer,
  },
});
