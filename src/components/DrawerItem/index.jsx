import { Link } from "react-router";

const DrawerItem = ({
  icon,
  text,
  filter,
  filterTag,
  setFilter,
  categoryId,
  setCategoryId,
}) => {
  const toggleCategory = () => {
    setFilter(filterTag);
    setCategoryId(categoryId);
  };
  return (
    <Link onClick={() => toggleCategory()}>
      <li
        className={`${filter === filterTag ? "bg-gray-200/20" : ""} flex items-center gap-2 py-4 hover:bg-gray-200/20`}
      >
        <i>{icon}</i>
        <p>{text}</p>
      </li>
    </Link>
  );
};

export default DrawerItem;
