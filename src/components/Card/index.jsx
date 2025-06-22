const Card = () => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="relative">
        <span className="absolute p-1 bg-[#0c0c0c] rounded-md bottom-1 right-1">
          duration
        </span>
        <div className="h-[240px] bg-pink-400"></div>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="w-10 h-10 bg-pink-400 rounded-full flex-none"></div>
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
