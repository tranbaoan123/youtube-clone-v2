import { ThumbsUp } from "lucide-react";
import { Link } from "react-router";

const CommentBody = ({ commentData }) => {
  console.log(commentData.replies);

  return (
    <div className="flex items-center gap-2">
      <Link
        to={`/channel/${commentData?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={
            commentData?.snippet?.topLevelComment?.snippet
              ?.authorProfileImageUrl ||
            commentData?.snippet.authorProfileImageUrl
          }
        />
      </Link>
      <div>
        <p>
          {commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p>{commentData?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          <span>
            {commentData?.snippet?.topLevelComment?.snippet?.likeCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentBody;
