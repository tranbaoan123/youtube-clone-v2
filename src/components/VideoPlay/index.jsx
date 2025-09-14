import { ThumbsUp } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideoDetail } from "../../redux/videoDetail/videoDetailSlice";
import Spinner from "../Spinner";
const VideoPlay = ({ id }) => {
  const { videoDetail, isLoading } = useSelector((state) => state.videoDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoDetail(id));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-[70%]">
          <div className="min-h-[450px] rounded-md">
            {
              <iframe
                src={`https://www.youtube.com/embed/${videoDetail?.items[0]?.id}?autoplay=1`}
                title="Youtube player video"
                do-not-allow="autoplay"
                allowFullScreen
              ></iframe>
            }
          </div>
          <h2 className="text-[32px]">Video Title</h2>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              facere molestias! Possimus totam explicabo perspiciatis quam,
              doloremque quisquam nemo nostrum sit assumenda. Voluptatem
              delectus ut ipsam dolorum assumenda, libero debitis!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlay;
