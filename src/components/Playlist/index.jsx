import PlayListCard from "../Playlist-Card";

const Playlist = () => {
  return (
    <div>
      <div className="bg-gray-200/20 rounded-md p-8 flex gap-4">
        <div className="w-[30%] bg-pink-500 h-[360px]"></div>
        <div className="w-[70%] flex flex-col gap-6">
          <h3 className="text-3xl font-bold">My Playlist</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            doloremque, vero soluta officiis praesentium dolores aperiam! Vel ex
            aperiam, quas dolores, laudantium quo esse error veritatis impedit
            enim qui explicabo.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <PlayListCard />
      </div>
    </div>
  );
};

export default Playlist;
