import { ThumbsUp } from "lucide-react";
const Comment = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
      </div>
      <div>
        <p>@asdhas</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti fugit quae.
        </p>
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
