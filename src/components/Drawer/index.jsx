import {
  Gamepad2,
  House,
  Lightbulb,
  Menu,
  Music,
  Newspaper,
  Popcorn,
  Shirt,
  Volleyball,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";
import DrawerItem from "../DrawerItem";
import api from "../../apis";
import { useEffect, useState } from "react";

const Drawer = ({ filter, setFilter, setCategoryId }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const categoriesLinks = [
    {
      icon: <Music />,
      text: "Music",
      filterTag: "music",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Music",
      )?.id,
    },
    {
      icon: <Volleyball />,
      text: "Sports",
      filterTag: "sports",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Sports",
      )?.id,
    },
    {
      icon: <Gamepad2 />,
      text: "Gaming",
      filterTag: "gaming",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Gaming",
      )?.id,
    },
    {
      icon: <Popcorn />,
      text: "Movies",
      filterTag: "movies",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Movies",
      )?.id,
    },
    {
      icon: <Newspaper />,
      text: "Documentary",
      filterTag: "documentary",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Documentary",
      )?.id,
    },
    {
      icon: <Shirt />,
      text: "Fashion",
      filterTag: "fashion",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Howto & Style",
      )?.id,
    },
    {
      icon: <Lightbulb />,
      text: "Education",
      filterTag: "education",
      categoryId: categoriesData.find(
        (category) => category.snippet.title === "Education",
      )?.id,
    },
  ];

  const fetchCategories = async () => {
    const response = await api.get(
      `videoCategories?part=snippet&regionCode=us&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`,
    );

    setCategoriesData(response.data.items);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex gap-3 items-center">
      <div className="text-center">
        <button
          className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <Menu className="cursor-pointer" />
        </button>
      </div>
      {/* drawer content */}
      <div
        id="drawer-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#0c0c0c] w-96"
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <div className="flex items-center gap-1 mb-6">
          <div className="text-center">
            <button
              className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              type="button"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
            >
              <Menu className="cursor-pointer" />
            </button>
          </div>
          <div className="flex gap-1 cursor-pointer items-center">
            <Youtube
              className="text-red-500"
              size={48}
              fill="red"
              stroke="black"
              strokeWidth={1}
            />
            <h3 className="text-2xl">Youtube</h3>
          </div>
        </div>
        <ul className="px-4">
          <DrawerItem
            icon={<House />}
            text={"Home"}
            filter={filter}
            filterTag={"home"}
            setFilter={setFilter}
          />
          <hr />
          {categoriesLinks.map((category) => {
            return (
              <DrawerItem
                key={category.text}
                icon={category.icon}
                text={category.text}
                filter={filter}
                filterTag={category.filterTag}
                setFilter={setFilter}
                categoryId={category.categoryId}
                setCategoryId={setCategoryId}
              />
            );
          })}
        </ul>
        <hr />
      </div>

      <Link to={"/"}>
        <div className="flex gap-1 cursor-pointer items-center">
          <Youtube
            className="text-red-500"
            size={48}
            fill="red"
            stroke="black"
            strokeWidth={1}
          />
          <h3 className="text-2xl">Youtube</h3>
        </div>
      </Link>
    </div>
  );
};

export default Drawer;
