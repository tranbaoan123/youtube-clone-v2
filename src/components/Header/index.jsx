import Drawer from "../Drawer";
import SearchBar from "../SearchBar";

const Header = ({ filter, setFilter, categoryId, setCategoryId }) => {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <Drawer
          filter={filter}
          setFilter={setFilter}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />
        <SearchBar />
        {/* Extra div to align items */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
