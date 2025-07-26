const Card = ({ videoData }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="relative">
        <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1">
          duration
        </span>
        <img
          src={videoData.snippet.thumbnails.standard.url}
          className="h-[240px] w-full"
        />
      </div>
      <div className="mt-4 flex gap-2">
        <img
          src={videoData.channelThumbnail}
          className="w-10 h-10 rounded-full flex-none"
        />
        <div>
          <h2 className="text-2xl">
            THIS THING IS CHASING ME [FNAF Secret of The Mimic Part 1]
          </h2>
          <p>CoryxKenshin</p>
          <div className="flex gap-1">
            <p>7M views</p>
            <span>.</span>
            <p>2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
