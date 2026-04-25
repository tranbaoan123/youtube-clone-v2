import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apis";
const initialState = {
  isLoading: false,
  homeData: {},
  isError: false,
};
export const fetchHomeVideoList = createAsyncThunk(
  "homepage/fetchHomeVideoList",
  async (categoryId) => {
    const response = await api.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=us&${categoryId !== "" ? `videoCategoryId=${categoryId}` : ""}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    );
    return response.data;
  },
);
const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeVideoList.pending, (state) => {
      // Add user to the state array
      state.isLoading = true;
      state.homeData = [];
      state.isError = false;
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchHomeVideoList.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.homeData = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchHomeVideoList.rejected, (state) => {
      // Add user to the state array
      state.isLoading = false;
      state.homeData = [];
      state.isError = true;
    });
  },
});
export default homePageSlice.reducer;
