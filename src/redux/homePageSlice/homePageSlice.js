import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apis";
const initialState = {
  isLoading: false,
  homeData: {},
  isError: false,
  errorMessage: "",
};
export const fetchHomeVideoList = createAsyncThunk(
  "homepage/fetchHomeVideoList",
  async ({ categoryId }, thunkApi) => {
    try {
      const response = await api.get(
        `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=us${categoryId !== null ? `&videoCategoryId=${categoryId}` : ``}&key=${
          import.meta.env.VITE_YOUTUBE_API_KEY
        }`,
      );
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error?.message ||
        "Cannot load videos from hompage!";
      return thunkApi.rejectWithValue(errorMessage);
    }
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
    builder.addCase(fetchHomeVideoList.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.homeData = [];
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});
export default homePageSlice.reducer;
