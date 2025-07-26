import moment from "moment";
import { Link } from "react-router";

const Card = ({ video }) => {
  return (
    <Link
      to={`/video/${video.id}`}
      className="cursor-pointer rounded-md overflow-hidden hover:scale-105 transition-all duration-200"
    >
      <div className="relative">
        <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1">
          {video.contentDetails.duration}
        </span>
        <img
          src={video.snippet.thumbnails.high.url}
          alt="video thumbnail"
          className="h-[240px] w-full object-cover"
        />
      </div>
      <div className="mt-4 flex gap-2">
        <img
          src={video.channelThumbnail}
          className="w-10 h-10 rounded-full flex-none"
        />
        <div>
          <h2 className="text-2xl">
            {video.snippet.localized.title.length > 30
              ? video.snippet.localized.title.substring(0, 31) + "..."
              : video.snippet.localized.title}
          </h2>
          <p>{video.snippet.channelTitle}</p>
          <div className="flex gap-1">
            <p>{video.statistics.viewCount} views</p>
            <span>.</span>
            <p>{moment(video.snippet.publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
