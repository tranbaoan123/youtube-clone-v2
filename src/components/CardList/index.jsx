import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { useEffect } from "react";
import { fetchHomeVideoList } from "../../redux/homePageSlice/homePageSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.homePage.homeData);
  useEffect(() => {
    dispatch(fetchHomeVideoList());
  }, []);
  console.log("check data :", homeData);
  return (
    <div className="w-[95%] mx-auto mt-4 grid grid-cols-3 gap-4">
      {homeData.items &&
        homeData.items.map((video) => {
          return <Card key={video.id} />;
        })}
    </div>
  );
};

export default CardList;
