import { Link } from "react-router";
import { convertDate, convertDuration } from "../../utils/function";

const Card = ({ videoData }) => {
  return (
    <Link to={`video/${videoData?.id}`}>
      <div className="cursor-pointer rounded-md overflow-hidden hover:scale-105 transition-all">
        <div className="relative">
          <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1">
            {convertDuration(videoData?.contentDetails?.duration)}
          </span>
          <img
            src={videoData?.snippet?.thumbnails?.standard?.url}
            className="h-[240px] w-full"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <img
            src={videoData?.channelThumbnail}
            className="w-10 h-10 rounded-full flex-none"
          />
          <div>
            <h2 className="text-2xl">{videoData?.snippet.title}</h2>
            <p>{videoData?.snippet.channelTitle}</p>
            <div className="flex gap-1">
              <p>{videoData?.statistics.viewCount} views</p>
              <span>.</span>
              <p>{convertDate(videoData?.snippet.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
