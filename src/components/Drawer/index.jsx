import { Menu, Youtube } from "lucide-react";

const Drawer = () => {
  return (
    <div
      className="flex gap-3 items-center"
      id="drawer-example"
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
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
  );
};

export default Drawer;
