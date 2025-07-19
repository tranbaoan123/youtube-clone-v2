import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./home-page/homePageSlice";
import channelReducer from "./channel-info/channelInfoSlice";
export const store = configureStore({
  reducer: {
    youtube: homePageReducer,
    channel: channelReducer,
  },
});
