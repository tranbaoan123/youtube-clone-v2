import { Link } from "react-router";

const PlayListCard = ({ videoData }) => {
  return (
    <Link to={`video/${videoData?.id}`}>
      <div className="cursor-pointer rounded-md overflow-hidden hover:scale-105 transition-all">
        <div className="relative">
          <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1 flex items-center gap-1">
            1
          </span>
          <img
            src={videoData?.snippet?.thumbnails?.standard?.url}
            className="h-[240px] w-full"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <h2 className="text-2xl">{videoData?.snippet.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PlayListCard;
