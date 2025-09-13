import { Menu, Youtube } from "lucide-react";
import { Link } from "react-router";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <div className="flex gap-3 items-center">
          <button
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <Menu className="cursor-pointer" />
          </button>
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
        <SearchBar />
        {/* Extra div to align items */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
