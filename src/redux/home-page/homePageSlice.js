import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../apis";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const fetchHomePageVideos = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await axiosInstance.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=es&videoCategoryId=17&key=${API_KEY}`
    );
    return response.data;
  }
);

const initialState = {
  homeVideoList: [],
  isLoading: false,
  error: false,
};

const homePageSlice = createSlice({
  name: "home-page",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchHomePageVideos.pending, (state) => {
      // Add user to the state array
      state.homeVideoList = [];
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchHomePageVideos.fulfilled, (state, action) => {
      // Add user to the state array
      state.homeVideoList = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchHomePageVideos.rejected, (state) => {
      // Add user to the state array
      state.homeVideoList = [];
      state.isLoading = false;
      state.error = true;
    });
  },
});
export default homePageSlice.reducer;
