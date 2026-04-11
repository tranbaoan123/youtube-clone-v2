import { Menu, Youtube } from "lucide-react";
import { Link } from "react-router";
import SearchBar from "../SearchBar";
import Drawer from "../Drawer";

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <Drawer />
        <SearchBar />
        {/* Extra div to align items */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
