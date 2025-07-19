import { useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageVideos } from "./redux/home-page/homePageSlice";
import { fetchChannelsInfo } from "./redux/channel-info/channelInfoSlice";

function App() {
  const homeData = useSelector((state) => state.youtube.homeVideoList);
  const channelData = useSelector((state) => state.channel.channelList);
  const dispatch = useDispatch();
  const channelIdList =
    homeData?.items &&
    homeData?.items.length > 0 &&
    homeData?.items.map((video) => {
      return video.snippet.channelId;
    });
  const channelIdString =
    channelIdList && channelIdList.length > 0 && channelIdList.join(",");

  useEffect(() => {
    dispatch(fetchHomePageVideos());
  }, []);

  useEffect(() => {
    dispatch(fetchChannelsInfo(channelIdString));
  }, [channelIdString]);

  // console.log(channelData.items[0].snippet.thumbnails.default);
  const channelThumbnailList = channelData?.items?.map((channel) => {
    return channel.snippet.thumbnails.default.url;
  });
  let mergedData;
  if (homeData?.items && channelThumbnailList) {
    mergedData = [...homeData.items];
    mergedData = mergedData?.map((item, index) => {
      return { ...item, channelThumbnail: channelThumbnailList[index] };
    });
  }
  console.log(mergedData);

  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;
