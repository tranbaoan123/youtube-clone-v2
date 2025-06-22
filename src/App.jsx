import { useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageVideos } from "./redux/home-page/homePageSlice";

function App() {
  const homeData = useSelector((state) => state.youtube.homeVideoList);
  const dispatch = useDispatch();
  const channelIdList =
    homeData?.items &&
    homeData?.items.length > 0 &&
    homeData?.items.map((video) => {
      return video.snippet.channelId;
    });
  const channelIdString =
    channelIdList && channelIdList.length > 0 && channelIdList.join(",");
  console.log(channelIdString);

  useEffect(() => {
    dispatch(fetchHomePageVideos());
  }, []);

  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;
