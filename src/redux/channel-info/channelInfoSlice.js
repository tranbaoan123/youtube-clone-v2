import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../apis";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const fetchChannelsInfo = createAsyncThunk(
  "channels/fetchChannelsInfo",
  async (channelIdString) => {
    const response = await axiosInstance.get(
      `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelIdString}&maxResults=20&key=${API_KEY}`
    );
    return response.data;
  }
);

const initialState = {
  channelList: {},
  isLoading: false,
  error: false,
};

const channelInfoSlice = createSlice({
  name: "channel-info",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchChannelsInfo.pending, (state) => {
      // Add user to the state array
      state.channelList = [];
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchChannelsInfo.fulfilled, (state, action) => {
      // Add user to the state array
      state.channelList = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchChannelsInfo.rejected, (state) => {
      // Add user to the state array
      state.channelList = [];
      state.isLoading = false;
      state.error = true;
    });
  },
});
export default channelInfoSlice.reducer;
