import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelList } from "../../redux/channelInfoSlice/channelInfoSlice";
import { fetchHomeVideoList } from "../../redux/homePageSlice/homePageSlice";
import Spinner from "../Spinner/index";
import Card from "../Card";
import { useOutletContext } from "react-router";

const CardList = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homePage.homeData);
  const homeDataLoading = useSelector((state) => state.homePage.isLoading);
  const channelData = useSelector((state) => state.channelInfo.channelData);
  const { categoryId } = useOutletContext();
  const channelDataLoading = useSelector(
    (state) => state.channelInfo.isLoading,
  );

  const channelIdString = homeData.items
    ?.map((video) => {
      return video.snippet.channelId;
    })
    .join(",");
  useEffect(() => {
    dispatch(fetchHomeVideoList(categoryId));
  }, [categoryId]);

  useEffect(() => {
    dispatch(fetchChannelList(channelIdString));
  }, [channelIdString, categoryId]);

  const mergedData =
    channelData.items &&
    homeData.items?.map((video) => {
      const foundChannel = channelData.items.find(
        (channel) => channel?.id === video?.snippet?.channelId,
      );

      if (foundChannel) {
        return {
          ...video,
          channelThumbnail: foundChannel.snippet.thumbnails.default.url,
        };
      }
    });
  console.log(channelData);
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {homeDataLoading || channelDataLoading ? (
        <Spinner />
      ) : (
        mergedData?.map((video, index) => {
          return <Card key={index} videoData={video} />;
        })
      )}
    </div>
  );
};

export default CardList;
