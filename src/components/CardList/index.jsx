import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelList } from "../../redux/channelInfoSlice/channelInfoSlice";
import { fetchHomeVideoList } from "../../redux/homePageSlice/homePageSlice";
import Spinner from "../Spinner/index";
import Card from "../Card";

const CardList = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homePage.homeData);
  const homeDataLoading = useSelector((state) => state.homePage.isLoading);
  const channelData = useSelector((state) => state.channelInfo.channelData);
  const channelDataLoading = useSelector(
    (state) => state.channelInfo.isLoading
  );

  const channelIdString = homeData.items
    ?.map((video) => {
      return video.snippet.channelId;
    })
    .join(",");
  useEffect(() => {
    dispatch(fetchHomeVideoList());
  }, []);

  useEffect(() => {
    dispatch(fetchChannelList(channelIdString));
  }, [channelIdString]);
  const channelThumbnailList = channelData.items?.map((channel) => {
    return channel.snippet.thumbnails.default.url;
  });
  const mergedData =
    channelThumbnailList &&
    homeData.items?.map((video, index) => {
      return { ...video, channelThumbnail: channelThumbnailList[index] };
    });

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {homeDataLoading || channelDataLoading ? (
        <Spinner />
      ) : (
        mergedData?.map((video) => {
          return <Card key={video.id} videoData={video} />;
        })
      )}
    </div>
  );
};

export default CardList;
