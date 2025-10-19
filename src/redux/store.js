import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homePageSlice/homePageSlice";
import channelInfoReducer from "./channelInfoSlice/channelInfoSlice";
import videoDetailReducer from "./videoDetail/videoDetailSlice";
import watchPageReducer from "./watchPageSlice/watchPageSlice";

export const store = configureStore({
  reducer: {
    homePage: homepageReducer,
    channelInfo: channelInfoReducer,
    videoDetail: videoDetailReducer,
    watchPage: watchPageReducer,
  },
});
