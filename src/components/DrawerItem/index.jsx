const DrawerItem = ({ title, icon }) => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center px-2 py-2 text-body rounded-base hover:bg-white/25 hover:text-fg-brand group"
      >
        {icon}
        <span className="ms-3">{title}</span>
      </a>
    </li>
  );
};

export default DrawerItem;
