import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apis";
const initialState = {
  isLoading: false,
  homeData: {
    items: [],
    nextPageToken: null,
  },
  isError: "",
};
export const fetchHomeVideoList = createAsyncThunk(
  "homepage/fetchHomeVideoList",
  async ({ categoryId, pageToken }) => {
    const response = await api.get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=us&${categoryId !== "" ? `videoCategoryId=${categoryId}` : ""}${pageToken ? `pageToken=${pageToken}` : ""}&key=${
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
      state.isError = false;
    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchHomeVideoList.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.homeData = {
        items: [...state.homeData.items, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
      };

      state.isError = "";
    });
    builder.addCase(fetchHomeVideoList.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.homeData = {
        items: [],
        nextPageToken: null,
      };
      state.isError = action.error.message;
    });
  },
});
export default homePageSlice.reducer;
