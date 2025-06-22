import axios from "axios";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const fetchHomeData = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=es&videoCategoryId=17&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    console.log("check data ", res);
  };
  useEffect(() => {
    fetchHomeData();
  }, []);
  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;
