import { Link } from "react-router";
import { convertDate, convertDuration } from "../../utils/function";
import { List } from "lucide-react";

const Card = ({ videoData, isChannel = false, isPlaylist = false }) => {
  const videoId = videoData?.contentDetails?.upload?.videoId;

  return (
    <Link
      to={isPlaylist ? `/playlist/1` : `/video/${videoId || videoData?.id}`}
    >
      <div className="cursor-pointer rounded-md overflow-hidden hover:scale-105 transition-all">
        <div className="relative">
          {isChannel ? (
            <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1 flex items-center gap-1">
              <span>
                <List />
              </span>
              <span>2 videos</span>
            </span>
          ) : (
            <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1 flex items-center gap-1">
              {convertDuration(videoData?.contentDetails?.duration)}
            </span>
          )}
          <img
            src={videoData?.snippet?.thumbnails?.standard?.url}
            className="h-[240px] w-full"
          />
        </div>
        <div className="mt-4 flex gap-2">
          {isChannel && (
            <img
              src={videoData?.channelThumbnail}
              className="w-10 h-10 rounded-full flex-none"
            />
          )}
          {!isChannel ? (
            <div>
              <h2 className="text-2xl">{videoData?.snippet.title}</h2>
              <p>{videoData?.snippet.channelTitle}</p>
              <div className="flex gap-1">
                <p>{videoData?.statistics?.viewCount} views</p>
                <span>.</span>
                <p>{convertDate(videoData?.snippet.publishedAt)}</p>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl">{videoData?.snippet.title}</h2>
              {!isPlaylist && (
                <div className="flex gap-1">
                  <p>{videoData?.statistics?.viewCount} views</p>
                  <span>.</span>
                  <p>{convertDate(videoData?.snippet.publishedAt)}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
