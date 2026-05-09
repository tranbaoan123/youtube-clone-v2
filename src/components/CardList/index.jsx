import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelList } from "../../redux/channelInfoSlice/channelInfoSlice";
import { fetchHomeVideoList } from "../../redux/homePageSlice/homePageSlice";
import Spinner from "../Spinner/index";
import Card from "../Card";
import { useOutletContext } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
const CardList = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homePage.homeData);
  const homeDataLoading = useSelector((state) => state.homePage.isLoading);
  const homeErrorLoading = useSelector((state) => state.homePage.isError);
  const channelData = useSelector((state) => state.channelInfo.channelData);
  const { categoryId } = useOutletContext();
  const channelDataLoading = useSelector(
    (state) => state.channelInfo.isLoading,
  );
  const channelDataError = useSelector((state) => state.channelInfo.isError);

  const channelIdString =
    homeData.items.length > 0 &&
    homeData.items
      ?.map((video) => {
        return video?.snippet?.channelId;
      })
      .join(",");
  useEffect(() => {
    dispatch(
      fetchHomeVideoList({ categoryId, pageToken: homeData.nextPageToken }),
    );
  }, [categoryId]);

  useEffect(() => {
    dispatch(fetchChannelList(channelIdString));
  }, [channelIdString, categoryId]);
  let mergedData = [];
  mergedData =
    channelData.items &&
    homeData.items.length > 0 &&
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
  const fetchVideosByScroll = () => {
    dispatch(
      fetchHomeVideoList({ categoryId, pageToken: homeData.nextPageToken }),
    );
  };
  console.log(homeErrorLoading);

  if (homeErrorLoading || channelDataError) {
    return (
      <div className="text-center text-red-700">Error: {homeErrorLoading}</div>
    );
  }
  return (
    <InfiniteScroll
      next={() => fetchVideosByScroll()}
      hasMore={true}
      dataLength={mergedData?.length || 10}
      loader={<Spinner />}
    >
      {homeDataLoading ||
        (channelDataLoading && (
          <div className="w-screen h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ))}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {mergedData &&
          mergedData?.map((video, index) => {
            return <Card key={index} videoData={video} />;
          })}
      </div>
    </InfiniteScroll>
  );
};

export default CardList;
