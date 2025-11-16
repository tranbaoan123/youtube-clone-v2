import { useState } from "react";
import Card from "../Card";

const ChannelInfo = () => {
  const [activeTab, setActiveTab] = useState("videos");
  return (
    <div>
      <div className="flex gap-4">
        <div className="bg-pink-500 w-36 h-36 rounded-full">
          {/* <img src="" alt="" className="w-full h-full" /> */}
        </div>
        <div className="flex-col gap-2">
          <h2 className="text-3xl">Lil Baby Official</h2>
          <div className="flex gap-4">
            <p>@lilbaby</p>
            <p>10M subscribers</p>
            <p>125 video</p>
          </div>
          <p>"WHAM" Now !</p>
          <p>https://..</p>
        </div>
      </div>
      <div className="flex border-b border-gray-600">
        <div
          className={`py-2 px-4 ${
            activeTab === "videos" && "border-b border-white"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          <button type="button" className="text-2xl">
            Videos
          </button>
        </div>
        <div
          className={`py-2 px-4 ${
            activeTab === "playlists" && "border-b border-white"
          }`}
          onClick={() => setActiveTab("playlists")}
        >
          <button type="button" className="text-2xl">
            Playlists
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 mt-4">
        <Card isPlaylist={true} />
        <Card isPlaylist={true} />
        <Card isPlaylist={true} />
        <Card />
      </div>
    </div>
  );
};

export default ChannelInfo;
