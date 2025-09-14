import { useParams } from "react-router";
import SideList from "../SideList";
import VideoPlay from "../VideoPlay";

const VideoDetail = () => {
  const params = useParams();

  return (
    <div className="flex gap-4">
      <VideoPlay id={params.id} />
      <SideList />
    </div>
  );
};

export default VideoDetail;
