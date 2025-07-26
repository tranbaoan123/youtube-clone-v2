import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { useEffect } from "react";
import { fetchHomePageVideos } from "../../redux/home-page/homePageSlice";
import { fetchChannelsInfo } from "../../redux/channel-info/channelInfoSlice";
const CardList = () => {
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
  return (
    <div className="w-[95%] mx-auto mt-4 grid grid-cols-3 gap-4">
      {mergedData &&
        mergedData.length > 0 &&
        mergedData.map((video) => {
          return <Card key={video.id} video={video} />;
        })}
    </div>
  );
};

export default CardList;
