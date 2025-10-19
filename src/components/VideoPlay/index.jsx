import { ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideoDetail } from "../../redux/videoDetail/videoDetailSlice";
import Spinner from "../Spinner";
import Comment from "../Comment";
import { fetchChannelList } from "../../redux/channelInfoSlice/channelInfoSlice";
const VideoPlay = ({ id }) => {
  const { videoDetail, isLoading } = useSelector((state) => state.videoDetail);
  const { channelData } = useSelector((state) => state.channelInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoDetail(id));
  }, []);
  useEffect(() => {
    if (videoDetail?.items) {
      console.log(videoDetail?.items[0]?.snippet?.channelId);

      dispatch(fetchChannelList(videoDetail?.items[0]?.snippet?.channelId));
    }
  }, [videoDetail?.items]);
  console.log(channelData);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-[70%]">
          <div className="rounded-md">
            {
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="Youtube player video"
                do-not-allow="autoplay"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            }
          </div>
          <h2 className="text-[32px]">
            {videoDetail?.items && videoDetail?.items[0].snippet?.title}
          </h2>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-pink-500"></div>
              <div>
                <h3>Author</h3>
                <p>Subcribers Counts</p>
              </div>
            </div>
            <button className="flex items-center px-2 py-4 gap-2 bg-gray-800 rounded-full">
              <span>
                <ThumbsUp />
              </span>
              <span>|</span>
              <span>2.1k likes</span>
            </button>
          </div>
          <div className="bg-gray-500/50 p-4 rounded-md my-4">
            <div className="flex gap-2">
              <span>38K views</span>
              <span>3 days ago</span>
            </div>
            <p>
              {videoDetail?.items && videoDetail?.items[0].snippet?.description}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Comments</h2>
            <Comment />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlay;
