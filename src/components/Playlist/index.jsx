import { useEffect, useState } from "react";
import VideoCardPlaylist from "../VideoCardPlaylist";
import { useParams } from "react-router";
import api from "../../apis";
import Spinner from "../Spinner";

const Playlist = () => {
  const [playlist, setPlaylist] = useState(null);
  const [playlistItems, setPlaylistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  // scope
  const fetchPlaylistInfo = async () => {
    const response = await api.get(
      `playlists?part=snippet%2CcontentDetails&id=${params.id}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    );
    setPlaylist(response.data.items[0]);
  };
  const fetchPlaylistItems = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `playlistItems?part=snippet%2CcontentDetails&maxResults=8&playlistId=${
          params.id
        }&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
      );
      setPlaylistItems(response.data.items);
    } catch (error) {
      console.log("Error fetching data ", error);
      setError("Can't load comments");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPlaylistInfo();
    fetchPlaylistItems();
  }, []);
  if (error) {
    return <div className="text-red-500 font-bold text-center">{error}</div>;
  }
  return (
    <div>
      {isLoading && <Spinner />}
      <div className="bg-gray-300/30 p-8 flex items-start rounded-md gap-6">
        <img
          className="w-[30%] h-[300px]"
          src={playlist?.snippet?.thumbnails?.high?.url}
        />
        <div>
          <h2 className="text-2xl text-white font-semibold w-auto">
            {playlist?.snippet?.title}
          </h2>
          <p>
            {playlist?.snippet?.description
              ? playlist?.snippet?.description
              : "No description"}
          </p>
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlistItems.length > 0 &&
          playlistItems.map((item) => {
            return <VideoCardPlaylist data={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Playlist;
