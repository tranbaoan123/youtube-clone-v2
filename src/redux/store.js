import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homePageSlice/homePageSlice";
import channelInfoReducer from "./channelInfoSlice/channelInfoSlice";
export const store = configureStore({
  reducer: {
    homePage: homepageReducer,
    channelInfo: channelInfoReducer,
  },
});
