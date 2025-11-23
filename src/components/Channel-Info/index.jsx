import { useEffect, useState } from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelList } from "../../redux/channelInfoSlice/channelInfoSlice";
import { useParams } from "react-router";
import api from "../../apis";

const ChannelInfo = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const stateChannel = useSelector((state) => state.channelInfo.channelData);
  const dispatch = useDispatch();
  const param = useParams();
  const [showModal, setShowModal] = useState(false);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    dispatch(fetchChannelList(param.id));
  }, []);
  const channelData = stateChannel?.items && stateChannel?.items[0];
  const fetchVideosChannelInfo = async () => {
    const response = await api.get(
      `activities?part=snippet%2CcontentDetails&channelId=${
        param.id
      }&maxResults=10&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    );
    setVideos(response.data.items);
  };
  useEffect(() => {
    fetchVideosChannelInfo();
  }, [param.id]);
  console.log(videos);

  return (
    <div className="relative">
      {showModal && (
        <div
          className="bg-black/30 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center z-30 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-slate-600 text-white w-[360px] overflow-y-clip p-4 rounded-md">
            {channelData && channelData.snippet.description}
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-36 h-36 rounded-full">
          <img
            src={channelData && channelData.snippet.thumbnails.medium.url}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex-col gap-2">
          <h2 className="text-3xl">
            {channelData && channelData.snippet.title}
          </h2>
          <div className="flex gap-4">
            <p>{channelData && channelData.snippet.customUrl}</p>
            <p>
              {channelData && channelData.statistics.subscriberCount}{" "}
              subscribers
            </p>
            <p>{channelData && channelData.statistics.videoCount} videos</p>
          </div>
          <div className="flex gap-1">
            <p>
              {channelData && channelData.snippet.description.length < 60
                ? channelData.snippet.description
                : channelData &&
                  channelData.snippet.description.substring(0, 61) + " ... "}
            </p>
            {channelData && channelData.snippet.description.length > 60 && (
              <button
                className="text-gray-500 font-semibold"
                onClick={() => setShowModal(true)}
              >
                Show more
              </button>
            )}
          </div>
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
        {videos.length > 0 &&
          videos.map((video) => {
            return <Card isChannel={false} key={video.id} videoData={video} />;
          })}
      </div>
    </div>
  );
};

export default ChannelInfo;
